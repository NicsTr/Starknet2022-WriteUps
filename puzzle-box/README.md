# `puzzle-box`

## Number of points

475 (tied to the third hardest challenge of the CTF)

## Challenge victory condition

This challenge is validated when a call to `is_solved` returns 1. To do so, one must invoke `solve`
after having solve each one of the four different puzzles.

## Challenge solution

Each puzzle is independent and have to be solved by invoking the corresponding
`solve_step_x` function where `x` is the index of the puzzle.

### Step 1

The source code of `solve_step_1` is the following:

```cairo
@external
func solve_step_1{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(_mult: felt) -> (
    ) {
    let (class_h) = class_hash.read();
    let (res) = Contract_1.library_call_solve_step_1(class_hash=class_h, mult=_mult);
    if (res == 1) {
        step_1_done.write(1);
        return ();
    }
    return ();
}
```

This smart-contract is calling a function implemented in a separate file using
`library_call`. The source code of this second function is:
```cairo
const const_step_1 = 3609145100;
@external
func solve_step_1{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(mult: felt) -> (
    res: felt
) {
    let (caller) = get_caller_address();
    let prod = const_step_1 + 12345 + caller;

    if (mult == prod) {
        step_1.write(prod);
        return (res=1);
    }
    return (res=0);
}
```

Remember how [library calls works in
`cairo`](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html#library-calls), and more specifically this part:
>  `get_caller_address()` and `get_contract_address()` will return the same value they would have returned if they were called from the calling function.

Thus, the right value for `mult` to be given to `solve_step_1` is `3609145100 + 12345 + <account_address>`.

### Step 2

This step is very similar to step 1:
```cairo
@external
func solve_step_2{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    product: felt
) -> () {
    let (imp_h) = implementation_hash.read();
    let (res) = Contract_2.solve_step_2(contract_address=imp_h, mult=product);
    if (res == 1) {
        step_2_done.write(1);
        return ();
    }
    return ();
}
```

And in the implementation contract:
```cairo
const step_2_const = 1010886179;
@external
func solve_step_2{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(mult: felt) -> (
    res: felt
) {
    let (caller) = get_caller_address();
    let prod = step_2_const + 965647271 + caller;

    if (mult == prod) {
        step_2.write(prod);
        return (res=1);
    }
    return (res=0);
}
```

However this time, the function is not called using a library call. This means
the result of `get_caller_address()` is not the account address but the address
of the main contract. This means that the right value to be given to
`solve_step_2` is `1010886179 + 965647271 + <main_contract_address>`.

### Step 3

The source code for the third step is:
```cairo
func get_val() -> (val0: felt, val1: felt) {
    [ap] = 3, ap++;
    [ap] = 4, ap++;

    [ap] = [ap - 1] * [ap - 2], ap++;
    [ap] = [ap - 1] * [ap - 2], ap++;
    [ap] = [ap - 1] * [ap - 2], ap++;
    [ap] = [ap - 1] * [ap - 2], ap++;

    [ap] = [ap - 2] + [ap - 4], ap++;
    [ap] = [ap - 1] + [ap - 4], ap++;
    ret;
}

@external
func solve_step_3{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(value: felt) -> (
    ) {
    let (v0, v1) = get_val();
    let res = v0 * v1;

    if (value == res) {
        step_3_done.write(1);
        return ();
    }
    return ();
}
```

To solve this step, we chose to use a dynamic approach: we copied the code of
`get_val` to a
[Cairo Playground](https://www.cairo-lang.org/playground/) and run it. It is also possible to
analyse the code statically:
```cairo
// `ap` is a stack pointer growing up.
[ap] = 3, ap++; // push 3
[ap] = 4, ap++; // push 4

[ap] = [ap - 1] * [ap - 2], ap++; // push 4 * 3 = 12
[ap] = [ap - 1] * [ap - 2], ap++; // push 12 * 4 = 48
[ap] = [ap - 1] * [ap - 2], ap++; // push 48 * 12 = 576
[ap] = [ap - 1] * [ap - 2], ap++; // push 576 * 48 = 27648

[ap] = [ap - 2] + [ap - 4], ap++; // push 576 + 12 = 588
[ap] = [ap - 1] + [ap - 4], ap++; // push 588 + 48 =  636
ret; // return values are the values on top of the stack, that is `([ap - 1], [ap - 2]) = (636, 588)`
```

The expected value to give as parameter to `solve_step_3` is then `373968`.

### Step 4

```cairo
func st_4_1{value: felt}(val: felt) -> (res: felt) {
    let value = 84092830;
    return (res=1019019324);
}

func st_4_2(value: felt) -> (res: felt) {
    let value = 21835210;
    return (res=value);
}

@external
func solve_step_4{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(input: felt) -> (
    ) {
    let (value) = st_4_2(12301342);
    with value {
        st_4_1(17329287);
    }
    if (value == input) {
        step_4_done.write(1);
        return ();
    }
    return ();
}
```

For the final step, we can use the exact same approach: either run it and
display the result in a Cairo Playground or analyse it statically.

After calling `st_4_2`, the local variable `value` is set to `21835210`, the
return value of `st_4_2`. The `with value {` statement defines the local
variable `value` as the implicit argument of `st_4_1`; when this value is
modified in the call to `st_4_1`, the change is reflected is the scope of
`solve_step_4`. Then, when comparing `value` and `input`, `value = 84092830`
which is the expected value to validate this step.

