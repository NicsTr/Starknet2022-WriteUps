# `magic-encoding`

## Number of points

436 (tied to the fourth easiest challenge of the CTF)

## Challenge victory condition

To solve this challenge, a call to the `is_challenge_done` function of the deployed contract must return 1. However, we don't have the source code of the underlying contract but only a compiled version.

## Challenge solution

To solve this challenge, we used
[`thoth`](https://github.com/FuzzingLabs/thoth) which is a tool designed
specifically to reverse engineer cairo smart contracts. We use the following
command line to get a decompiled version of the smart contracts:
`thoth local public/contracts/magic-encoding.json -d > decompiled.cairo`

The interesting part can be found in the function `test_password`:
```cairo
// Function 6
@external func __main__.test_password{syscall_ptr : felt*, pedersen_ptr : starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr : felt, bitwise_ptr : starkware.cairo.common.cairo_builtins.BitwiseBuiltin*}(password : felt) -> (res : felt){
    v55 = bitwise_ptr
    v57 = 12345    // 09
    v58 = password
    bitwise_xor(v55, v57, v58)
    assert v60 = v58 - 19423
    if (v60 == 0) {
        v61 = syscall_ptr
        v63 = pedersen_ptr
        v65 = range_check_ptr
        v67 = 1    // 0x1
        write(v61, v63, v65, v67)
        v68 = v44
        v69 = 1    // 0x1
        return(v69)

    }
    v70 = syscall_ptr
    v71 = pedersen_ptr
    v72 = range_check_ptr
    v73 = v67
    v74 = 0    // 0x0
    return(v74)
}
```

This function is interesting because in the execution flow we see a
condition check followed, if the condition is satisfied, by the write of `1`.

The condition is that `v60` should be equal to 0, `v0` being the result of `v58 - 19423`; in
turn, `v58` is the result of the call of `bitwise_xor` between a constant,
`12345` and the parameter `password` of the function.

This allows us to reconstruct the expected password: `password = 19423 ^
12345`.
