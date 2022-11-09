# `first-come-first-served`

## Number of points

464 (sixth easiest challenge of the CTF)

## Challenge victory condition

The challenge is validated when the balance of the user (which can be retrieved
by calling `get_balance`) is strictly greater than the
"maximum" possible thought by the smart contract writer (which can be retrieved
by calling `get_max_supply`).

## Challenge solution

The whole challenge relies on a `claim` function that is used to increase user
balance:

```cairo
@external
func claim{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}() {
    let (_last_claimer) = last_claimer.read();
    let (caller) = get_caller_address();

    let (already_claimed) = claimed.read(caller);
    with_attr error_message("Already claimed") {
        assert already_claimed = 0;
    }

    let left_to_claim = is_le_felt(_last_claimer, 30);
    with_attr error_message("Too many claimers") {
        assert left_to_claim = 1;
    }
    let (total_shares) = shares.read();
    let shares_to_deal = total_shares / _last_claimer;
    claimed.write(caller, 1);
    balances.write(caller, shares_to_deal);

    last_claimer.write(_last_claimer + 1);
    return ();
}
```

This function can be summarized by the following behaviour:
* A given address can only claim once. This is ensured by writing 1 to the caller
  address is the `claimed` storage variable and checking its value before
increasing user balance.
* Only 30 different addresses can claim. This is ensured by incrementing the
  storage variable `last_claimer` at each claim and checking that its value is
lower than 30.
* The amount actually added to the user balance, `shares_to_deal`, is governed by
this line: `let shares_to_deal = total_shares / _last_claimer;`, where
`total_shares` is equal to `max_supply` which is equal to `178757362047346148211425280000000`.

At first glance, it seems that the claimed amount is only decreasing since it
is equal to the division of `total_shares` by the number of users that have
already claimed plus one. However, both `total_shares` and `_last_claimer` are defined
as field elements: this means that the division is **not** an integer
division, but a division in the field. A field division does not behave like
an integer division, and is easiest to reason with by seeing it as the
multiplication by an inverse. The inverse $a^{-1}$ of a field element $a$ is the element
such that $ab = 1$, which is guaranteed by the definition of a field (remember
that in our case, the multiplication is just the integer multilication
**modulo a given prime `p`**). Thus, if we see `total_shares / _last_claimer;`
as `total_shares * modular_inverse(_last_claimer) % p` it is easy to see that
there is no guarantee the result is lower than `total_shares` (for example
take `total_shares = 3`, `modular_inverse(_last_claimer) = 2` and any `p >
6`).

In fact, for `_last_claimer = 23` the result of the operation is greater than
`max_supply`. This value has been found be computing the result of the
division for every value between 1 and 30, stopping at the first suitable
value.

During deployement of the contract, the game server is invoking `claim` once.
To be able to have 22 people claiming before us, we created 21 identical contracts with
different addresses (by changing the salt) implementing a function that
invokes the `claim` function of the target contract. Here is their source
code:
```cairo
%lang starknet


@contract_interface
namespace VictimContract {
    func claim() {
    }
}

from starkware.cairo.common.cairo_builtins import HashBuiltin
from starkware.starknet.common.syscalls import get_caller_address

@storage_var
func victim_contract() -> (res: felt) {
}

@constructor
func constructor{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(victim: felt) {
    victim_contract.write(victim);
    return ();
}

@external
func claim{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}() {
    let (victim_address) = victim_contract.read();
    VictimContract.claim(contract_address=victim_address);
    return ();
}
```
