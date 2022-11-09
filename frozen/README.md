# `frozen-finance`

## Number of points

331 (third easiest challenge of the CTF)

## Challenge victory condition

To solve this challenge, a call to the `readBalance` function of the deployed contract must return 0.

## Challenge solution

To be able to invoke `withdraw` for our user address, our balance must satisfy the following condition:
```cairo
    uint256_le(balance, Uint256(low=46, high=7)) == 0
```
This means that our balance must be higher than `Uint256(low=46, high=7)`. The
[`Uint256` cairo
type](https://github.com/starkware-libs/cairo-lang/blob/0ba3ff59c1c86f2a30adc8fd144eaacb22c48ce9/src/starkware/cairo/common/uint256.cairo#L9)
is actually made of two `felt`: `high` and `low` representing the number
$\texttt{high}\times{}2^{128} + \texttt{low}$. Thus, `Uint256(low=46, high=7)`
represents the number $7\times{}2^{128} + 46$.

We are able to deposit some amount in our balance by invoking the `deposit`
function. Here is the source code of this function:
```cairo
@external
func deposit{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(amount: Uint256) {
    with_attr error_message("Suspicious deposit, Autoridade Tributária e Aduaneira notified.") {
        // Make sure inputs are < 2**128
        assert amount.high = 0;
        assert amount.high = 0;
    }

    let (deposits) = deposits_.read();
    let le = is_le_felt(MAX_DEPOSITS, deposits);
    with_attr error_message(
            "Account frozen: High transaction rate. Autoridade Tributária e Aduaneira notified.") {
        assert le = 0;
    }

    let (balance) = balance_.read();
    let (balance, carry) = uint256_add(balance, amount);

    with_attr error_message("You're far too wealthy. Autoridade Tributária e Aduaneira en route.") {
        assert carry = 0;
    }

    balance_.write(balance);
    return ();
}
```

As you can see, there are some constraints on the amount we are trying to
deposit.

First, we cannot deposit an `amount` with a `high` part that is nonzero;
this means that we cannot directly ask for deposit of $7\times{}2^{128}$ by
sending a `Uint256(high=7, low=0)`.

Then there seems to be a constraint in the number of deposits done
(`is_le_felt(MAX_DEPOSITS, deposits) == 0`). However, the corresponding storage
variable is never increased, thus this constraint is ineffective.

Lastly, the carry is the addition of the balance and the requested deposit
amount should be 0, meaning that we cannot overflow our balance.

We start with a balance of `50` and we want to have a balance strictly greater
than $7\times{}2^{128} + 46$. The maximum amount we can deposit each time is
$2^{128} - 1$, thus we need at least eight invocations of `deposit` to achieve our goal.
