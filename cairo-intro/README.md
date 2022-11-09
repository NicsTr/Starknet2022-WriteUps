# `cairo-intro`

## Number of points

304 (tied for easiest challenge of the CTF)

## Challenge victory condition

To solve this challenge, a call to the `is_solved` function of the deployed contract must return 1.
To do so, we have to invoke `solve_challenge` and make sure it executes without error.

## Challenge solution

For `solve_challenge` to be executed without error, the caller address must be registered
in the `owner` storage variable. `owner` can be updated by invoking `increase_balance` and by having
an `amount` satisfying a number of condition:
```cairo
    let (caller: felt) = get_caller_address();
    let (_, r: felt) = unsigned_div_rem(amount, 14);
    let condition1: felt = is_le(31333333377, amount);
    let condition2: felt = is_le(amount, 31333333391);
    if (r == 0 and condition1 == 1 and condition2 == 1) {
        owner.write(caller);
        return ();
    }
```

This means that `amount` must be such that:
* `31333333377 < amount < 31333333391` and ;
* `amount` must be divisible by `14`

The target value for `amount` can then be set for the user balance by invoking `increase_balance`
with the appropriate value.
