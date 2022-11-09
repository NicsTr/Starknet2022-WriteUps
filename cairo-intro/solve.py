from starknet_py.net import AccountClient, KeyPair
from starknet_py.net.models import StarknetChainId
from starknet_py.contract import Contract
from starknet_py.net.gateway_client import GatewayClient
from starknet_py.net.networks import TESTNET

import asyncio

 
# Don't forget to fill values given by gameserver
uuid = None # UUID
RPC_ENDPOINT = f"http://{uuid}@x.x.x.x:yyyy"
GATEWAY_CLIENT = GatewayClient(RPC_ENDPOINT, TESTNET)

PRIV_KEY = None # Private key as integer litteral
USER_ADDRESS = None # User address as hex string
CONTRACT_ADDRESS = None # Contract address as hex string

def get_account():
    """
    Construct account object from parameters given by the gameserver
    """
    key_pair = KeyPair.from_private_key(PRIV_KEY)

    # Create an AccountClient instance
    account = AccountClient(
        address=USER_ADDRESS,
        client=GATEWAY_CLIENT,
        key_pair=key_pair,
        chain=StarknetChainId.TESTNET,
        supported_tx_version=1,
    )

    return account
 
async def run():
    # Sanity check that we are connected
    block = await GATEWAY_CLIENT.get_block(0)

    acc_client = get_account()
    contract = await Contract.from_address(client=acc_client, address=CONTRACT_ADDRESS)
 
    # YOUR TXs HERE

    invocation = await contract.functions["get_balance"].call()
    curr_balance = invocation.res
    print(curr_balance)
    
    target = None
    # Find target with given conditions
    for tmp in range(31333333377, 31333333391 + 1):
        if tmp % 14 == 0:
            target = tmp
    assert target is not None
    

    # Increase balance accordingly and invoke the right function to solve challenge
    p_felt = 3618502788666131213697322783095070105623107215331596699973092056135872020481
    left_to_add = (target - curr_balance) % p_felt

    invocation = await contract.functions["increase_balance"].invoke(left_to_add, max_fee=int(1e16))
    await invocation.wait_for_acceptance()
    print(invocation)

    invocation = await contract.functions["solve_challenge"].invoke(max_fee=int(1e16))
    await invocation.wait_for_acceptance()
    print(invocation)

    invocation = await contract.functions["is_solved"].call()
    print(invocation.test)
 
if __name__ == "__main__":
    asyncio.run(run())
