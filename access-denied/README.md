# `access-denied`

## Number of points

475 (tied to the third hardest challenge of the CTF)

## Challenge victory condition

This challenge is validated when a call to `is_solved` returns 1. To do so, one must invoke `solve` after checking a condition that looks impossible - the transaction signature check has to fail, but that's the necessary condition to accept it on the network. How is that possible ?

## Challenge solution

The source code of the validation is the following:

```cairo
@external
func solve{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr, ec_op_ptr: E
cOpBuiltin*}() {
    alloc_locals;
    let (tx_info) = get_tx_info();
    let (public_key) = IAccount.get_public_key(contract_address=tx_info.account_contract
_address);
    let (is_valid : felt) = check_ecdsa_signature(
        message=tx_info.transaction_hash,
        public_key=public_key,
        signature_r=tx_info.signature[0],
        signature_s=tx_info.signature[1]
    );
    assert is_valid = FALSE;
    _solved.write(1);
    return ();
}
```

Let's remember how accounts work on Starknet - an account is just another contract (thanks to [account abstraction](https://mirror.xyz/sylve.eth/Un2EYccIpfE3BDevwOf9hWWcSn2NsiRIivZlBLNX7Ag)) that implements a few specific methods called by Starknet OS. In this scenario `__validate__` verifies that a transaction is valid, checking its signature. `get_public_key` returns the public key of the authorized signer, but that's just a convention - `__validate__` might very well not use it.

We see a path forward here - by deploying a new account returning a wrong public key on `get_public_key`, we'll pass this test.

How wrong should it be ? Let's take a look at [`check_ecdsa_signature`](https://github.com/starkware-libs/cairo-lang/blob/v0.10.2/src/starkware/cairo/common/signature.cairo#L32) - we see that the key doesn't even need to be on the [Stark curve](https://docs.starkware.co/starkex/stark-curve.html) - so just returning 0 will do !

We modify the OpenZeppelin contract accordingly and deploy it ... and get an unexpected `ERC 20` related error when solving. 

Why ? Well the new account isn't automatically provisioned with gas (in WETH), so we need to transfer some from the old account first. After wasting some precious CTF time on this, it works just fine and we get the flag.
