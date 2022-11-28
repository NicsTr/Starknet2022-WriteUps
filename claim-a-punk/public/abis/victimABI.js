const ABI = [
  {
    inputs: [
      {
        name: "nft_class_hash",
        type: "felt",
      },
      {
        name: "owner",
        type: "felt",
      },
    ],
    name: "constructor",
    outputs: [],
    type: "constructor",
  },
  {
    inputs: [],
    name: "getNftClassHash",
    outputs: [
      {
        name: "hash",
        type: "felt",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPunksNftAddress",
    outputs: [
      {
        name: "address",
        type: "felt",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "address",
        type: "felt",
      },
    ],
    name: "isWhitelisted",
    outputs: [
      {
        name: "result",
        type: "felt",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "address",
        type: "felt",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "address",
        type: "felt",
      },
    ],
    name: "whitelist",
    outputs: [],
    type: "function",
  },
  {
    inputs: [
      {
        name: "to",
        type: "felt",
      },
    ],
    name: "transferWhitelistSpot",
    outputs: [],
    type: "function",
  },
  {
    inputs: [
      {
        name: "to",
        type: "felt",
      },
    ],
    name: "claim",
    outputs: [],
    type: "function",
  },
];

export default ABI;
