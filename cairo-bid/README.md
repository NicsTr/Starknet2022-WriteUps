# `cairo-bid`

## Number of points

464 (sixth easiest challenge of the CTF)

## Challenge victory condition

This challenge setup is a little more complex than other challenges: the smart
contract implements a system of auction where users having a deposit can bid
part of it. The highest bidder is the winner of the auction. A legitimate
bidder have already bid 1000 and the attacker is only given a deposit of 10.
The goal is for the attacker to be the winner, which means that a call to the
`get_winner` function of the deployed contract must return 2.

## Challenge solution

Solving this challenge require to find two different vulnerabilities that,
once exploited, allows a user to bid for more than its available deposit.

### Signed comparison

In order to avoid a user from bidding more than its available deposit, the
following check function is used by the smart contract:

```cairo
// check if user has enough amount to bid
func check_if_enough_funds{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    address: Address, bid_amount: Uint256
) {
    uint256_check(bid_amount);

    let (user_balance) = Bid_balance_of.read(address);
    let (user_balance_uint256) = felt_to_uint256(user_balance);
    let (user_got_enough_funds) = uint256_signed_le(bid_amount, user_balance_uint256);
    with_attr error_message("Bid amount exceeds current balance!"){
        assert user_got_enough_funds = TRUE;
    }
    return ();
}
```

The problem with this function is that is uses `uint256_signed_le` to compare
the `bid_amount` and the user balance. This means that the `Uint256` are no
longer interpreted as unsigned integers but instead as signed integer for this
comparison. After the check, especially during the call to
`check_minimal_bid` and when the bid is actually registered, the amount bid is
interpreted as unsigned. Thus, a high value for the bid amount will be
interpreted as a negative integer during the check, passing the test, and as a
really big integer during the rest of the logic of the program.

However, the function `uint256_to_felt` is used on the bid amount and was
designed to check if the `Uint256` given as input is a valid field element. We will see
now why this check fails to do its job.

### Type casting

To check that there is nothing weird with the `Uint256` value provided as bid
amount, the following function is used to convert it to a field element:

```cairo
// safe conversion from uint256 to felt
func uint256_to_felt{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    value: Uint256
) -> (res: felt) {
    uint256_check(value);
    
    let res: felt = value.low + value.high * (2 ** 128);

    with_attr error_message("uint256_to_felt: Value doesn't fit in a felt") {
        assert_251_bit(res);
    }

    return (res,);
}

func assert_251_bit{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    val: felt
) {
    let is_proper_felt = is_le_felt(val, 2**251);

    assert is_proper_felt = TRUE;

    return ();
}
```

The expected behaviour of this function is to raise an error when the
`Uint256` is bigger than $2^{251}$. This check, if done
correctly, would avoid the previous vulnerability from being exploited: in
[two's complement](https://en.wikipedia.org/wiki/Two%27s_complement) signed
representation, an `Uint256` is interpreted as a strictly negative integer if
and only if the highest bit is set to 1, which means the unsigned
interpretation must be greater than $2^255$.

Nevertheless, this check is not done properly. Before passing `value` to the
function `assert_251_bit`, there is an attempt at interpreting `value` (which
is a `Uint256`) as a field element by doing the computation:
`let res: felt = value.low + value.high * (2 ** 128);`. But remember that both
`high` and `low` of a `Uint256` are field element, thus both the result of the
multiplication and addition are field elements. In fact, the computation is
done modulo `p` which is a prime number of $2^252$ bits defining the field and
its arithmetic. The parameter given to `assert_251_bit` is thus guaranteed to
be betweeen 0 and `p`.

### Summary

To summarize, as an attacker we have to bid with a `Uint256` value that has
its highest bit set to one while its **value modulo `p`** is less than
$2^{251}$. This kind of appropriate value is easy to find. For example, 
`Uint256(low=0, high=2**128-1)` is a suitable choice.
