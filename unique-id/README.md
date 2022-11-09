# `unique-id`

## Number of points

475 (tied to the third hardest challenge of the CTF)

## Challenge victory condition

This challenge setup is not straightforward: there is two distinct contracts
deployed, one called `implementation_v1` and the other called `proxy`. The
proxy contract implements a `__default__` function that is exactly the one
[described in the
documentation](https://www.cairo-lang.org/docs/hello_starknet/default_entrypoint.html).
This function is executed when a call is made to the contract where the selector
(basically, the function internal name) does not corresponds to any other
functions declared in the contract. This implementation of the `__default__`
function is then calling the same function with the same argument on an
underlying contract specified in the `implementation` storage variable using a
library call. At the initialization of the challenge, `implementation` is set to
point at `implementation_v1` contract.

This challenge is validated when a call to `getIdNumber` with the user address as argument returns 313337. 

## Challenge solution

This challenge has been solved in two steps.

### Being owner of the proxy

The proxy contract has a simple owner mechanism implemented as a storage
variable `owners` containing a map between addresses and field element. A user
is considered an owner if the field element associated with their address is 1.
Being an owner allows a user to invoke the `upgrade` function that is used to
change the address of the implementation contract.

In the original implementation contract, called `implementation_v1`, there is
also a simple owner mechanisme associating an address to a struct called
`Identity` and defined as:
```cairo
struct Identity {
    first_name: felt,
    last_name: felt,
    id_number: felt,
}
```

A function, `mintNewId`, is designed to add a user to the owners of
`implementation_v1`:
```cairo
@external
func mintNewId{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    new_first_name: felt, new_last_name: felt
) {
    let (caller) = get_caller_address();
    let (current_id) = owners.read(caller);
    with_attr error_message("Id exists") {
        assert current_id.id_number = 0;
    }
    let (current_counter) = id_counter.read();
    id_counter.write(current_counter + 1);
    let new_id = Identity(
        first_name=new_first_name, last_name=new_last_name, id_number=start_id + current_counter
    );
    owners.write(caller, new_id);

    return ();
}
```

However, this function can be called from the proxy contract using its
`__default__` function that itself uses a library call. But remember [from the
documentation](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html#library-calls) that:
> Storage-changing operations in the invoked function will change the state of
> the calling contract. Similarly, `get_caller_address()` and
> `get_contract_address()` will return the same value they would have returned if
> they were called from the calling function.

This means that calling `mintNewId` from the proxy contract actually modifies
the `owners` storage variable of the `proxy` contract, and not the
`implementation_v1` contract. The fact that the exact type of `owners` differs between
the contracts (one is a `felt -> felt` map, the other is a `felt -> Identity`
map) does
not seem to cause a lot of problem: calling `mintNewId` with `(1, 1)` as
parameter allows us to be owner of the proxy contract.

### Modifying `getIdNumber`

Once we are owner of the proxy contract, we want to change the behaviour of the
`getIdNumber` function. To do this, we write and deploy our own contract
implementing this function by copying the `implementation_v1` contract but
replacing the code for `getIdNumber` by:

```cairo
@external
func getIdNumber{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(owner: felt) -> (
    id_number: felt
) {
    return (id_number=313337);
}
```

Then, we invoke the `upgrade` function on the proxy contract so that the
`__default__` function now uses our custom function to do library calls.
Finally, calling `getIdNumber` on the proxy contract will return `313337` every
time.
