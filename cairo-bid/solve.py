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

    invocation = await contract.functions["get_winner"].call()
    print(invocation)

    invocation = await contract.functions["bid"].invoke(2, {"low": 0, "high": 2**128-1}, max_fee=int(1e16))
    await invocation.wait_for_acceptance()
    print(invocation)

    invocation = await contract.functions["get_winner"].call()
    print(invocation)
 
 
if __name__ == "__main__":
    asyncio.run(run())
