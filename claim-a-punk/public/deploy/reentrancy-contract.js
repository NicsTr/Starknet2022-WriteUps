// This script is used to deploy the reentrancy contract
// It must be run before the solution.js script

import { Provider, constants, ec, Account, ContractFactory } from "starknet";
import reentrancyCompiled from "../abis/reentrancyCompiled.js";

// UPDATE THESE LINES
const uuid = "<<UUID_OF_THE_INSTANCE>>";
const baseUrl = "<<ENDPOINT_OF_THE_INSTANCE>>";
const player = "<<ADDRESS_OF_THE_PLAYER>>";
const privateKey = "<<PRIVATE_KEY_OF_THE_PLAYER>>";

const provider = new Provider({
  sequencer: {
    baseUrl: `${baseUrl}`,
    chainId: constants.StarknetChainId.TESTNET,
    feederGatewayUrl: `${baseUrl}/feeder_gateway`,
    gatewayUrl: `${baseUrl}/gateway`,
    headers: {
      Authorization: `Basic ${Buffer.from(uuid + ":").toString("base64")}`,
    },
  },
});

const getAccount = () => {
  const starkKeyPair = ec.getKeyPair(privateKey);
  const account = new Account(provider, player, starkKeyPair);
  return account;
};

const main = async () => {
  const account = getAccount();
  const reentrancyFactory = new ContractFactory(
    reentrancyCompiled,
    account,
    reentrancyCompiled.abi
  );

  const contract = await reentrancyFactory.deploy();
  await contract.deployed();

  return contract;
};

main().then((contract) => contract);
