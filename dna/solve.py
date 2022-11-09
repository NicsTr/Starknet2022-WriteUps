from itertools import product
from starkware.starknet.public.abi import get_storage_var_address
from starknet_py.net import AccountClient
from starknet_py.net import KeyPair
from starknet_py.net.models import StarknetChainId
from starknet_py.contract import Contract
from starknet_py.net.gateway_client import GatewayClient
from starknet_py.net.networks import TESTNET

import asyncio

 
UUID = "cc225615-7a0b-4a2e-9c18-02e3cc1928f8"
RPC_ENDPOINT = f"http://{UUID}@18.157.198.111:5055"
GATEWAY_CLIENT = GatewayClient(RPC_ENDPOINT, TESTNET)

PRIV_KEY = 0x80fdbe6cf19d7fcbc6930c04f252e9a7
USER_ADDRESS = "0x49e730d46888b687a91c2c922584326fd902b99173c5e62e1243758ff13bc26"
CONTRACT_ADDRESS = "0x4b51d0637f9c1cf79e9cd7af819e43e4507873ab93eba239f6e17216c7333fa"

def get_account():

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

    block = await GATEWAY_CLIENT.get_block(block_number=1)
    print(block.transactions[0].constructor_calldata[0])


    acc_client = get_account()
    contract = await Contract.from_address(client=acc_client, address=CONTRACT_ADDRESS)
 


    # YOUR TXs HERE


    invocation = await contract.functions["is_challenge_done"].call()
    print(invocation)

    invocation = await contract.functions["test_password"].invoke([67, 84, 65, 71, 71, 65, 71, 65, 67, 84, 84, 67, 65, 67, 84, 67, 67], max_fee=int(1e16))
    await GATEWAY_CLIENT.wait_for_tx(invocation.hash)
    print(invocation)

    invocation = await contract.functions["is_challenge_done"].call()
    print(invocation)
 
 
if __name__ == "__main__":
    asyncio.run(run())
