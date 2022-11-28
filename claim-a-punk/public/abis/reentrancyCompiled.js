const REE_COMPILED = {
    "abi": [
        {
            "members": [
                {
                    "name": "low",
                    "offset": 0,
                    "type": "felt"
                },
                {
                    "name": "high",
                    "offset": 1,
                    "type": "felt"
                }
            ],
            "name": "Uint256",
            "size": 2,
            "type": "struct"
        },
        {
            "inputs": [
                {
                    "name": "addressContract",
                    "type": "felt"
                },
                {
                    "name": "addressUser",
                    "type": "felt"
                },
                {
                    "name": "addressPunk",
                    "type": "felt"
                }
            ],
            "name": "hack",
            "outputs": [],
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "interfaceId",
                    "type": "felt"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "name": "success",
                    "type": "felt"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "operator",
                    "type": "felt"
                },
                {
                    "name": "from_",
                    "type": "felt"
                },
                {
                    "name": "tokenId",
                    "type": "Uint256"
                },
                {
                    "name": "data_len",
                    "type": "felt"
                },
                {
                    "name": "data",
                    "type": "felt*"
                }
            ],
            "name": "onERC721Received",
            "outputs": [
                {
                    "name": "selector",
                    "type": "felt"
                }
            ],
            "type": "function"
        }
    ],
    "entry_points_by_type": {
        "CONSTRUCTOR": [],
        "EXTERNAL": [
            {
                "offset": "0x11c",
                "selector": "0xdbc9a2e2791ea693d5f4854850b9a2c298582d7f5b50257ef638ddaac30b5b"
            },
            {
                "offset": "0x199",
                "selector": "0xfa119a8fafc6f1a02deb36fe5efbcc4929ef2021e50cf1cb6d1a780ccd009b"
            },
            {
                "offset": "0x13f",
                "selector": "0x29e211664c0b63c79638fbea474206ca74016b3e9a3dc4f9ac300ffd8bdf2cd"
            }
        ],
        "L1_HANDLER": []
    },
    "program": {
        "attributes": [],
        "builtins": [
            "pedersen",
            "range_check"
        ],
        "compiler_version": "0.10.1",
        "data": [
            "0x40780017fff7fff",
            "0x1",
            "0x208b7fff7fff7ffe",
            "0x20780017fff7ffd",
            "0x4",
            "0x400780017fff7ffd",
            "0x1",
            "0x208b7fff7fff7ffe",
            "0x480680017fff8000",
            "0x43616c6c436f6e7472616374",
            "0x400280007ff97fff",
            "0x400380017ff97ffa",
            "0x400380027ff97ffb",
            "0x400380037ff97ffc",
            "0x400380047ff97ffd",
            "0x482680017ff98000",
            "0x7",
            "0x480280057ff98000",
            "0x480280067ff98000",
            "0x208b7fff7fff7ffe",
            "0x480680017fff8000",
            "0x4465706c6f79",
            "0x400280007ff87fff",
            "0x400380017ff87ff9",
            "0x400380027ff87ffa",
            "0x400380037ff87ffb",
            "0x400380047ff87ffc",
            "0x400380057ff87ffd",
            "0x482680017ff88000",
            "0x9",
            "0x480280067ff88000",
            "0x208b7fff7fff7ffe",
            "0x480680017fff8000",
            "0x47657443616c6c657241646472657373",
            "0x400280007ffd7fff",
            "0x482680017ffd8000",
            "0x2",
            "0x480280017ffd8000",
            "0x208b7fff7fff7ffe",
            "0x480680017fff8000",
            "0x476574436f6e747261637441646472657373",
            "0x400280007ffd7fff",
            "0x482680017ffd8000",
            "0x2",
            "0x480280017ffd8000",
            "0x208b7fff7fff7ffe",
            "0x480680017fff8000",
            "0x53746f7261676552656164",
            "0x400280007ffc7fff",
            "0x400380017ffc7ffd",
            "0x482680017ffc8000",
            "0x3",
            "0x480280027ffc8000",
            "0x208b7fff7fff7ffe",
            "0x480680017fff8000",
            "0x53746f726167655772697465",
            "0x400280007ffb7fff",
            "0x400380017ffb7ffc",
            "0x400380027ffb7ffd",
            "0x482680017ffb8000",
            "0x3",
            "0x208b7fff7fff7ffe",
            "0x400380007ffb7ffc",
            "0x400380017ffb7ffd",
            "0x482680017ffb8000",
            "0x2",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x4",
            "0x404b800280028002",
            "0x404b800380038003",
            "0x482a7ffc7ffa8000",
            "0x4846800180028000",
            "0x100000000000000000000000000000000",
            "0x40327fff80007ffe",
            "0x482a7ffd7ffb8000",
            "0x482880027fff8000",
            "0x4846800180038000",
            "0x100000000000000000000000000000000",
            "0x40327fff80017ffe",
            "0x480a7ff97fff8000",
            "0x480a80007fff8000",
            "0x480a80017fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffec",
            "0x480a80007fff8000",
            "0x480a80017fff8000",
            "0x480a80037fff8000",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x1",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffa6",
            "0x40137fff7fff8000",
            "0x4003800080007ffd",
            "0x4826800180008000",
            "0x1",
            "0x480a7ffa7fff8000",
            "0x480a7ffc7fff8000",
            "0x480680017fff8000",
            "0xb758361d5e84380ef1e632f89d8e76a8677dbc3f4b93a4f9d75d2a6048f312",
            "0x4828800080007ffc",
            "0x480a80007fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffa2",
            "0x48127ffd7fff8000",
            "0x480a7ffb7fff8000",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x1",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff93",
            "0x40137fff7fff8000",
            "0x4003800080007ffa",
            "0x4003800180007ffb",
            "0x4003800280007ffc",
            "0x4003800380007ffd",
            "0x4826800180008000",
            "0x4",
            "0x480a7ff77fff8000",
            "0x480a7ff97fff8000",
            "0x480680017fff8000",
            "0x41b033f4a31df8067c24d1e9b550a2ce75fd4a29e1147af9752174f0e6cb20",
            "0x4828800080007ffc",
            "0x480a80007fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff8c",
            "0x48127ffd7fff8000",
            "0x480a7ff87fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x480680017fff8000",
            "0x1b00734c649f287cfe8f5542ed9cd38d6fbf7e9e42dd28952c6c0315f5e3395",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffa",
            "0x480a7ffb7fff8000",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffa2",
            "0x48127ffe7fff8000",
            "0x48127ff57fff8000",
            "0x48127ff57fff8000",
            "0x48127ffc7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
            "0x480a7ffa7fff8000",
            "0x48127ffe7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff9c",
            "0x48127ff67fff8000",
            "0x48127ff67fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x480680017fff8000",
            "0x361ad33d3763aed2bc16c0f57ff251ac638d3d03ab7550adfd3e166c2e7adb6",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffa",
            "0x480a7ffb7fff8000",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff84",
            "0x48127ffe7fff8000",
            "0x48127ff57fff8000",
            "0x48127ff57fff8000",
            "0x48127ffc7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
            "0x480a7ffa7fff8000",
            "0x48127ffe7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff7e",
            "0x48127ff67fff8000",
            "0x48127ff67fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x480680017fff8000",
            "0x3eea18c26b1aea7a418ac95162e59e8f2dbcc37df36454d412680bd6aa29754",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffa",
            "0x480a7ffb7fff8000",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff66",
            "0x48127ffe7fff8000",
            "0x48127ff57fff8000",
            "0x48127ff57fff8000",
            "0x48127ffc7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
            "0x480a7ffa7fff8000",
            "0x48127ffe7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff60",
            "0x48127ff67fff8000",
            "0x48127ff67fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x480680017fff8000",
            "0x71ce6ba2ee0cfaa5acee977e8e67e2cd9b456dcdf1ab291519d32de27f4ece",
            "0x208b7fff7fff7ffe",
            "0x480a7ffc7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffa",
            "0x480a7ffb7fff8000",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff48",
            "0x48127ffe7fff8000",
            "0x48127ff57fff8000",
            "0x48127ff57fff8000",
            "0x48127ffc7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
            "0x480a7ffa7fff8000",
            "0x48127ffe7fff8000",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff42",
            "0x48127ff67fff8000",
            "0x48127ff67fff8000",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x0",
            "0x480a7ff87fff8000",
            "0x480a7ff97fff8000",
            "0x480a7ffa7fff8000",
            "0x480680017fff8000",
            "0x1",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff94",
            "0x48127ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff24",
            "0x48127ffe7fff8000",
            "0x48127ff77fff8000",
            "0x48127ff77fff8000",
            "0x480a7ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffa9",
            "0x480a7ffb7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffc4",
            "0x480a7ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffdf",
            "0x48127ffd7fff8000",
            "0x48127ffe7fff8000",
            "0x480a7ffb7fff8000",
            "0x48127fc07fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff44",
            "0x48127ffe7fff8000",
            "0x48127fe57fff8000",
            "0x48127ffd7fff8000",
            "0x208b7fff7fff7ffe",
            "0x482680017ffd8000",
            "0x3",
            "0x402a7ffd7ffc7fff",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x480280027ffb8000",
            "0x480280007ffd8000",
            "0x480280017ffd8000",
            "0x480280027ffd8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffd6",
            "0x40780017fff7fff",
            "0x1",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x480680017fff8000",
            "0x0",
            "0x48127ffb7fff8000",
            "0x208b7fff7fff7ffe",
            "0x480a7ffa7fff8000",
            "0x480a7ffb7fff8000",
            "0x480a7ffc7fff8000",
            "0x480680017fff8000",
            "0x1",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x1",
            "0x4003800080007ffc",
            "0x4826800180008000",
            "0x1",
            "0x480a7ffd7fff8000",
            "0x4828800080007ffe",
            "0x480a80007fff8000",
            "0x208b7fff7fff7ffe",
            "0x482680017ffd8000",
            "0x1",
            "0x402a7ffd7ffc7fff",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x480280027ffb8000",
            "0x480280007ffd8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffeb",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffee",
            "0x48127ff47fff8000",
            "0x48127ff47fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x0",
            "0x480a7ff57fff8000",
            "0x480a7ff67fff8000",
            "0x480a7ff77fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff32",
            "0x20680017fff7fff",
            "0x8",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x480680017fff8000",
            "0x150b7a02",
            "0x208b7fff7fff7ffe",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x480680017fff8000",
            "0x1",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff30",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff3f",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff1c",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x48127ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff53",
            "0x48127ffc7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffeb4",
            "0x48127ffe7fff8000",
            "0x48127ff77fff8000",
            "0x48127ff77fff8000",
            "0x48127fc87fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffee0",
            "0x48127ffe7fff8000",
            "0x48127fde7fff8000",
            "0x48127ffd7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff63",
            "0x48127ffc7fff8000",
            "0x48127ffd7fff8000",
            "0x48127ffd7fff8000",
            "0x48127fcd7fff8000",
            "0x48127f987fff8000",
            "0x480a7ffa7fff8000",
            "0x480a7ffb7fff8000",
            "0x1104800180018000",
            "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffee5",
            "0x48127ffe7fff8000",
            "0x48127fe17fff8000",
            "0x48127ffd7fff8000",
            "0x480680017fff8000",
            "0x150b7a02",
            "0x208b7fff7fff7ffe",
            "0x40780017fff7fff",
            "0x1",
            "0x4003800080007ffc",
            "0x4826800180008000",
            "0x1",
            "0x480a7ffd7fff8000",
            "0x4828800080007ffe",
            "0x480a80007fff8000",
            "0x208b7fff7fff7ffe",
            "0x480280027ffb8000",
            "0x480280047ffd8000",
            "0x400080007ffe7fff",
            "0x482680017ffd8000",
            "0x5",
            "0x480280047ffd8000",
            "0x48307fff7ffe8000",
            "0x402a7ffd7ffc7fff",
            "0x480280027ffb8000",
            "0x480280007ffb8000",
            "0x480280017ffb8000",
            "0x482480017ffd8000",
            "0x1",
            "0x480280007ffd8000",
            "0x480280017ffd8000",
            "0x480280027ffd8000",
            "0x480280037ffd8000",
            "0x480280047ffd8000",
            "0x482680017ffd8000",
            "0x5",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffa5",
            "0x48127ffe7fff8000",
            "0x1104800180018000",
            "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe1",
            "0x48127ff47fff8000",
            "0x48127ff47fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x48127ffb7fff8000",
            "0x208b7fff7fff7ffe"
        ],
        "debug_info": {
            "file_contents": {
                "autogen/starknet/arg_processor/001e7e7ada5970d5cd7e7b9fbe70b3d18a0e22c2451b74c773c532e003bf9599.cairo": "// Create a reference to tokenId as felt*.\nlet __calldata_tmp: felt* = cast(&tokenId, felt*);\nassert [__calldata_ptr + 0] = [__calldata_tmp + 0];\nassert [__calldata_ptr + 1] = [__calldata_tmp + 1];\nlet __calldata_ptr = __calldata_ptr + 2;\n",
                "autogen/starknet/arg_processor/01cba52f8515996bb9d7070bde81ff39281d096d7024a558efcba6e1fd2402cf.cairo": "assert [cast(fp + (-4), felt*)] = __calldata_actual_size;\n",
                "autogen/starknet/arg_processor/11910489853ff455bdd52732af2e5eb2ae4e754e0865f4b448ae74c14a7f2cf7.cairo": "assert [__return_value_ptr] = ret_value.selector;\nlet __return_value_ptr = __return_value_ptr + 1;\n",
                "autogen/starknet/arg_processor/1416b2c848728cbeb4707f7b1eebc83cec935836ded31fdc67eb5cfb60e0f82b.cairo": "let __calldata_arg_addressContract = [__calldata_ptr];\nlet __calldata_ptr = __calldata_ptr + 1;\n",
                "autogen/starknet/arg_processor/2670bb539ede27446c75876e41bcf9ef5cab09b9eec143f3986635a545b089ab.cairo": "assert [__calldata_ptr] = to;\nlet __calldata_ptr = __calldata_ptr + 1;\n",
                "autogen/starknet/arg_processor/4f1f3aa0a6fec21a155d7e953cd34daa7ca48450bbb80f627eb4f8df9f25922a.cairo": "let __calldata_arg_data_len = [__calldata_ptr];\nlet __calldata_ptr = __calldata_ptr + 1;\n",
                "autogen/starknet/arg_processor/5c10028f67364b153272aa9b4cbc0fb78920a40fab821ac7257b0069e0773b49.cairo": "assert [__return_value_ptr] = ret_value.success;\nlet __return_value_ptr = __return_value_ptr + 1;\n",
                "autogen/starknet/arg_processor/60c79ef5477686f2843e61432dcde7f4fc0f354d42095115ea9dca625a35df6e.cairo": "let __calldata_arg_tokenId = [\n    cast(__calldata_ptr, starkware.cairo.common.uint256.Uint256*)];\nlet __calldata_ptr = __calldata_ptr + 2;\n",
                "autogen/starknet/arg_processor/6d0ee2d961549839c7dc4402d30681e8f4f19d384358313f715f5e8770967298.cairo": "let __calldata_arg_addressPunk = [__calldata_ptr];\nlet __calldata_ptr = __calldata_ptr + 1;\n",
                "autogen/starknet/arg_processor/708f2877a5fc05dca278266df4d8e2025597a78068ffd64385f0ef27ab208871.cairo": "let __calldata_arg_interfaceId = [__calldata_ptr];\nlet __calldata_ptr = __calldata_ptr + 1;\n",
                "autogen/starknet/arg_processor/ad6bf90c88bb84c90b568cfe0e89ce22c3213011f6c9cc8bf0b75066ae521c26.cairo": "assert [__calldata_ptr] = from_;\nlet __calldata_ptr = __calldata_ptr + 1;\n",
                "autogen/starknet/arg_processor/c28d01f4036658535ed1f26a855ca481100f6b9fa5c266733e27ba2dce390d91.cairo": "let __calldata_arg_operator = [__calldata_ptr];\nlet __calldata_ptr = __calldata_ptr + 1;\n",
                "autogen/starknet/arg_processor/c31620b02d4d706f0542c989b2aadc01b0981d1f6a5933a8fe4937ace3d70d92.cairo": "let __calldata_actual_size =  __calldata_ptr - cast([cast(fp + (-3), felt**)], felt*);\n",
                "autogen/starknet/arg_processor/ce7977f812acdfc499297852e9a810b98ea88051bb6fce7fb8180e9b55e9dffe.cairo": "let __calldata_arg_addressUser = [__calldata_ptr];\nlet __calldata_ptr = __calldata_ptr + 1;\n",
                "autogen/starknet/arg_processor/df39236eab78c921af48d719316dc25209f5ba97dc94936a936f353a674f3486.cairo": "let __calldata_arg_from_ = [__calldata_ptr];\nlet __calldata_ptr = __calldata_ptr + 1;\n",
                "autogen/starknet/arg_processor/e0af26f9fbe513562e2133164d694cbff092c47bbb4efa182711421f0c0cc5d3.cairo": "// Check that the length is non-negative.\nassert [range_check_ptr] = __calldata_arg_data_len;\nlet range_check_ptr = range_check_ptr + 1;\n// Create the reference.\nlet __calldata_arg_data = cast(__calldata_ptr, felt*);\n// Use 'tempvar' instead of 'let' to avoid repeating this computation for the\n// following arguments.\ntempvar __calldata_ptr = __calldata_ptr + __calldata_arg_data_len * 1;\n",
                "autogen/starknet/contract_interface/I721/transferFrom/64f7842b108e76706927b78270ac73c789c558c54431b3359e4441e63ec2a868.cairo": "\nalloc_locals;\nlet (local calldata_ptr_start: felt*) = alloc();\nlet __calldata_ptr = calldata_ptr_start;\n",
                "autogen/starknet/contract_interface/I721/transferFrom/b016d077f46f58d4cffabd707b4d3495a859d0f543f418223b1ea57e409144f2.cairo": "\nlet (retdata_size, retdata) = call_contract(\n    contract_address=contract_address,\n    function_selector=TRANSFERFROM_SELECTOR,\n    calldata_size=__calldata_ptr - calldata_ptr_start,\n    calldata=calldata_ptr_start);\n",
                "autogen/starknet/contract_interface/I721/transferFrom/f8c7980cd46ed6d764c999318b5692736b724dc08c1bf96e92d1b77ddf37af10.cairo": "func transferFrom{syscall_ptr: felt*, range_check_ptr}(\n    contract_address: felt) {\n}\n",
                "autogen/starknet/contract_interface/I721/transferFrom/fb06bdf6e8fa9c7ff7d919d712d494716b0b586b2a762687cfb72d93da06ab29.cairo": "\nreturn ();\n",
                "autogen/starknet/contract_interface/IClaimAPunk/claim/64f7842b108e76706927b78270ac73c789c558c54431b3359e4441e63ec2a868.cairo": "\nalloc_locals;\nlet (local calldata_ptr_start: felt*) = alloc();\nlet __calldata_ptr = calldata_ptr_start;\n",
                "autogen/starknet/contract_interface/IClaimAPunk/claim/d308ac6fd7d3ff633fc0c3917e7ab82b4b2bcfc481b2dfc124904e88ec8ce8d6.cairo": "func claim{syscall_ptr: felt*, range_check_ptr}(\n    contract_address: felt) {\n}\n",
                "autogen/starknet/contract_interface/IClaimAPunk/claim/e6f3cbb7dbde1e9f988c9975e0b9f536375b41e40298c020fbf56cab6593eb3e.cairo": "\nlet (retdata_size, retdata) = call_contract(\n    contract_address=contract_address,\n    function_selector=CLAIM_SELECTOR,\n    calldata_size=__calldata_ptr - calldata_ptr_start,\n    calldata=calldata_ptr_start);\n",
                "autogen/starknet/contract_interface/IClaimAPunk/claim/fb06bdf6e8fa9c7ff7d919d712d494716b0b586b2a762687cfb72d93da06ab29.cairo": "\nreturn ();\n",
                "autogen/starknet/external/hack/3cf159a0ba2d9c6ca162fb61b78c8cbc15d56feace02d3d7d58bf424031e0da1.cairo": "let ret_value = __wrapped_func{syscall_ptr=syscall_ptr, pedersen_ptr=pedersen_ptr, range_check_ptr=range_check_ptr}(addressContract=__calldata_arg_addressContract, addressUser=__calldata_arg_addressUser, addressPunk=__calldata_arg_addressPunk,);\n%{ memory[ap] = segments.add() %}        // Allocate memory for return value.\ntempvar retdata: felt*;\nlet retdata_size = 0;\n",
                "autogen/starknet/external/hack/741ea357d6336b0bed7bf0472425acd0311d543883b803388880e60a232040c7.cairo": "let range_check_ptr = [cast([cast(fp + (-5), felt**)] + 2, felt*)];\n",
                "autogen/starknet/external/hack/9684a85e93c782014ca14293edea4eb2502039a5a7b6538ecd39c56faaf12529.cairo": "let pedersen_ptr = [cast([cast(fp + (-5), felt**)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)];\n",
                "autogen/starknet/external/hack/b2c52ca2d2a8fc8791a983086d8716c5eacd0c3d62934914d2286f84b98ff4cb.cairo": "let syscall_ptr = [cast([cast(fp + (-5), felt**)] + 0, felt**)];\n",
                "autogen/starknet/external/hack/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo": "return (syscall_ptr,pedersen_ptr,range_check_ptr,retdata_size,retdata);\n",
                "autogen/starknet/external/onERC721Received/38f14e54dbee54a8249b8cab1b07345d8a7d9b5814e51ef0364fb71b9dd4c67a.cairo": "let ret_value = __wrapped_func{syscall_ptr=syscall_ptr, pedersen_ptr=pedersen_ptr, range_check_ptr=range_check_ptr}(operator=__calldata_arg_operator, from_=__calldata_arg_from_, tokenId=__calldata_arg_tokenId, data_len=__calldata_arg_data_len, data=__calldata_arg_data,);\nlet (range_check_ptr, retdata_size, retdata) = onERC721Received_encode_return(ret_value, range_check_ptr);\n",
                "autogen/starknet/external/onERC721Received/741ea357d6336b0bed7bf0472425acd0311d543883b803388880e60a232040c7.cairo": "let range_check_ptr = [cast([cast(fp + (-5), felt**)] + 2, felt*)];\n",
                "autogen/starknet/external/onERC721Received/9684a85e93c782014ca14293edea4eb2502039a5a7b6538ecd39c56faaf12529.cairo": "let pedersen_ptr = [cast([cast(fp + (-5), felt**)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)];\n",
                "autogen/starknet/external/onERC721Received/b2c52ca2d2a8fc8791a983086d8716c5eacd0c3d62934914d2286f84b98ff4cb.cairo": "let syscall_ptr = [cast([cast(fp + (-5), felt**)] + 0, felt**)];\n",
                "autogen/starknet/external/onERC721Received/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo": "return (syscall_ptr,pedersen_ptr,range_check_ptr,retdata_size,retdata);\n",
                "autogen/starknet/external/return/onERC721Received/748438f4ddd6f3fe6d8ef0cd8a4cde200527a2afc43648f40ea03f233f59909c.cairo": "func onERC721Received_encode_return(ret_value: (selector: felt), range_check_ptr) -> (\n        range_check_ptr: felt, data_len: felt, data: felt*) {\n    %{ memory[ap] = segments.add() %}\n    alloc_locals;\n    local __return_value_ptr_start: felt*;\n    let __return_value_ptr = __return_value_ptr_start;\n    with range_check_ptr {\n    }\n    return (\n        range_check_ptr=range_check_ptr,\n        data_len=__return_value_ptr - __return_value_ptr_start,\n        data=__return_value_ptr_start);\n}\n",
                "autogen/starknet/external/return/supportsInterface/40b33230f82887d6ee6ba7936c0fcb15006d084631250a62d0c39394fb5b7629.cairo": "func supportsInterface_encode_return(ret_value: (success: felt), range_check_ptr) -> (\n        range_check_ptr: felt, data_len: felt, data: felt*) {\n    %{ memory[ap] = segments.add() %}\n    alloc_locals;\n    local __return_value_ptr_start: felt*;\n    let __return_value_ptr = __return_value_ptr_start;\n    with range_check_ptr {\n    }\n    return (\n        range_check_ptr=range_check_ptr,\n        data_len=__return_value_ptr - __return_value_ptr_start,\n        data=__return_value_ptr_start);\n}\n",
                "autogen/starknet/external/supportsInterface/741ea357d6336b0bed7bf0472425acd0311d543883b803388880e60a232040c7.cairo": "let range_check_ptr = [cast([cast(fp + (-5), felt**)] + 2, felt*)];\n",
                "autogen/starknet/external/supportsInterface/9684a85e93c782014ca14293edea4eb2502039a5a7b6538ecd39c56faaf12529.cairo": "let pedersen_ptr = [cast([cast(fp + (-5), felt**)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)];\n",
                "autogen/starknet/external/supportsInterface/b2c52ca2d2a8fc8791a983086d8716c5eacd0c3d62934914d2286f84b98ff4cb.cairo": "let syscall_ptr = [cast([cast(fp + (-5), felt**)] + 0, felt**)];\n",
                "autogen/starknet/external/supportsInterface/bca8209c591df9f65b13800fe22999fe396aef7f2e9ee72505ad6a9793c5916d.cairo": "let ret_value = __wrapped_func{syscall_ptr=syscall_ptr, pedersen_ptr=pedersen_ptr, range_check_ptr=range_check_ptr}(interfaceId=__calldata_arg_interfaceId,);\nlet (range_check_ptr, retdata_size, retdata) = supportsInterface_encode_return(ret_value, range_check_ptr);\n",
                "autogen/starknet/external/supportsInterface/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo": "return (syscall_ptr,pedersen_ptr,range_check_ptr,retdata_size,retdata);\n",
                "autogen/starknet/storage_var/_continue/decl.cairo": "namespace _continue {\n    from starkware.starknet.common.storage import normalize_address\n    from starkware.starknet.common.syscalls import storage_read, storage_write\n    from starkware.cairo.common.cairo_builtins import HashBuiltin\n    from starkware.cairo.common.hash import hash2\n\n    func addr{pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (res: felt) {\n        let res = 0;\n        call hash2;\n        call normalize_address;\n    }\n\n    func read{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (stop: felt) {\n        let storage_addr = 0;\n        call addr;\n        call storage_read;\n    }\n\n    func write{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(value: felt) {\n        let storage_addr = 0;\n        call addr;\n        call storage_write;\n    }\n}",
                "autogen/starknet/storage_var/_continue/impl.cairo": "namespace _continue {\n    from starkware.starknet.common.storage import normalize_address\n    from starkware.starknet.common.syscalls import storage_read, storage_write\n    from starkware.cairo.common.cairo_builtins import HashBuiltin\n    from starkware.cairo.common.hash import hash2\n\n    func addr{pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (res: felt) {\n        let res = 763327667008170196218584020709124136524856828279230898815596909959397127061;\n        return (res=res);\n    }\n\n    func read{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (stop: felt) {\n        let (storage_addr) = addr();\n        let (__storage_var_temp0) = storage_read(address=storage_addr + 0);\n\n        tempvar syscall_ptr = syscall_ptr;\n        tempvar pedersen_ptr = pedersen_ptr;\n        tempvar range_check_ptr = range_check_ptr;\n        tempvar __storage_var_temp0: felt = __storage_var_temp0;\n        return ([cast(&__storage_var_temp0, felt*)],);\n    }\n\n    func write{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(value: felt) {\n        let (storage_addr) = addr();\n        storage_write(address=storage_addr + 0, value=[cast(&value, felt) + 0]);\n        return ();\n    }\n}",
                "autogen/starknet/storage_var/punk/decl.cairo": "namespace punk {\n    from starkware.starknet.common.storage import normalize_address\n    from starkware.starknet.common.syscalls import storage_read, storage_write\n    from starkware.cairo.common.cairo_builtins import HashBuiltin\n    from starkware.cairo.common.hash import hash2\n\n    func addr{pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (res: felt) {\n        let res = 0;\n        call hash2;\n        call normalize_address;\n    }\n\n    func read{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (\n        address: felt\n    ) {\n        let storage_addr = 0;\n        call addr;\n        call storage_read;\n    }\n\n    func write{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(value: felt) {\n        let storage_addr = 0;\n        call addr;\n        call storage_write;\n    }\n}",
                "autogen/starknet/storage_var/punk/impl.cairo": "namespace punk {\n    from starkware.starknet.common.storage import normalize_address\n    from starkware.starknet.common.syscalls import storage_read, storage_write\n    from starkware.cairo.common.cairo_builtins import HashBuiltin\n    from starkware.cairo.common.hash import hash2\n\n    func addr{pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (res: felt) {\n        let res = 201078379940209298562774988517901802438717296941378481233986088098760445646;\n        return (res=res);\n    }\n\n    func read{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (\n        address: felt\n    ) {\n        let (storage_addr) = addr();\n        let (__storage_var_temp0) = storage_read(address=storage_addr + 0);\n\n        tempvar syscall_ptr = syscall_ptr;\n        tempvar pedersen_ptr = pedersen_ptr;\n        tempvar range_check_ptr = range_check_ptr;\n        tempvar __storage_var_temp0: felt = __storage_var_temp0;\n        return ([cast(&__storage_var_temp0, felt*)],);\n    }\n\n    func write{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(value: felt) {\n        let (storage_addr) = addr();\n        storage_write(address=storage_addr + 0, value=[cast(&value, felt) + 0]);\n        return ();\n    }\n}",
                "autogen/starknet/storage_var/target/decl.cairo": "namespace target {\n    from starkware.starknet.common.storage import normalize_address\n    from starkware.starknet.common.syscalls import storage_read, storage_write\n    from starkware.cairo.common.cairo_builtins import HashBuiltin\n    from starkware.cairo.common.hash import hash2\n\n    func addr{pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (res: felt) {\n        let res = 0;\n        call hash2;\n        call normalize_address;\n    }\n\n    func read{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (\n        address: felt\n    ) {\n        let storage_addr = 0;\n        call addr;\n        call storage_read;\n    }\n\n    func write{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(value: felt) {\n        let storage_addr = 0;\n        call addr;\n        call storage_write;\n    }\n}",
                "autogen/starknet/storage_var/target/impl.cairo": "namespace target {\n    from starkware.starknet.common.storage import normalize_address\n    from starkware.starknet.common.syscalls import storage_read, storage_write\n    from starkware.cairo.common.cairo_builtins import HashBuiltin\n    from starkware.cairo.common.hash import hash2\n\n    func addr{pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (res: felt) {\n        let res = 1778563106796382637006104483867050688797825601268444798719921831089725937492;\n        return (res=res);\n    }\n\n    func read{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (\n        address: felt\n    ) {\n        let (storage_addr) = addr();\n        let (__storage_var_temp0) = storage_read(address=storage_addr + 0);\n\n        tempvar syscall_ptr = syscall_ptr;\n        tempvar pedersen_ptr = pedersen_ptr;\n        tempvar range_check_ptr = range_check_ptr;\n        tempvar __storage_var_temp0: felt = __storage_var_temp0;\n        return ([cast(&__storage_var_temp0, felt*)],);\n    }\n\n    func write{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(value: felt) {\n        let (storage_addr) = addr();\n        storage_write(address=storage_addr + 0, value=[cast(&value, felt) + 0]);\n        return ();\n    }\n}",
                "autogen/starknet/storage_var/user/decl.cairo": "namespace user {\n    from starkware.starknet.common.storage import normalize_address\n    from starkware.starknet.common.syscalls import storage_read, storage_write\n    from starkware.cairo.common.cairo_builtins import HashBuiltin\n    from starkware.cairo.common.hash import hash2\n\n    func addr{pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (res: felt) {\n        let res = 0;\n        call hash2;\n        call normalize_address;\n    }\n\n    func read{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (\n        address: felt\n    ) {\n        let storage_addr = 0;\n        call addr;\n        call storage_read;\n    }\n\n    func write{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(value: felt) {\n        let storage_addr = 0;\n        call addr;\n        call storage_write;\n    }\n}",
                "autogen/starknet/storage_var/user/impl.cairo": "namespace user {\n    from starkware.starknet.common.storage import normalize_address\n    from starkware.starknet.common.syscalls import storage_read, storage_write\n    from starkware.cairo.common.cairo_builtins import HashBuiltin\n    from starkware.cairo.common.hash import hash2\n\n    func addr{pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (res: felt) {\n        let res = 1529518110378107854966511448107757697643183269662093253104566799408342478262;\n        return (res=res);\n    }\n\n    func read{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (\n        address: felt\n    ) {\n        let (storage_addr) = addr();\n        let (__storage_var_temp0) = storage_read(address=storage_addr + 0);\n\n        tempvar syscall_ptr = syscall_ptr;\n        tempvar pedersen_ptr = pedersen_ptr;\n        tempvar range_check_ptr = range_check_ptr;\n        tempvar __storage_var_temp0: felt = __storage_var_temp0;\n        return ([cast(&__storage_var_temp0, felt*)],);\n    }\n\n    func write{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(value: felt) {\n        let (storage_addr) = addr();\n        storage_write(address=storage_addr + 0, value=[cast(&value, felt) + 0]);\n        return ();\n    }\n}"
            },
            "instruction_locations": {
                "0": {
                    "accessible_scopes": [
                        "starkware.cairo.common.alloc",
                        "starkware.cairo.common.alloc.alloc"
                    ],
                    "flow_tracking_data": null,
                    "hints": [
                        {
                            "location": {
                                "end_col": 38,
                                "end_line": 3,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/alloc.cairo"
                                },
                                "start_col": 5,
                                "start_line": 3
                            },
                            "n_prefix_newlines": 0
                        }
                    ],
                    "inst": {
                        "end_col": 12,
                        "end_line": 4,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/alloc.cairo"
                        },
                        "start_col": 5,
                        "start_line": 4
                    }
                },
                "2": {
                    "accessible_scopes": [
                        "starkware.cairo.common.alloc",
                        "starkware.cairo.common.alloc.alloc"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 40,
                        "end_line": 5,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/alloc.cairo"
                        },
                        "start_col": 5,
                        "start_line": 5
                    }
                },
                "3": {
                    "accessible_scopes": [
                        "starkware.cairo.common.math",
                        "starkware.cairo.common.math.assert_not_zero"
                    ],
                    "flow_tracking_data": null,
                    "hints": [
                        {
                            "location": {
                                "end_col": 7,
                                "end_line": 11,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/math.cairo"
                                },
                                "start_col": 5,
                                "start_line": 7
                            },
                            "n_prefix_newlines": 1
                        }
                    ],
                    "inst": {
                        "end_col": 7,
                        "end_line": 12,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/math.cairo"
                        },
                        "start_col": 5,
                        "start_line": 12
                    }
                },
                "5": {
                    "accessible_scopes": [
                        "starkware.cairo.common.math",
                        "starkware.cairo.common.math.assert_not_zero"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 18,
                        "end_line": 14,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/math.cairo"
                        },
                        "start_col": 9,
                        "start_line": 14
                    }
                },
                "7": {
                    "accessible_scopes": [
                        "starkware.cairo.common.math",
                        "starkware.cairo.common.math.assert_not_zero"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 15,
                        "end_line": 17,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/math.cairo"
                        },
                        "start_col": 5,
                        "start_line": 17
                    }
                },
                "8": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.call_contract"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 40,
                        "end_line": 47,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 18,
                        "start_line": 47
                    }
                },
                "10": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.call_contract"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 28,
                        "end_line": 51,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 46
                    }
                },
                "11": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.call_contract"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 28,
                        "end_line": 51,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 46
                    }
                },
                "12": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.call_contract"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 28,
                        "end_line": 51,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 46
                    }
                },
                "13": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.call_contract"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 28,
                        "end_line": 51,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 46
                    }
                },
                "14": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.call_contract"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 28,
                        "end_line": 51,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 46
                    }
                },
                "15": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.call_contract"
                    ],
                    "flow_tracking_data": null,
                    "hints": [
                        {
                            "location": {
                                "end_col": 88,
                                "end_line": 52,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                },
                                "start_col": 5,
                                "start_line": 52
                            },
                            "n_prefix_newlines": 0
                        }
                    ],
                    "inst": {
                        "end_col": 54,
                        "end_line": 55,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 38,
                                "end_line": 42,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 75,
                                        "end_line": 56,
                                        "input_file": {
                                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                        },
                                        "start_col": 5,
                                        "start_line": 56
                                    },
                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                ],
                                "start_col": 20,
                                "start_line": 42
                            },
                            "While expanding the reference 'syscall_ptr' in:"
                        ],
                        "start_col": 23,
                        "start_line": 55
                    }
                },
                "17": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.call_contract"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 47,
                        "end_line": 56,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 26,
                        "start_line": 56
                    }
                },
                "18": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.call_contract"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 73,
                        "end_line": 56,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 57,
                        "start_line": 56
                    }
                },
                "19": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.call_contract"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 75,
                        "end_line": 56,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 56
                    }
                },
                "20": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.deploy"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 33,
                        "end_line": 163,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 18,
                        "start_line": 163
                    }
                },
                "22": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.deploy"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 44,
                        "end_line": 168,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 162
                    }
                },
                "23": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.deploy"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 44,
                        "end_line": 168,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 162
                    }
                },
                "24": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.deploy"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 44,
                        "end_line": 168,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 162
                    }
                },
                "25": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.deploy"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 44,
                        "end_line": 168,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 162
                    }
                },
                "26": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.deploy"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 44,
                        "end_line": 168,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 162
                    }
                },
                "27": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.deploy"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 44,
                        "end_line": 168,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 162
                    }
                },
                "28": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.deploy"
                    ],
                    "flow_tracking_data": null,
                    "hints": [
                        {
                            "location": {
                                "end_col": 81,
                                "end_line": 170,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                },
                                "start_col": 5,
                                "start_line": 170
                            },
                            "n_prefix_newlines": 0
                        }
                    ],
                    "inst": {
                        "end_col": 48,
                        "end_line": 172,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 31,
                                "end_line": 154,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 57,
                                        "end_line": 174,
                                        "input_file": {
                                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                        },
                                        "start_col": 5,
                                        "start_line": 174
                                    },
                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                ],
                                "start_col": 13,
                                "start_line": 154
                            },
                            "While expanding the reference 'syscall_ptr' in:"
                        ],
                        "start_col": 23,
                        "start_line": 172
                    }
                },
                "30": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.deploy"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 55,
                        "end_line": 174,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 30,
                        "start_line": 174
                    }
                },
                "31": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.deploy"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 57,
                        "end_line": 174,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 174
                    }
                },
                "32": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.get_caller_address"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 90,
                        "end_line": 198,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 63,
                        "start_line": 198
                    }
                },
                "34": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.get_caller_address"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 92,
                        "end_line": 198,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 198
                    }
                },
                "35": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.get_caller_address"
                    ],
                    "flow_tracking_data": null,
                    "hints": [
                        {
                            "location": {
                                "end_col": 93,
                                "end_line": 199,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                },
                                "start_col": 5,
                                "start_line": 199
                            },
                            "n_prefix_newlines": 0
                        }
                    ],
                    "inst": {
                        "end_col": 58,
                        "end_line": 200,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 43,
                                "end_line": 196,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 61,
                                        "end_line": 201,
                                        "input_file": {
                                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                        },
                                        "start_col": 5,
                                        "start_line": 201
                                    },
                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                ],
                                "start_col": 25,
                                "start_line": 196
                            },
                            "While expanding the reference 'syscall_ptr' in:"
                        ],
                        "start_col": 23,
                        "start_line": 200
                    }
                },
                "37": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.get_caller_address"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 59,
                        "end_line": 201,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 28,
                        "start_line": 201
                    }
                },
                "38": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.get_caller_address"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 61,
                        "end_line": 201,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 201
                    }
                },
                "39": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.get_contract_address"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 94,
                        "end_line": 272,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 65,
                        "start_line": 272
                    }
                },
                "41": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.get_contract_address"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 96,
                        "end_line": 272,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 272
                    }
                },
                "42": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.get_contract_address"
                    ],
                    "flow_tracking_data": null,
                    "hints": [
                        {
                            "location": {
                                "end_col": 95,
                                "end_line": 273,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                },
                                "start_col": 5,
                                "start_line": 273
                            },
                            "n_prefix_newlines": 0
                        }
                    ],
                    "inst": {
                        "end_col": 60,
                        "end_line": 274,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 45,
                                "end_line": 270,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 65,
                                        "end_line": 275,
                                        "input_file": {
                                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                        },
                                        "start_col": 5,
                                        "start_line": 275
                                    },
                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                ],
                                "start_col": 27,
                                "start_line": 270
                            },
                            "While expanding the reference 'syscall_ptr' in:"
                        ],
                        "start_col": 23,
                        "start_line": 274
                    }
                },
                "44": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.get_contract_address"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 63,
                        "end_line": 275,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 30,
                        "start_line": 275
                    }
                },
                "45": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.get_contract_address"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 65,
                        "end_line": 275,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 275
                    }
                },
                "46": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.storage_read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 79,
                        "end_line": 350,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 58,
                        "start_line": 350
                    }
                },
                "48": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.storage_read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 98,
                        "end_line": 350,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 350
                    }
                },
                "49": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.storage_read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 98,
                        "end_line": 350,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 350
                    }
                },
                "50": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.storage_read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [
                        {
                            "location": {
                                "end_col": 87,
                                "end_line": 351,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                },
                                "start_col": 5,
                                "start_line": 351
                            },
                            "n_prefix_newlines": 0
                        }
                    ],
                    "inst": {
                        "end_col": 53,
                        "end_line": 353,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 37,
                                "end_line": 348,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 35,
                                        "end_line": 354,
                                        "input_file": {
                                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                        },
                                        "start_col": 5,
                                        "start_line": 354
                                    },
                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                ],
                                "start_col": 19,
                                "start_line": 348
                            },
                            "While expanding the reference 'syscall_ptr' in:"
                        ],
                        "start_col": 23,
                        "start_line": 353
                    }
                },
                "52": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.storage_read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 33,
                        "end_line": 354,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 19,
                        "start_line": 354
                    }
                },
                "53": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.storage_read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 35,
                        "end_line": 354,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 354
                    }
                },
                "54": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.storage_write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 40,
                        "end_line": 368,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 18,
                        "start_line": 368
                    }
                },
                "56": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.storage_write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 72,
                        "end_line": 368,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 367
                    }
                },
                "57": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.storage_write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 72,
                        "end_line": 368,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 367
                    }
                },
                "58": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.storage_write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 72,
                        "end_line": 368,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 367
                    }
                },
                "59": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.storage_write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [
                        {
                            "location": {
                                "end_col": 88,
                                "end_line": 369,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                },
                                "start_col": 5,
                                "start_line": 369
                            },
                            "n_prefix_newlines": 0
                        }
                    ],
                    "inst": {
                        "end_col": 54,
                        "end_line": 370,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 38,
                                "end_line": 366,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 15,
                                        "end_line": 371,
                                        "input_file": {
                                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                        },
                                        "start_col": 5,
                                        "start_line": 371
                                    },
                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                ],
                                "start_col": 20,
                                "start_line": 366
                            },
                            "While expanding the reference 'syscall_ptr' in:"
                        ],
                        "start_col": 23,
                        "start_line": 370
                    }
                },
                "61": {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.storage_write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 15,
                        "end_line": 371,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "start_col": 5,
                        "start_line": 371
                    }
                },
                "62": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_check"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 30,
                        "end_line": 22,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "start_col": 5,
                        "start_line": 22
                    }
                },
                "63": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_check"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 35,
                        "end_line": 23,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "start_col": 5,
                        "start_line": 23
                    }
                },
                "64": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_check"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 46,
                        "end_line": 24,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 35,
                                "end_line": 21,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 15,
                                        "end_line": 25,
                                        "input_file": {
                                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                                        },
                                        "start_col": 5,
                                        "start_line": 25
                                    },
                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                ],
                                "start_col": 20,
                                "start_line": 21
                            },
                            "While expanding the reference 'range_check_ptr' in:"
                        ],
                        "start_col": 27,
                        "start_line": 24
                    }
                },
                "66": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_check"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 15,
                        "end_line": 25,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "start_col": 5,
                        "start_line": 25
                    }
                },
                "67": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_add"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 18,
                        "end_line": 32,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "start_col": 5,
                        "start_line": 32
                    }
                },
                "69": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_add"
                    ],
                    "flow_tracking_data": null,
                    "hints": [
                        {
                            "location": {
                                "end_col": 7,
                                "end_line": 41,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                                },
                                "start_col": 5,
                                "start_line": 36
                            },
                            "n_prefix_newlines": 1
                        }
                    ],
                    "inst": {
                        "end_col": 46,
                        "end_line": 43,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "start_col": 5,
                        "start_line": 43
                    }
                },
                "70": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_add"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 49,
                        "end_line": 44,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "start_col": 5,
                        "start_line": 44
                    }
                },
                "71": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_add"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 35,
                        "end_line": 46,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "start_col": 22,
                        "start_line": 46
                    }
                },
                "72": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_add"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 55,
                        "end_line": 46,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "start_col": 38,
                        "start_line": 46
                    }
                },
                "74": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_add"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 56,
                        "end_line": 46,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "start_col": 5,
                        "start_line": 46
                    }
                },
                "75": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_add"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 38,
                        "end_line": 47,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "start_col": 23,
                        "start_line": 47
                    }
                },
                "76": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_add"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 50,
                        "end_line": 47,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "start_col": 23,
                        "start_line": 47
                    }
                },
                "77": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_add"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 71,
                        "end_line": 47,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "start_col": 53,
                        "start_line": 47
                    }
                },
                "79": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_add"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 72,
                        "end_line": 47,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "start_col": 5,
                        "start_line": 47
                    }
                },
                "80": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_add"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 33,
                        "end_line": 31,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 35,
                                "end_line": 21,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 23,
                                        "end_line": 48,
                                        "input_file": {
                                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                                        },
                                        "start_col": 5,
                                        "start_line": 48
                                    },
                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                ],
                                "start_col": 20,
                                "start_line": 21
                            },
                            "While expanding the reference 'range_check_ptr' in:"
                        ],
                        "start_col": 18,
                        "start_line": 31
                    }
                },
                "81": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_add"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 14,
                        "end_line": 33,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 48,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                                },
                                "start_col": 19,
                                "start_line": 48
                            },
                            "While expanding the reference 'res' in:"
                        ],
                        "start_col": 11,
                        "start_line": 33
                    }
                },
                "82": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_add"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 14,
                        "end_line": 33,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 48,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                                },
                                "start_col": 19,
                                "start_line": 48
                            },
                            "While expanding the reference 'res' in:"
                        ],
                        "start_col": 11,
                        "start_line": 33
                    }
                },
                "83": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_add"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 23,
                        "end_line": 48,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "start_col": 5,
                        "start_line": 48
                    }
                },
                "85": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_add"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 14,
                        "end_line": 33,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 16,
                                "end_line": 50,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                                },
                                "start_col": 13,
                                "start_line": 50
                            },
                            "While expanding the reference 'res' in:"
                        ],
                        "start_col": 11,
                        "start_line": 33
                    }
                },
                "86": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_add"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 14,
                        "end_line": 33,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 16,
                                "end_line": 50,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                                },
                                "start_col": 13,
                                "start_line": 50
                            },
                            "While expanding the reference 'res' in:"
                        ],
                        "start_col": 11,
                        "start_line": 33
                    }
                },
                "87": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_add"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 21,
                        "end_line": 35,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 28,
                                "end_line": 50,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                                },
                                "start_col": 18,
                                "start_line": 50
                            },
                            "While expanding the reference 'carry_high' in:"
                        ],
                        "start_col": 11,
                        "start_line": 35
                    }
                },
                "88": {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_add"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 30,
                        "end_line": 50,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/cairo/common/uint256.cairo"
                        },
                        "start_col": 5,
                        "start_line": 50
                    }
                },
                "89": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.IClaimAPunk",
                        "__main__.IClaimAPunk.claim"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 14,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/64f7842b108e76706927b78270ac73c789c558c54431b3359e4441e63ec2a868.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 15,
                                "end_line": 12,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 10,
                                "start_line": 12
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 1,
                        "start_line": 2
                    }
                },
                "91": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.IClaimAPunk",
                        "__main__.IClaimAPunk.claim"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 48,
                        "end_line": 3,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/64f7842b108e76706927b78270ac73c789c558c54431b3359e4441e63ec2a868.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 15,
                                "end_line": 12,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 10,
                                "start_line": 12
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 41,
                        "start_line": 3
                    }
                },
                "93": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.IClaimAPunk",
                        "__main__.IClaimAPunk.claim"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 37,
                        "end_line": 3,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/64f7842b108e76706927b78270ac73c789c558c54431b3359e4441e63ec2a868.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 15,
                                "end_line": 12,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 10,
                                "start_line": 12
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 6,
                        "start_line": 3
                    }
                },
                "94": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.IClaimAPunk",
                        "__main__.IClaimAPunk.claim"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 30,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/2670bb539ede27446c75876e41bcf9ef5cab09b9eec143f3986635a545b089ab.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 18,
                                "end_line": 12,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 16,
                                "start_line": 12
                            },
                            "While handling calldata argument 'to'"
                        ],
                        "start_col": 1,
                        "start_line": 1
                    }
                },
                "95": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.IClaimAPunk",
                        "__main__.IClaimAPunk.claim"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 40,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/2670bb539ede27446c75876e41bcf9ef5cab09b9eec143f3986635a545b089ab.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 18,
                                "end_line": 12,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 33,
                                        "end_line": 5,
                                        "input_file": {
                                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/e6f3cbb7dbde1e9f988c9975e0b9f536375b41e40298c020fbf56cab6593eb3e.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 15,
                                                "end_line": 12,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 10,
                                                "start_line": 12
                                            },
                                            "While handling contract interface function:"
                                        ],
                                        "start_col": 19,
                                        "start_line": 5
                                    },
                                    "While expanding the reference '__calldata_ptr' in:"
                                ],
                                "start_col": 16,
                                "start_line": 12
                            },
                            "While handling calldata argument 'to'"
                        ],
                        "start_col": 22,
                        "start_line": 2
                    }
                },
                "97": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.IClaimAPunk",
                        "__main__.IClaimAPunk.claim"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 30,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/d308ac6fd7d3ff633fc0c3917e7ab82b4b2bcfc481b2dfc124904e88ec8ce8d6.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 15,
                                "end_line": 12,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 38,
                                        "end_line": 42,
                                        "input_file": {
                                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 33,
                                                "end_line": 6,
                                                "input_file": {
                                                    "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/e6f3cbb7dbde1e9f988c9975e0b9f536375b41e40298c020fbf56cab6593eb3e.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 15,
                                                        "end_line": 12,
                                                        "input_file": {
                                                            "filename": "reetrancy.cairo"
                                                        },
                                                        "start_col": 10,
                                                        "start_line": 12
                                                    },
                                                    "While handling contract interface function:"
                                                ],
                                                "start_col": 31,
                                                "start_line": 2
                                            },
                                            "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                        ],
                                        "start_col": 20,
                                        "start_line": 42
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 10,
                                "start_line": 12
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 12,
                        "start_line": 1
                    }
                },
                "98": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.IClaimAPunk",
                        "__main__.IClaimAPunk.claim"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 27,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/d308ac6fd7d3ff633fc0c3917e7ab82b4b2bcfc481b2dfc124904e88ec8ce8d6.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 15,
                                "end_line": 12,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 38,
                                        "end_line": 3,
                                        "input_file": {
                                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/e6f3cbb7dbde1e9f988c9975e0b9f536375b41e40298c020fbf56cab6593eb3e.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 15,
                                                "end_line": 12,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 10,
                                                "start_line": 12
                                            },
                                            "While handling contract interface function:"
                                        ],
                                        "start_col": 22,
                                        "start_line": 3
                                    },
                                    "While expanding the reference 'contract_address' in:"
                                ],
                                "start_col": 10,
                                "start_line": 12
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 5,
                        "start_line": 2
                    }
                },
                "99": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.IClaimAPunk",
                        "__main__.IClaimAPunk.claim"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 37,
                        "end_line": 4,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/e6f3cbb7dbde1e9f988c9975e0b9f536375b41e40298c020fbf56cab6593eb3e.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 15,
                                "end_line": 12,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 10,
                                "start_line": 12
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 23,
                        "start_line": 4
                    }
                },
                "101": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.IClaimAPunk",
                        "__main__.IClaimAPunk.claim"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 54,
                        "end_line": 5,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/e6f3cbb7dbde1e9f988c9975e0b9f536375b41e40298c020fbf56cab6593eb3e.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 15,
                                "end_line": 12,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 10,
                                "start_line": 12
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 19,
                        "start_line": 5
                    }
                },
                "102": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.IClaimAPunk",
                        "__main__.IClaimAPunk.claim"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 30,
                        "end_line": 3,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/64f7842b108e76706927b78270ac73c789c558c54431b3359e4441e63ec2a868.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 15,
                                "end_line": 12,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 32,
                                        "end_line": 6,
                                        "input_file": {
                                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/e6f3cbb7dbde1e9f988c9975e0b9f536375b41e40298c020fbf56cab6593eb3e.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 15,
                                                "end_line": 12,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 10,
                                                "start_line": 12
                                            },
                                            "While handling contract interface function:"
                                        ],
                                        "start_col": 14,
                                        "start_line": 6
                                    },
                                    "While expanding the reference 'calldata_ptr_start' in:"
                                ],
                                "start_col": 10,
                                "start_line": 12
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 12,
                        "start_line": 3
                    }
                },
                "103": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.IClaimAPunk",
                        "__main__.IClaimAPunk.claim"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 33,
                        "end_line": 6,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/e6f3cbb7dbde1e9f988c9975e0b9f536375b41e40298c020fbf56cab6593eb3e.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 15,
                                "end_line": 12,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 10,
                                "start_line": 12
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 31,
                        "start_line": 2
                    }
                },
                "105": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.IClaimAPunk",
                        "__main__.IClaimAPunk.claim"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 38,
                        "end_line": 42,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 33,
                                "end_line": 6,
                                "input_file": {
                                    "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/e6f3cbb7dbde1e9f988c9975e0b9f536375b41e40298c020fbf56cab6593eb3e.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 15,
                                        "end_line": 12,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 30,
                                                "end_line": 1,
                                                "input_file": {
                                                    "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/d308ac6fd7d3ff633fc0c3917e7ab82b4b2bcfc481b2dfc124904e88ec8ce8d6.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 15,
                                                        "end_line": 12,
                                                        "input_file": {
                                                            "filename": "reetrancy.cairo"
                                                        },
                                                        "parent_location": [
                                                            {
                                                                "end_col": 11,
                                                                "end_line": 2,
                                                                "input_file": {
                                                                    "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/fb06bdf6e8fa9c7ff7d919d712d494716b0b586b2a762687cfb72d93da06ab29.cairo"
                                                                },
                                                                "parent_location": [
                                                                    {
                                                                        "end_col": 15,
                                                                        "end_line": 12,
                                                                        "input_file": {
                                                                            "filename": "reetrancy.cairo"
                                                                        },
                                                                        "start_col": 10,
                                                                        "start_line": 12
                                                                    },
                                                                    "While handling contract interface function:"
                                                                ],
                                                                "start_col": 1,
                                                                "start_line": 2
                                                            },
                                                            "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                                        ],
                                                        "start_col": 10,
                                                        "start_line": 12
                                                    },
                                                    "While handling contract interface function:"
                                                ],
                                                "start_col": 12,
                                                "start_line": 1
                                            },
                                            "While expanding the reference 'syscall_ptr' in:"
                                        ],
                                        "start_col": 10,
                                        "start_line": 12
                                    },
                                    "While handling contract interface function:"
                                ],
                                "start_col": 31,
                                "start_line": 2
                            },
                            "While trying to update the implicit return value 'syscall_ptr' in:"
                        ],
                        "start_col": 20,
                        "start_line": 42
                    }
                },
                "106": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.IClaimAPunk",
                        "__main__.IClaimAPunk.claim"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 47,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/d308ac6fd7d3ff633fc0c3917e7ab82b4b2bcfc481b2dfc124904e88ec8ce8d6.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 15,
                                "end_line": 12,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 47,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/d308ac6fd7d3ff633fc0c3917e7ab82b4b2bcfc481b2dfc124904e88ec8ce8d6.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 15,
                                                "end_line": 12,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 11,
                                                        "end_line": 2,
                                                        "input_file": {
                                                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/fb06bdf6e8fa9c7ff7d919d712d494716b0b586b2a762687cfb72d93da06ab29.cairo"
                                                        },
                                                        "parent_location": [
                                                            {
                                                                "end_col": 15,
                                                                "end_line": 12,
                                                                "input_file": {
                                                                    "filename": "reetrancy.cairo"
                                                                },
                                                                "start_col": 10,
                                                                "start_line": 12
                                                            },
                                                            "While handling contract interface function:"
                                                        ],
                                                        "start_col": 1,
                                                        "start_line": 2
                                                    },
                                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                                ],
                                                "start_col": 10,
                                                "start_line": 12
                                            },
                                            "While handling contract interface function:"
                                        ],
                                        "start_col": 32,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 10,
                                "start_line": 12
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 32,
                        "start_line": 1
                    }
                },
                "107": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.IClaimAPunk",
                        "__main__.IClaimAPunk.claim"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 11,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/fb06bdf6e8fa9c7ff7d919d712d494716b0b586b2a762687cfb72d93da06ab29.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 15,
                                "end_line": 12,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 10,
                                "start_line": 12
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 1,
                        "start_line": 2
                    }
                },
                "108": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.I721",
                        "__main__.I721.transferFrom"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 14,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/I721/transferFrom/64f7842b108e76706927b78270ac73c789c558c54431b3359e4441e63ec2a868.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 18,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 10,
                                "start_line": 18
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 1,
                        "start_line": 2
                    }
                },
                "110": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.I721",
                        "__main__.I721.transferFrom"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 48,
                        "end_line": 3,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/I721/transferFrom/64f7842b108e76706927b78270ac73c789c558c54431b3359e4441e63ec2a868.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 18,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 10,
                                "start_line": 18
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 41,
                        "start_line": 3
                    }
                },
                "112": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.I721",
                        "__main__.I721.transferFrom"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 37,
                        "end_line": 3,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/I721/transferFrom/64f7842b108e76706927b78270ac73c789c558c54431b3359e4441e63ec2a868.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 18,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 10,
                                "start_line": 18
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 6,
                        "start_line": 3
                    }
                },
                "113": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.I721",
                        "__main__.I721.transferFrom"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 33,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/ad6bf90c88bb84c90b568cfe0e89ce22c3213011f6c9cc8bf0b75066ae521c26.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 28,
                                "end_line": 18,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 23,
                                "start_line": 18
                            },
                            "While handling calldata argument 'from_'"
                        ],
                        "start_col": 1,
                        "start_line": 1
                    }
                },
                "114": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.I721",
                        "__main__.I721.transferFrom"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 30,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/2670bb539ede27446c75876e41bcf9ef5cab09b9eec143f3986635a545b089ab.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 38,
                                "end_line": 18,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 36,
                                "start_line": 18
                            },
                            "While handling calldata argument 'to'"
                        ],
                        "start_col": 1,
                        "start_line": 1
                    }
                },
                "115": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.I721",
                        "__main__.I721.transferFrom"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 52,
                        "end_line": 3,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/001e7e7ada5970d5cd7e7b9fbe70b3d18a0e22c2451b74c773c532e003bf9599.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 53,
                                "end_line": 18,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 46,
                                "start_line": 18
                            },
                            "While handling calldata argument 'tokenId'"
                        ],
                        "start_col": 1,
                        "start_line": 3
                    }
                },
                "116": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.I721",
                        "__main__.I721.transferFrom"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 52,
                        "end_line": 4,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/001e7e7ada5970d5cd7e7b9fbe70b3d18a0e22c2451b74c773c532e003bf9599.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 53,
                                "end_line": 18,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 46,
                                "start_line": 18
                            },
                            "While handling calldata argument 'tokenId'"
                        ],
                        "start_col": 1,
                        "start_line": 4
                    }
                },
                "117": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.I721",
                        "__main__.I721.transferFrom"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 40,
                        "end_line": 5,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/001e7e7ada5970d5cd7e7b9fbe70b3d18a0e22c2451b74c773c532e003bf9599.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 53,
                                "end_line": 18,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 33,
                                        "end_line": 5,
                                        "input_file": {
                                            "filename": "autogen/starknet/contract_interface/I721/transferFrom/b016d077f46f58d4cffabd707b4d3495a859d0f543f418223b1ea57e409144f2.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 18,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 10,
                                                "start_line": 18
                                            },
                                            "While handling contract interface function:"
                                        ],
                                        "start_col": 19,
                                        "start_line": 5
                                    },
                                    "While expanding the reference '__calldata_ptr' in:"
                                ],
                                "start_col": 46,
                                "start_line": 18
                            },
                            "While handling calldata argument 'tokenId'"
                        ],
                        "start_col": 22,
                        "start_line": 5
                    }
                },
                "119": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.I721",
                        "__main__.I721.transferFrom"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 37,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/I721/transferFrom/f8c7980cd46ed6d764c999318b5692736b724dc08c1bf96e92d1b77ddf37af10.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 18,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 38,
                                        "end_line": 42,
                                        "input_file": {
                                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 33,
                                                "end_line": 6,
                                                "input_file": {
                                                    "filename": "autogen/starknet/contract_interface/I721/transferFrom/b016d077f46f58d4cffabd707b4d3495a859d0f543f418223b1ea57e409144f2.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 22,
                                                        "end_line": 18,
                                                        "input_file": {
                                                            "filename": "reetrancy.cairo"
                                                        },
                                                        "start_col": 10,
                                                        "start_line": 18
                                                    },
                                                    "While handling contract interface function:"
                                                ],
                                                "start_col": 31,
                                                "start_line": 2
                                            },
                                            "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                        ],
                                        "start_col": 20,
                                        "start_line": 42
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 10,
                                "start_line": 18
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 19,
                        "start_line": 1
                    }
                },
                "120": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.I721",
                        "__main__.I721.transferFrom"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 27,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/I721/transferFrom/f8c7980cd46ed6d764c999318b5692736b724dc08c1bf96e92d1b77ddf37af10.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 18,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 38,
                                        "end_line": 3,
                                        "input_file": {
                                            "filename": "autogen/starknet/contract_interface/I721/transferFrom/b016d077f46f58d4cffabd707b4d3495a859d0f543f418223b1ea57e409144f2.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 18,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 10,
                                                "start_line": 18
                                            },
                                            "While handling contract interface function:"
                                        ],
                                        "start_col": 22,
                                        "start_line": 3
                                    },
                                    "While expanding the reference 'contract_address' in:"
                                ],
                                "start_col": 10,
                                "start_line": 18
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 5,
                        "start_line": 2
                    }
                },
                "121": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.I721",
                        "__main__.I721.transferFrom"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 44,
                        "end_line": 4,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/I721/transferFrom/b016d077f46f58d4cffabd707b4d3495a859d0f543f418223b1ea57e409144f2.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 18,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 10,
                                "start_line": 18
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 23,
                        "start_line": 4
                    }
                },
                "123": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.I721",
                        "__main__.I721.transferFrom"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 54,
                        "end_line": 5,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/I721/transferFrom/b016d077f46f58d4cffabd707b4d3495a859d0f543f418223b1ea57e409144f2.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 18,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 10,
                                "start_line": 18
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 19,
                        "start_line": 5
                    }
                },
                "124": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.I721",
                        "__main__.I721.transferFrom"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 30,
                        "end_line": 3,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/I721/transferFrom/64f7842b108e76706927b78270ac73c789c558c54431b3359e4441e63ec2a868.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 18,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 32,
                                        "end_line": 6,
                                        "input_file": {
                                            "filename": "autogen/starknet/contract_interface/I721/transferFrom/b016d077f46f58d4cffabd707b4d3495a859d0f543f418223b1ea57e409144f2.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 18,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 10,
                                                "start_line": 18
                                            },
                                            "While handling contract interface function:"
                                        ],
                                        "start_col": 14,
                                        "start_line": 6
                                    },
                                    "While expanding the reference 'calldata_ptr_start' in:"
                                ],
                                "start_col": 10,
                                "start_line": 18
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 12,
                        "start_line": 3
                    }
                },
                "125": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.I721",
                        "__main__.I721.transferFrom"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 33,
                        "end_line": 6,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/I721/transferFrom/b016d077f46f58d4cffabd707b4d3495a859d0f543f418223b1ea57e409144f2.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 18,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 10,
                                "start_line": 18
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 31,
                        "start_line": 2
                    }
                },
                "127": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.I721",
                        "__main__.I721.transferFrom"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 38,
                        "end_line": 42,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 33,
                                "end_line": 6,
                                "input_file": {
                                    "filename": "autogen/starknet/contract_interface/I721/transferFrom/b016d077f46f58d4cffabd707b4d3495a859d0f543f418223b1ea57e409144f2.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 22,
                                        "end_line": 18,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 37,
                                                "end_line": 1,
                                                "input_file": {
                                                    "filename": "autogen/starknet/contract_interface/I721/transferFrom/f8c7980cd46ed6d764c999318b5692736b724dc08c1bf96e92d1b77ddf37af10.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 22,
                                                        "end_line": 18,
                                                        "input_file": {
                                                            "filename": "reetrancy.cairo"
                                                        },
                                                        "parent_location": [
                                                            {
                                                                "end_col": 11,
                                                                "end_line": 2,
                                                                "input_file": {
                                                                    "filename": "autogen/starknet/contract_interface/I721/transferFrom/fb06bdf6e8fa9c7ff7d919d712d494716b0b586b2a762687cfb72d93da06ab29.cairo"
                                                                },
                                                                "parent_location": [
                                                                    {
                                                                        "end_col": 22,
                                                                        "end_line": 18,
                                                                        "input_file": {
                                                                            "filename": "reetrancy.cairo"
                                                                        },
                                                                        "start_col": 10,
                                                                        "start_line": 18
                                                                    },
                                                                    "While handling contract interface function:"
                                                                ],
                                                                "start_col": 1,
                                                                "start_line": 2
                                                            },
                                                            "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                                        ],
                                                        "start_col": 10,
                                                        "start_line": 18
                                                    },
                                                    "While handling contract interface function:"
                                                ],
                                                "start_col": 19,
                                                "start_line": 1
                                            },
                                            "While expanding the reference 'syscall_ptr' in:"
                                        ],
                                        "start_col": 10,
                                        "start_line": 18
                                    },
                                    "While handling contract interface function:"
                                ],
                                "start_col": 31,
                                "start_line": 2
                            },
                            "While trying to update the implicit return value 'syscall_ptr' in:"
                        ],
                        "start_col": 20,
                        "start_line": 42
                    }
                },
                "128": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.I721",
                        "__main__.I721.transferFrom"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 54,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/I721/transferFrom/f8c7980cd46ed6d764c999318b5692736b724dc08c1bf96e92d1b77ddf37af10.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 18,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 54,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/contract_interface/I721/transferFrom/f8c7980cd46ed6d764c999318b5692736b724dc08c1bf96e92d1b77ddf37af10.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 18,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 11,
                                                        "end_line": 2,
                                                        "input_file": {
                                                            "filename": "autogen/starknet/contract_interface/I721/transferFrom/fb06bdf6e8fa9c7ff7d919d712d494716b0b586b2a762687cfb72d93da06ab29.cairo"
                                                        },
                                                        "parent_location": [
                                                            {
                                                                "end_col": 22,
                                                                "end_line": 18,
                                                                "input_file": {
                                                                    "filename": "reetrancy.cairo"
                                                                },
                                                                "start_col": 10,
                                                                "start_line": 18
                                                            },
                                                            "While handling contract interface function:"
                                                        ],
                                                        "start_col": 1,
                                                        "start_line": 2
                                                    },
                                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                                ],
                                                "start_col": 10,
                                                "start_line": 18
                                            },
                                            "While handling contract interface function:"
                                        ],
                                        "start_col": 39,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 10,
                                "start_line": 18
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 39,
                        "start_line": 1
                    }
                },
                "129": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.I721",
                        "__main__.I721.transferFrom"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 11,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/I721/transferFrom/fb06bdf6e8fa9c7ff7d919d712d494716b0b586b2a762687cfb72d93da06ab29.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 18,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 10,
                                "start_line": 18
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 1,
                        "start_line": 2
                    }
                },
                "130": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.addr"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 41,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 41,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 26,
                                        "end_line": 9,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                        },
                                        "start_col": 9,
                                        "start_line": 9
                                    },
                                    "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                ],
                                "start_col": 15,
                                "start_line": 7
                            },
                            "While expanding the reference 'pedersen_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 7
                    }
                },
                "131": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.addr"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 58,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 58,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 26,
                                        "end_line": 9,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                        },
                                        "start_col": 9,
                                        "start_line": 9
                                    },
                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                ],
                                "start_col": 43,
                                "start_line": 7
                            },
                            "While expanding the reference 'range_check_ptr' in:"
                        ],
                        "start_col": 43,
                        "start_line": 7
                    }
                },
                "132": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.addr"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 94,
                        "end_line": 8,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 24,
                                "end_line": 9,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                },
                                "start_col": 21,
                                "start_line": 9
                            },
                            "While expanding the reference 'res' in:"
                        ],
                        "start_col": 19,
                        "start_line": 8
                    }
                },
                "134": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.addr"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 26,
                        "end_line": 9,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                        },
                        "start_col": 9,
                        "start_line": 9
                    }
                },
                "135": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 61,
                        "end_line": 12,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 41,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 36,
                                        "end_line": 13,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                        },
                                        "start_col": 30,
                                        "start_line": 13
                                    },
                                    "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                ],
                                "start_col": 15,
                                "start_line": 7
                            },
                            "While expanding the reference 'pedersen_ptr' in:"
                        ],
                        "start_col": 35,
                        "start_line": 12
                    }
                },
                "136": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 78,
                        "end_line": 12,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 58,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 36,
                                        "end_line": 13,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                        },
                                        "start_col": 30,
                                        "start_line": 13
                                    },
                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                ],
                                "start_col": 43,
                                "start_line": 7
                            },
                            "While expanding the reference 'range_check_ptr' in:"
                        ],
                        "start_col": 63,
                        "start_line": 12
                    }
                },
                "137": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 36,
                        "end_line": 13,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                        },
                        "start_col": 30,
                        "start_line": 13
                    }
                },
                "139": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 33,
                        "end_line": 12,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 37,
                                "end_line": 348,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 75,
                                        "end_line": 14,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                        },
                                        "start_col": 37,
                                        "start_line": 14
                                    },
                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                ],
                                "start_col": 19,
                                "start_line": 348
                            },
                            "While expanding the reference 'syscall_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 12
                    }
                },
                "140": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 26,
                        "end_line": 13,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 70,
                                "end_line": 14,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                },
                                "start_col": 58,
                                "start_line": 14
                            },
                            "While expanding the reference 'storage_addr' in:"
                        ],
                        "start_col": 14,
                        "start_line": 13
                    }
                },
                "141": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 75,
                        "end_line": 14,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                        },
                        "start_col": 37,
                        "start_line": 14
                    }
                },
                "143": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 37,
                        "end_line": 348,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 75,
                                "end_line": 14,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 42,
                                        "end_line": 16,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                        },
                                        "start_col": 31,
                                        "start_line": 16
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 37,
                                "start_line": 14
                            },
                            "While trying to update the implicit return value 'syscall_ptr' in:"
                        ],
                        "start_col": 19,
                        "start_line": 348
                    }
                },
                "144": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 41,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 36,
                                "end_line": 13,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 44,
                                        "end_line": 17,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                        },
                                        "start_col": 32,
                                        "start_line": 17
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 30,
                                "start_line": 13
                            },
                            "While trying to update the implicit return value 'pedersen_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 7
                    }
                },
                "145": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 58,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 36,
                                "end_line": 13,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 50,
                                        "end_line": 18,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                        },
                                        "start_col": 35,
                                        "start_line": 18
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 30,
                                "start_line": 13
                            },
                            "While trying to update the implicit return value 'range_check_ptr' in:"
                        ],
                        "start_col": 43,
                        "start_line": 7
                    }
                },
                "146": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 33,
                        "end_line": 14,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 64,
                                "end_line": 19,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                },
                                "start_col": 45,
                                "start_line": 19
                            },
                            "While expanding the reference '__storage_var_temp0' in:"
                        ],
                        "start_col": 14,
                        "start_line": 14
                    }
                },
                "147": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 55,
                        "end_line": 20,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                        },
                        "start_col": 9,
                        "start_line": 20
                    }
                },
                "148": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 62,
                        "end_line": 23,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 41,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 36,
                                        "end_line": 24,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                        },
                                        "start_col": 30,
                                        "start_line": 24
                                    },
                                    "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                ],
                                "start_col": 15,
                                "start_line": 7
                            },
                            "While expanding the reference 'pedersen_ptr' in:"
                        ],
                        "start_col": 36,
                        "start_line": 23
                    }
                },
                "149": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 79,
                        "end_line": 23,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 58,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 36,
                                        "end_line": 24,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                        },
                                        "start_col": 30,
                                        "start_line": 24
                                    },
                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                ],
                                "start_col": 43,
                                "start_line": 7
                            },
                            "While expanding the reference 'range_check_ptr' in:"
                        ],
                        "start_col": 64,
                        "start_line": 23
                    }
                },
                "150": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 36,
                        "end_line": 24,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                        },
                        "start_col": 30,
                        "start_line": 24
                    }
                },
                "152": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 34,
                        "end_line": 23,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 38,
                                "end_line": 366,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 80,
                                        "end_line": 25,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                        },
                                        "start_col": 9,
                                        "start_line": 25
                                    },
                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                ],
                                "start_col": 20,
                                "start_line": 366
                            },
                            "While expanding the reference 'syscall_ptr' in:"
                        ],
                        "start_col": 16,
                        "start_line": 23
                    }
                },
                "153": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 26,
                        "end_line": 24,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 43,
                                "end_line": 25,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                },
                                "start_col": 31,
                                "start_line": 25
                            },
                            "While expanding the reference 'storage_addr' in:"
                        ],
                        "start_col": 14,
                        "start_line": 24
                    }
                },
                "154": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 79,
                        "end_line": 25,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                        },
                        "start_col": 55,
                        "start_line": 25
                    }
                },
                "155": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 80,
                        "end_line": 25,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                        },
                        "start_col": 9,
                        "start_line": 25
                    }
                },
                "157": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 41,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 36,
                                "end_line": 24,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 62,
                                        "end_line": 19,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 19,
                                                "end_line": 26,
                                                "input_file": {
                                                    "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                                },
                                                "start_col": 9,
                                                "start_line": 26
                                            },
                                            "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                        ],
                                        "start_col": 36,
                                        "start_line": 19
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 30,
                                "start_line": 24
                            },
                            "While trying to update the implicit return value 'pedersen_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 7
                    }
                },
                "158": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 58,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 36,
                                "end_line": 24,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 79,
                                        "end_line": 19,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 19,
                                                "end_line": 26,
                                                "input_file": {
                                                    "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                                                },
                                                "start_col": 9,
                                                "start_line": 26
                                            },
                                            "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                        ],
                                        "start_col": 64,
                                        "start_line": 19
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 30,
                                "start_line": 24
                            },
                            "While trying to update the implicit return value 'range_check_ptr' in:"
                        ],
                        "start_col": 43,
                        "start_line": 7
                    }
                },
                "159": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__._continue",
                        "__main__._continue.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 19,
                        "end_line": 26,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/impl.cairo"
                        },
                        "start_col": 9,
                        "start_line": 26
                    }
                },
                "160": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.addr"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 41,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 41,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/user/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 26,
                                        "end_line": 9,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                        },
                                        "start_col": 9,
                                        "start_line": 9
                                    },
                                    "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                ],
                                "start_col": 15,
                                "start_line": 7
                            },
                            "While expanding the reference 'pedersen_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 7
                    }
                },
                "161": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.addr"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 58,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 58,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/user/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 26,
                                        "end_line": 9,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                        },
                                        "start_col": 9,
                                        "start_line": 9
                                    },
                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                ],
                                "start_col": 43,
                                "start_line": 7
                            },
                            "While expanding the reference 'range_check_ptr' in:"
                        ],
                        "start_col": 43,
                        "start_line": 7
                    }
                },
                "162": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.addr"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 95,
                        "end_line": 8,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 24,
                                "end_line": 9,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                },
                                "start_col": 21,
                                "start_line": 9
                            },
                            "While expanding the reference 'res' in:"
                        ],
                        "start_col": 19,
                        "start_line": 8
                    }
                },
                "164": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.addr"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 26,
                        "end_line": 9,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                        },
                        "start_col": 9,
                        "start_line": 9
                    }
                },
                "165": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 61,
                        "end_line": 12,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 41,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/user/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 36,
                                        "end_line": 15,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                        },
                                        "start_col": 30,
                                        "start_line": 15
                                    },
                                    "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                ],
                                "start_col": 15,
                                "start_line": 7
                            },
                            "While expanding the reference 'pedersen_ptr' in:"
                        ],
                        "start_col": 35,
                        "start_line": 12
                    }
                },
                "166": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 78,
                        "end_line": 12,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 58,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/user/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 36,
                                        "end_line": 15,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                        },
                                        "start_col": 30,
                                        "start_line": 15
                                    },
                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                ],
                                "start_col": 43,
                                "start_line": 7
                            },
                            "While expanding the reference 'range_check_ptr' in:"
                        ],
                        "start_col": 63,
                        "start_line": 12
                    }
                },
                "167": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 36,
                        "end_line": 15,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                        },
                        "start_col": 30,
                        "start_line": 15
                    }
                },
                "169": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 33,
                        "end_line": 12,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 37,
                                "end_line": 348,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 75,
                                        "end_line": 16,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                        },
                                        "start_col": 37,
                                        "start_line": 16
                                    },
                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                ],
                                "start_col": 19,
                                "start_line": 348
                            },
                            "While expanding the reference 'syscall_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 12
                    }
                },
                "170": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 26,
                        "end_line": 15,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 70,
                                "end_line": 16,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                },
                                "start_col": 58,
                                "start_line": 16
                            },
                            "While expanding the reference 'storage_addr' in:"
                        ],
                        "start_col": 14,
                        "start_line": 15
                    }
                },
                "171": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 75,
                        "end_line": 16,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                        },
                        "start_col": 37,
                        "start_line": 16
                    }
                },
                "173": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 37,
                        "end_line": 348,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 75,
                                "end_line": 16,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 42,
                                        "end_line": 18,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                        },
                                        "start_col": 31,
                                        "start_line": 18
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 37,
                                "start_line": 16
                            },
                            "While trying to update the implicit return value 'syscall_ptr' in:"
                        ],
                        "start_col": 19,
                        "start_line": 348
                    }
                },
                "174": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 41,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 36,
                                "end_line": 15,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 44,
                                        "end_line": 19,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                        },
                                        "start_col": 32,
                                        "start_line": 19
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 30,
                                "start_line": 15
                            },
                            "While trying to update the implicit return value 'pedersen_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 7
                    }
                },
                "175": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 58,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 36,
                                "end_line": 15,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 50,
                                        "end_line": 20,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                        },
                                        "start_col": 35,
                                        "start_line": 20
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 30,
                                "start_line": 15
                            },
                            "While trying to update the implicit return value 'range_check_ptr' in:"
                        ],
                        "start_col": 43,
                        "start_line": 7
                    }
                },
                "176": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 33,
                        "end_line": 16,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 64,
                                "end_line": 21,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                },
                                "start_col": 45,
                                "start_line": 21
                            },
                            "While expanding the reference '__storage_var_temp0' in:"
                        ],
                        "start_col": 14,
                        "start_line": 16
                    }
                },
                "177": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 55,
                        "end_line": 22,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                        },
                        "start_col": 9,
                        "start_line": 22
                    }
                },
                "178": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 62,
                        "end_line": 25,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 41,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/user/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 36,
                                        "end_line": 26,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                        },
                                        "start_col": 30,
                                        "start_line": 26
                                    },
                                    "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                ],
                                "start_col": 15,
                                "start_line": 7
                            },
                            "While expanding the reference 'pedersen_ptr' in:"
                        ],
                        "start_col": 36,
                        "start_line": 25
                    }
                },
                "179": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 79,
                        "end_line": 25,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 58,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/user/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 36,
                                        "end_line": 26,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                        },
                                        "start_col": 30,
                                        "start_line": 26
                                    },
                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                ],
                                "start_col": 43,
                                "start_line": 7
                            },
                            "While expanding the reference 'range_check_ptr' in:"
                        ],
                        "start_col": 64,
                        "start_line": 25
                    }
                },
                "180": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 36,
                        "end_line": 26,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                        },
                        "start_col": 30,
                        "start_line": 26
                    }
                },
                "182": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 34,
                        "end_line": 25,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 38,
                                "end_line": 366,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 80,
                                        "end_line": 27,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                        },
                                        "start_col": 9,
                                        "start_line": 27
                                    },
                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                ],
                                "start_col": 20,
                                "start_line": 366
                            },
                            "While expanding the reference 'syscall_ptr' in:"
                        ],
                        "start_col": 16,
                        "start_line": 25
                    }
                },
                "183": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 26,
                        "end_line": 26,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 43,
                                "end_line": 27,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                },
                                "start_col": 31,
                                "start_line": 27
                            },
                            "While expanding the reference 'storage_addr' in:"
                        ],
                        "start_col": 14,
                        "start_line": 26
                    }
                },
                "184": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 79,
                        "end_line": 27,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                        },
                        "start_col": 55,
                        "start_line": 27
                    }
                },
                "185": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 80,
                        "end_line": 27,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                        },
                        "start_col": 9,
                        "start_line": 27
                    }
                },
                "187": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 41,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 36,
                                "end_line": 26,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 62,
                                        "end_line": 21,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/user/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 19,
                                                "end_line": 28,
                                                "input_file": {
                                                    "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                                },
                                                "start_col": 9,
                                                "start_line": 28
                                            },
                                            "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                        ],
                                        "start_col": 36,
                                        "start_line": 21
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 30,
                                "start_line": 26
                            },
                            "While trying to update the implicit return value 'pedersen_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 7
                    }
                },
                "188": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 58,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 36,
                                "end_line": 26,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 79,
                                        "end_line": 21,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/user/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 19,
                                                "end_line": 28,
                                                "input_file": {
                                                    "filename": "autogen/starknet/storage_var/user/impl.cairo"
                                                },
                                                "start_col": 9,
                                                "start_line": 28
                                            },
                                            "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                        ],
                                        "start_col": 64,
                                        "start_line": 21
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 30,
                                "start_line": 26
                            },
                            "While trying to update the implicit return value 'range_check_ptr' in:"
                        ],
                        "start_col": 43,
                        "start_line": 7
                    }
                },
                "189": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.user",
                        "__main__.user.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 19,
                        "end_line": 28,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/impl.cairo"
                        },
                        "start_col": 9,
                        "start_line": 28
                    }
                },
                "190": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.addr"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 41,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 41,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/target/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 26,
                                        "end_line": 9,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                        },
                                        "start_col": 9,
                                        "start_line": 9
                                    },
                                    "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                ],
                                "start_col": 15,
                                "start_line": 7
                            },
                            "While expanding the reference 'pedersen_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 7
                    }
                },
                "191": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.addr"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 58,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 58,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/target/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 26,
                                        "end_line": 9,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                        },
                                        "start_col": 9,
                                        "start_line": 9
                                    },
                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                ],
                                "start_col": 43,
                                "start_line": 7
                            },
                            "While expanding the reference 'range_check_ptr' in:"
                        ],
                        "start_col": 43,
                        "start_line": 7
                    }
                },
                "192": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.addr"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 95,
                        "end_line": 8,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 24,
                                "end_line": 9,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                },
                                "start_col": 21,
                                "start_line": 9
                            },
                            "While expanding the reference 'res' in:"
                        ],
                        "start_col": 19,
                        "start_line": 8
                    }
                },
                "194": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.addr"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 26,
                        "end_line": 9,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                        },
                        "start_col": 9,
                        "start_line": 9
                    }
                },
                "195": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 61,
                        "end_line": 12,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 41,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/target/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 36,
                                        "end_line": 15,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                        },
                                        "start_col": 30,
                                        "start_line": 15
                                    },
                                    "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                ],
                                "start_col": 15,
                                "start_line": 7
                            },
                            "While expanding the reference 'pedersen_ptr' in:"
                        ],
                        "start_col": 35,
                        "start_line": 12
                    }
                },
                "196": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 78,
                        "end_line": 12,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 58,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/target/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 36,
                                        "end_line": 15,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                        },
                                        "start_col": 30,
                                        "start_line": 15
                                    },
                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                ],
                                "start_col": 43,
                                "start_line": 7
                            },
                            "While expanding the reference 'range_check_ptr' in:"
                        ],
                        "start_col": 63,
                        "start_line": 12
                    }
                },
                "197": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 36,
                        "end_line": 15,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                        },
                        "start_col": 30,
                        "start_line": 15
                    }
                },
                "199": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 33,
                        "end_line": 12,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 37,
                                "end_line": 348,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 75,
                                        "end_line": 16,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                        },
                                        "start_col": 37,
                                        "start_line": 16
                                    },
                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                ],
                                "start_col": 19,
                                "start_line": 348
                            },
                            "While expanding the reference 'syscall_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 12
                    }
                },
                "200": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 26,
                        "end_line": 15,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 70,
                                "end_line": 16,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                },
                                "start_col": 58,
                                "start_line": 16
                            },
                            "While expanding the reference 'storage_addr' in:"
                        ],
                        "start_col": 14,
                        "start_line": 15
                    }
                },
                "201": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 75,
                        "end_line": 16,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                        },
                        "start_col": 37,
                        "start_line": 16
                    }
                },
                "203": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 37,
                        "end_line": 348,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 75,
                                "end_line": 16,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 42,
                                        "end_line": 18,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                        },
                                        "start_col": 31,
                                        "start_line": 18
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 37,
                                "start_line": 16
                            },
                            "While trying to update the implicit return value 'syscall_ptr' in:"
                        ],
                        "start_col": 19,
                        "start_line": 348
                    }
                },
                "204": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 41,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 36,
                                "end_line": 15,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 44,
                                        "end_line": 19,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                        },
                                        "start_col": 32,
                                        "start_line": 19
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 30,
                                "start_line": 15
                            },
                            "While trying to update the implicit return value 'pedersen_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 7
                    }
                },
                "205": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 58,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 36,
                                "end_line": 15,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 50,
                                        "end_line": 20,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                        },
                                        "start_col": 35,
                                        "start_line": 20
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 30,
                                "start_line": 15
                            },
                            "While trying to update the implicit return value 'range_check_ptr' in:"
                        ],
                        "start_col": 43,
                        "start_line": 7
                    }
                },
                "206": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 33,
                        "end_line": 16,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 64,
                                "end_line": 21,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                },
                                "start_col": 45,
                                "start_line": 21
                            },
                            "While expanding the reference '__storage_var_temp0' in:"
                        ],
                        "start_col": 14,
                        "start_line": 16
                    }
                },
                "207": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 55,
                        "end_line": 22,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                        },
                        "start_col": 9,
                        "start_line": 22
                    }
                },
                "208": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 62,
                        "end_line": 25,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 41,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/target/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 36,
                                        "end_line": 26,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                        },
                                        "start_col": 30,
                                        "start_line": 26
                                    },
                                    "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                ],
                                "start_col": 15,
                                "start_line": 7
                            },
                            "While expanding the reference 'pedersen_ptr' in:"
                        ],
                        "start_col": 36,
                        "start_line": 25
                    }
                },
                "209": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 79,
                        "end_line": 25,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 58,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/target/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 36,
                                        "end_line": 26,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                        },
                                        "start_col": 30,
                                        "start_line": 26
                                    },
                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                ],
                                "start_col": 43,
                                "start_line": 7
                            },
                            "While expanding the reference 'range_check_ptr' in:"
                        ],
                        "start_col": 64,
                        "start_line": 25
                    }
                },
                "210": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 36,
                        "end_line": 26,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                        },
                        "start_col": 30,
                        "start_line": 26
                    }
                },
                "212": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 34,
                        "end_line": 25,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 38,
                                "end_line": 366,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 80,
                                        "end_line": 27,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                        },
                                        "start_col": 9,
                                        "start_line": 27
                                    },
                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                ],
                                "start_col": 20,
                                "start_line": 366
                            },
                            "While expanding the reference 'syscall_ptr' in:"
                        ],
                        "start_col": 16,
                        "start_line": 25
                    }
                },
                "213": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 26,
                        "end_line": 26,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 43,
                                "end_line": 27,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                },
                                "start_col": 31,
                                "start_line": 27
                            },
                            "While expanding the reference 'storage_addr' in:"
                        ],
                        "start_col": 14,
                        "start_line": 26
                    }
                },
                "214": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 79,
                        "end_line": 27,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                        },
                        "start_col": 55,
                        "start_line": 27
                    }
                },
                "215": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 80,
                        "end_line": 27,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                        },
                        "start_col": 9,
                        "start_line": 27
                    }
                },
                "217": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 41,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 36,
                                "end_line": 26,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 62,
                                        "end_line": 21,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/target/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 19,
                                                "end_line": 28,
                                                "input_file": {
                                                    "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                                },
                                                "start_col": 9,
                                                "start_line": 28
                                            },
                                            "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                        ],
                                        "start_col": 36,
                                        "start_line": 21
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 30,
                                "start_line": 26
                            },
                            "While trying to update the implicit return value 'pedersen_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 7
                    }
                },
                "218": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 58,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 36,
                                "end_line": 26,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 79,
                                        "end_line": 21,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/target/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 19,
                                                "end_line": 28,
                                                "input_file": {
                                                    "filename": "autogen/starknet/storage_var/target/impl.cairo"
                                                },
                                                "start_col": 9,
                                                "start_line": 28
                                            },
                                            "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                        ],
                                        "start_col": 64,
                                        "start_line": 21
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 30,
                                "start_line": 26
                            },
                            "While trying to update the implicit return value 'range_check_ptr' in:"
                        ],
                        "start_col": 43,
                        "start_line": 7
                    }
                },
                "219": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.target",
                        "__main__.target.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 19,
                        "end_line": 28,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/impl.cairo"
                        },
                        "start_col": 9,
                        "start_line": 28
                    }
                },
                "220": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.addr"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 41,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 41,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 26,
                                        "end_line": 9,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                        },
                                        "start_col": 9,
                                        "start_line": 9
                                    },
                                    "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                ],
                                "start_col": 15,
                                "start_line": 7
                            },
                            "While expanding the reference 'pedersen_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 7
                    }
                },
                "221": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.addr"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 58,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 58,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 26,
                                        "end_line": 9,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                        },
                                        "start_col": 9,
                                        "start_line": 9
                                    },
                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                ],
                                "start_col": 43,
                                "start_line": 7
                            },
                            "While expanding the reference 'range_check_ptr' in:"
                        ],
                        "start_col": 43,
                        "start_line": 7
                    }
                },
                "222": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.addr"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 94,
                        "end_line": 8,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 24,
                                "end_line": 9,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                },
                                "start_col": 21,
                                "start_line": 9
                            },
                            "While expanding the reference 'res' in:"
                        ],
                        "start_col": 19,
                        "start_line": 8
                    }
                },
                "224": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.addr"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 26,
                        "end_line": 9,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                        },
                        "start_col": 9,
                        "start_line": 9
                    }
                },
                "225": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 61,
                        "end_line": 12,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 41,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 36,
                                        "end_line": 15,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                        },
                                        "start_col": 30,
                                        "start_line": 15
                                    },
                                    "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                ],
                                "start_col": 15,
                                "start_line": 7
                            },
                            "While expanding the reference 'pedersen_ptr' in:"
                        ],
                        "start_col": 35,
                        "start_line": 12
                    }
                },
                "226": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 78,
                        "end_line": 12,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 58,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 36,
                                        "end_line": 15,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                        },
                                        "start_col": 30,
                                        "start_line": 15
                                    },
                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                ],
                                "start_col": 43,
                                "start_line": 7
                            },
                            "While expanding the reference 'range_check_ptr' in:"
                        ],
                        "start_col": 63,
                        "start_line": 12
                    }
                },
                "227": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 36,
                        "end_line": 15,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                        },
                        "start_col": 30,
                        "start_line": 15
                    }
                },
                "229": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 33,
                        "end_line": 12,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 37,
                                "end_line": 348,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 75,
                                        "end_line": 16,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                        },
                                        "start_col": 37,
                                        "start_line": 16
                                    },
                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                ],
                                "start_col": 19,
                                "start_line": 348
                            },
                            "While expanding the reference 'syscall_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 12
                    }
                },
                "230": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 26,
                        "end_line": 15,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 70,
                                "end_line": 16,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                },
                                "start_col": 58,
                                "start_line": 16
                            },
                            "While expanding the reference 'storage_addr' in:"
                        ],
                        "start_col": 14,
                        "start_line": 15
                    }
                },
                "231": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 75,
                        "end_line": 16,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                        },
                        "start_col": 37,
                        "start_line": 16
                    }
                },
                "233": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 37,
                        "end_line": 348,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 75,
                                "end_line": 16,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 42,
                                        "end_line": 18,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                        },
                                        "start_col": 31,
                                        "start_line": 18
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 37,
                                "start_line": 16
                            },
                            "While trying to update the implicit return value 'syscall_ptr' in:"
                        ],
                        "start_col": 19,
                        "start_line": 348
                    }
                },
                "234": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 41,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 36,
                                "end_line": 15,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 44,
                                        "end_line": 19,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                        },
                                        "start_col": 32,
                                        "start_line": 19
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 30,
                                "start_line": 15
                            },
                            "While trying to update the implicit return value 'pedersen_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 7
                    }
                },
                "235": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 58,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 36,
                                "end_line": 15,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 50,
                                        "end_line": 20,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                        },
                                        "start_col": 35,
                                        "start_line": 20
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 30,
                                "start_line": 15
                            },
                            "While trying to update the implicit return value 'range_check_ptr' in:"
                        ],
                        "start_col": 43,
                        "start_line": 7
                    }
                },
                "236": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 33,
                        "end_line": 16,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 64,
                                "end_line": 21,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                },
                                "start_col": 45,
                                "start_line": 21
                            },
                            "While expanding the reference '__storage_var_temp0' in:"
                        ],
                        "start_col": 14,
                        "start_line": 16
                    }
                },
                "237": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.read"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 55,
                        "end_line": 22,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                        },
                        "start_col": 9,
                        "start_line": 22
                    }
                },
                "238": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 62,
                        "end_line": 25,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 41,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 36,
                                        "end_line": 26,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                        },
                                        "start_col": 30,
                                        "start_line": 26
                                    },
                                    "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                ],
                                "start_col": 15,
                                "start_line": 7
                            },
                            "While expanding the reference 'pedersen_ptr' in:"
                        ],
                        "start_col": 36,
                        "start_line": 25
                    }
                },
                "239": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 79,
                        "end_line": 25,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 58,
                                "end_line": 7,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 36,
                                        "end_line": 26,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                        },
                                        "start_col": 30,
                                        "start_line": 26
                                    },
                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                ],
                                "start_col": 43,
                                "start_line": 7
                            },
                            "While expanding the reference 'range_check_ptr' in:"
                        ],
                        "start_col": 64,
                        "start_line": 25
                    }
                },
                "240": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 36,
                        "end_line": 26,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                        },
                        "start_col": 30,
                        "start_line": 26
                    }
                },
                "242": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 34,
                        "end_line": 25,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 38,
                                "end_line": 366,
                                "input_file": {
                                    "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 80,
                                        "end_line": 27,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                        },
                                        "start_col": 9,
                                        "start_line": 27
                                    },
                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                ],
                                "start_col": 20,
                                "start_line": 366
                            },
                            "While expanding the reference 'syscall_ptr' in:"
                        ],
                        "start_col": 16,
                        "start_line": 25
                    }
                },
                "243": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 26,
                        "end_line": 26,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 43,
                                "end_line": 27,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                },
                                "start_col": 31,
                                "start_line": 27
                            },
                            "While expanding the reference 'storage_addr' in:"
                        ],
                        "start_col": 14,
                        "start_line": 26
                    }
                },
                "244": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 79,
                        "end_line": 27,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                        },
                        "start_col": 55,
                        "start_line": 27
                    }
                },
                "245": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 80,
                        "end_line": 27,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                        },
                        "start_col": 9,
                        "start_line": 27
                    }
                },
                "247": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 41,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 36,
                                "end_line": 26,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 62,
                                        "end_line": 21,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 19,
                                                "end_line": 28,
                                                "input_file": {
                                                    "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                                },
                                                "start_col": 9,
                                                "start_line": 28
                                            },
                                            "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                        ],
                                        "start_col": 36,
                                        "start_line": 21
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 30,
                                "start_line": 26
                            },
                            "While trying to update the implicit return value 'pedersen_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 7
                    }
                },
                "248": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 58,
                        "end_line": 7,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 36,
                                "end_line": 26,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 79,
                                        "end_line": 21,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 19,
                                                "end_line": 28,
                                                "input_file": {
                                                    "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                                                },
                                                "start_col": 9,
                                                "start_line": 28
                                            },
                                            "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                        ],
                                        "start_col": 64,
                                        "start_line": 21
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 30,
                                "start_line": 26
                            },
                            "While trying to update the implicit return value 'range_check_ptr' in:"
                        ],
                        "start_col": 43,
                        "start_line": 7
                    }
                },
                "249": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__.punk",
                        "__main__.punk.write"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 19,
                        "end_line": 28,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/impl.cairo"
                        },
                        "start_col": 9,
                        "start_line": 28
                    }
                },
                "250": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 18,
                        "end_line": 46,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 5,
                        "start_line": 46
                    }
                },
                "252": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 29,
                        "end_line": 45,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 34,
                                "end_line": 19,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 23,
                                        "end_line": 49,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "start_col": 5,
                                        "start_line": 49
                                    },
                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                ],
                                "start_col": 16,
                                "start_line": 19
                            },
                            "While expanding the reference 'syscall_ptr' in:"
                        ],
                        "start_col": 11,
                        "start_line": 45
                    }
                },
                "253": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 57,
                        "end_line": 45,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 62,
                                "end_line": 19,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 23,
                                        "end_line": 49,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "start_col": 5,
                                        "start_line": 49
                                    },
                                    "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                ],
                                "start_col": 36,
                                "start_line": 19
                            },
                            "While expanding the reference 'pedersen_ptr' in:"
                        ],
                        "start_col": 31,
                        "start_line": 45
                    }
                },
                "254": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 74,
                        "end_line": 45,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 79,
                                "end_line": 19,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 23,
                                        "end_line": 49,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "start_col": 5,
                                        "start_line": 49
                                    },
                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                ],
                                "start_col": 64,
                                "start_line": 19
                            },
                            "While expanding the reference 'range_check_ptr' in:"
                        ],
                        "start_col": 59,
                        "start_line": 45
                    }
                },
                "255": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 22,
                        "end_line": 49,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 21,
                        "start_line": 49
                    }
                },
                "257": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 23,
                        "end_line": 49,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 5,
                        "start_line": 49
                    }
                },
                "259": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 34,
                        "end_line": 19,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 23,
                                "end_line": 49,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 45,
                                        "end_line": 270,
                                        "input_file": {
                                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 58,
                                                "end_line": 51,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 36,
                                                "start_line": 51
                                            },
                                            "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                        ],
                                        "start_col": 27,
                                        "start_line": 270
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 5,
                                "start_line": 49
                            },
                            "While trying to update the implicit return value 'syscall_ptr' in:"
                        ],
                        "start_col": 16,
                        "start_line": 19
                    }
                },
                "260": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 58,
                        "end_line": 51,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 36,
                        "start_line": 51
                    }
                },
                "262": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 45,
                        "end_line": 270,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 58,
                                "end_line": 51,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 34,
                                        "end_line": 21,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/user/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 28,
                                                "end_line": 54,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 5,
                                                "start_line": 54
                                            },
                                            "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                        ],
                                        "start_col": 16,
                                        "start_line": 21
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 36,
                                "start_line": 51
                            },
                            "While trying to update the implicit return value 'syscall_ptr' in:"
                        ],
                        "start_col": 27,
                        "start_line": 270
                    }
                },
                "263": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 62,
                        "end_line": 19,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 23,
                                "end_line": 49,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 62,
                                        "end_line": 21,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/user/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 28,
                                                "end_line": 54,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 5,
                                                "start_line": 54
                                            },
                                            "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                        ],
                                        "start_col": 36,
                                        "start_line": 21
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 5,
                                "start_line": 49
                            },
                            "While trying to update the implicit return value 'pedersen_ptr' in:"
                        ],
                        "start_col": 36,
                        "start_line": 19
                    }
                },
                "264": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 79,
                        "end_line": 19,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 23,
                                "end_line": 49,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 79,
                                        "end_line": 21,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/user/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 28,
                                                "end_line": 54,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 5,
                                                "start_line": 54
                                            },
                                            "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                        ],
                                        "start_col": 64,
                                        "start_line": 21
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 5,
                                "start_line": 49
                            },
                            "While trying to update the implicit return value 'range_check_ptr' in:"
                        ],
                        "start_col": 64,
                        "start_line": 19
                    }
                },
                "265": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 116,
                        "end_line": 45,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 27,
                                "end_line": 54,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 16,
                                "start_line": 54
                            },
                            "While expanding the reference 'addressUser' in:"
                        ],
                        "start_col": 99,
                        "start_line": 45
                    }
                },
                "266": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 28,
                        "end_line": 54,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 5,
                        "start_line": 54
                    }
                },
                "268": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 97,
                        "end_line": 45,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 33,
                                "end_line": 55,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 18,
                                "start_line": 55
                            },
                            "While expanding the reference 'addressContract' in:"
                        ],
                        "start_col": 76,
                        "start_line": 45
                    }
                },
                "269": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 34,
                        "end_line": 55,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 5,
                        "start_line": 55
                    }
                },
                "271": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 135,
                        "end_line": 45,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 27,
                                "end_line": 56,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 16,
                                "start_line": 56
                            },
                            "While expanding the reference 'addressPunk' in:"
                        ],
                        "start_col": 118,
                        "start_line": 45
                    }
                },
                "272": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 28,
                        "end_line": 56,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 5,
                        "start_line": 56
                    }
                },
                "274": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 34,
                        "end_line": 21,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 28,
                                "end_line": 56,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 30,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/d308ac6fd7d3ff633fc0c3917e7ab82b4b2bcfc481b2dfc124904e88ec8ce8d6.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 15,
                                                "end_line": 12,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 83,
                                                        "end_line": 59,
                                                        "input_file": {
                                                            "filename": "reetrancy.cairo"
                                                        },
                                                        "start_col": 5,
                                                        "start_line": 59
                                                    },
                                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                                ],
                                                "start_col": 10,
                                                "start_line": 12
                                            },
                                            "While handling contract interface function:"
                                        ],
                                        "start_col": 12,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 5,
                                "start_line": 56
                            },
                            "While trying to update the implicit return value 'syscall_ptr' in:"
                        ],
                        "start_col": 16,
                        "start_line": 21
                    }
                },
                "275": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 79,
                        "end_line": 21,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 28,
                                "end_line": 56,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 47,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/d308ac6fd7d3ff633fc0c3917e7ab82b4b2bcfc481b2dfc124904e88ec8ce8d6.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 15,
                                                "end_line": 12,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 83,
                                                        "end_line": 59,
                                                        "input_file": {
                                                            "filename": "reetrancy.cairo"
                                                        },
                                                        "start_col": 5,
                                                        "start_line": 59
                                                    },
                                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                                ],
                                                "start_col": 10,
                                                "start_line": 12
                                            },
                                            "While handling contract interface function:"
                                        ],
                                        "start_col": 32,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 5,
                                "start_line": 56
                            },
                            "While trying to update the implicit return value 'range_check_ptr' in:"
                        ],
                        "start_col": 64,
                        "start_line": 21
                    }
                },
                "276": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 97,
                        "end_line": 45,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 55,
                                "end_line": 59,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 40,
                                "start_line": 59
                            },
                            "While expanding the reference 'addressContract' in:"
                        ],
                        "start_col": 76,
                        "start_line": 45
                    }
                },
                "277": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 32,
                        "end_line": 51,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 82,
                                "end_line": 59,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 60,
                                "start_line": 59
                            },
                            "While expanding the reference 'currentContractAddress' in:"
                        ],
                        "start_col": 10,
                        "start_line": 51
                    }
                },
                "278": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 83,
                        "end_line": 59,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 5,
                        "start_line": 59
                    }
                },
                "280": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 30,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/d308ac6fd7d3ff633fc0c3917e7ab82b4b2bcfc481b2dfc124904e88ec8ce8d6.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 15,
                                "end_line": 12,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 83,
                                        "end_line": 59,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 29,
                                                "end_line": 45,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 14,
                                                        "end_line": 61,
                                                        "input_file": {
                                                            "filename": "reetrancy.cairo"
                                                        },
                                                        "start_col": 5,
                                                        "start_line": 61
                                                    },
                                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                                ],
                                                "start_col": 11,
                                                "start_line": 45
                                            },
                                            "While expanding the reference 'syscall_ptr' in:"
                                        ],
                                        "start_col": 5,
                                        "start_line": 59
                                    },
                                    "While trying to update the implicit return value 'syscall_ptr' in:"
                                ],
                                "start_col": 10,
                                "start_line": 12
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 12,
                        "start_line": 1
                    }
                },
                "281": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 62,
                        "end_line": 21,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 28,
                                "end_line": 56,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 57,
                                        "end_line": 45,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 14,
                                                "end_line": 61,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 5,
                                                "start_line": 61
                                            },
                                            "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                        ],
                                        "start_col": 31,
                                        "start_line": 45
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 5,
                                "start_line": 56
                            },
                            "While trying to update the implicit return value 'pedersen_ptr' in:"
                        ],
                        "start_col": 36,
                        "start_line": 21
                    }
                },
                "282": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 47,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/d308ac6fd7d3ff633fc0c3917e7ab82b4b2bcfc481b2dfc124904e88ec8ce8d6.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 15,
                                "end_line": 12,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 83,
                                        "end_line": 59,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 74,
                                                "end_line": 45,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 14,
                                                        "end_line": 61,
                                                        "input_file": {
                                                            "filename": "reetrancy.cairo"
                                                        },
                                                        "start_col": 5,
                                                        "start_line": 61
                                                    },
                                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                                ],
                                                "start_col": 59,
                                                "start_line": 45
                                            },
                                            "While expanding the reference 'range_check_ptr' in:"
                                        ],
                                        "start_col": 5,
                                        "start_line": 59
                                    },
                                    "While trying to update the implicit return value 'range_check_ptr' in:"
                                ],
                                "start_col": 10,
                                "start_line": 12
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 32,
                        "start_line": 1
                    }
                },
                "283": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 14,
                        "end_line": 61,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 5,
                        "start_line": 61
                    }
                },
                "284": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 40,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/6d0ee2d961549839c7dc4402d30681e8f4f19d384358313f715f5e8770967298.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 135,
                                "end_line": 45,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 45,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/arg_processor/c31620b02d4d706f0542c989b2aadc01b0981d1f6a5933a8fe4937ace3d70d92.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 10,
                                                "end_line": 45,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 57,
                                                        "end_line": 1,
                                                        "input_file": {
                                                            "filename": "autogen/starknet/arg_processor/01cba52f8515996bb9d7070bde81ff39281d096d7024a558efcba6e1fd2402cf.cairo"
                                                        },
                                                        "parent_location": [
                                                            {
                                                                "end_col": 10,
                                                                "end_line": 45,
                                                                "input_file": {
                                                                    "filename": "reetrancy.cairo"
                                                                },
                                                                "start_col": 6,
                                                                "start_line": 45
                                                            },
                                                            "While handling calldata of"
                                                        ],
                                                        "start_col": 35,
                                                        "start_line": 1
                                                    },
                                                    "While expanding the reference '__calldata_actual_size' in:"
                                                ],
                                                "start_col": 6,
                                                "start_line": 45
                                            },
                                            "While handling calldata of"
                                        ],
                                        "start_col": 31,
                                        "start_line": 1
                                    },
                                    "While expanding the reference '__calldata_ptr' in:"
                                ],
                                "start_col": 118,
                                "start_line": 45
                            },
                            "While handling calldata argument 'addressPunk'"
                        ],
                        "start_col": 22,
                        "start_line": 2
                    }
                },
                "286": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 58,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/01cba52f8515996bb9d7070bde81ff39281d096d7024a558efcba6e1fd2402cf.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 10,
                                "end_line": 45,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 6,
                                "start_line": 45
                            },
                            "While handling calldata of"
                        ],
                        "start_col": 1,
                        "start_line": 1
                    }
                },
                "287": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 64,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/hack/b2c52ca2d2a8fc8791a983086d8716c5eacd0c3d62934914d2286f84b98ff4cb.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 29,
                                "end_line": 45,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 55,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/hack/3cf159a0ba2d9c6ca162fb61b78c8cbc15d56feace02d3d7d58bf424031e0da1.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 10,
                                                "end_line": 45,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 45
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 44,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 11,
                                "start_line": 45
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 19,
                        "start_line": 1
                    }
                },
                "288": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 110,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/hack/9684a85e93c782014ca14293edea4eb2502039a5a7b6538ecd39c56faaf12529.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 57,
                                "end_line": 45,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 82,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/hack/3cf159a0ba2d9c6ca162fb61b78c8cbc15d56feace02d3d7d58bf424031e0da1.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 10,
                                                "end_line": 45,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 45
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 70,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 31,
                                "start_line": 45
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 20,
                        "start_line": 1
                    }
                },
                "289": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 67,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/hack/741ea357d6336b0bed7bf0472425acd0311d543883b803388880e60a232040c7.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 74,
                                "end_line": 45,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 115,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/hack/3cf159a0ba2d9c6ca162fb61b78c8cbc15d56feace02d3d7d58bf424031e0da1.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 10,
                                                "end_line": 45,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 45
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 100,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 59,
                                "start_line": 45
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 23,
                        "start_line": 1
                    }
                },
                "290": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 54,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/1416b2c848728cbeb4707f7b1eebc83cec935836ded31fdc67eb5cfb60e0f82b.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 97,
                                "end_line": 45,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 163,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/hack/3cf159a0ba2d9c6ca162fb61b78c8cbc15d56feace02d3d7d58bf424031e0da1.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 10,
                                                "end_line": 45,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 45
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 133,
                                        "start_line": 1
                                    },
                                    "While expanding the reference '__calldata_arg_addressContract' in:"
                                ],
                                "start_col": 76,
                                "start_line": 45
                            },
                            "While handling calldata argument 'addressContract'"
                        ],
                        "start_col": 38,
                        "start_line": 1
                    }
                },
                "291": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 50,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/ce7977f812acdfc499297852e9a810b98ea88051bb6fce7fb8180e9b55e9dffe.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 116,
                                "end_line": 45,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 203,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/hack/3cf159a0ba2d9c6ca162fb61b78c8cbc15d56feace02d3d7d58bf424031e0da1.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 10,
                                                "end_line": 45,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 45
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 177,
                                        "start_line": 1
                                    },
                                    "While expanding the reference '__calldata_arg_addressUser' in:"
                                ],
                                "start_col": 99,
                                "start_line": 45
                            },
                            "While handling calldata argument 'addressUser'"
                        ],
                        "start_col": 34,
                        "start_line": 1
                    }
                },
                "292": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 50,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/6d0ee2d961549839c7dc4402d30681e8f4f19d384358313f715f5e8770967298.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 135,
                                "end_line": 45,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 243,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/hack/3cf159a0ba2d9c6ca162fb61b78c8cbc15d56feace02d3d7d58bf424031e0da1.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 10,
                                                "end_line": 45,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 45
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 217,
                                        "start_line": 1
                                    },
                                    "While expanding the reference '__calldata_arg_addressPunk' in:"
                                ],
                                "start_col": 118,
                                "start_line": 45
                            },
                            "While handling calldata argument 'addressPunk'"
                        ],
                        "start_col": 34,
                        "start_line": 1
                    }
                },
                "293": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 10,
                        "end_line": 45,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 6,
                        "start_line": 45
                    }
                },
                "295": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [
                        {
                            "location": {
                                "end_col": 34,
                                "end_line": 2,
                                "input_file": {
                                    "filename": "autogen/starknet/external/hack/3cf159a0ba2d9c6ca162fb61b78c8cbc15d56feace02d3d7d58bf424031e0da1.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 10,
                                        "end_line": 45,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "start_col": 6,
                                        "start_line": 45
                                    },
                                    "While constructing the external wrapper for:"
                                ],
                                "start_col": 1,
                                "start_line": 2
                            },
                            "n_prefix_newlines": 0
                        }
                    ],
                    "inst": {
                        "end_col": 24,
                        "end_line": 3,
                        "input_file": {
                            "filename": "autogen/starknet/external/hack/3cf159a0ba2d9c6ca162fb61b78c8cbc15d56feace02d3d7d58bf424031e0da1.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 10,
                                "end_line": 45,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 6,
                                "start_line": 45
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 1,
                        "start_line": 3
                    }
                },
                "297": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 55,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/hack/3cf159a0ba2d9c6ca162fb61b78c8cbc15d56feace02d3d7d58bf424031e0da1.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 10,
                                "end_line": 45,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 20,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/hack/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 10,
                                                "end_line": 45,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 45
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 9,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 6,
                                "start_line": 45
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 44,
                        "start_line": 1
                    }
                },
                "298": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 82,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/hack/3cf159a0ba2d9c6ca162fb61b78c8cbc15d56feace02d3d7d58bf424031e0da1.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 10,
                                "end_line": 45,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 33,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/hack/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 10,
                                                "end_line": 45,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 45
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 21,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 6,
                                "start_line": 45
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 70,
                        "start_line": 1
                    }
                },
                "299": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 115,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/hack/3cf159a0ba2d9c6ca162fb61b78c8cbc15d56feace02d3d7d58bf424031e0da1.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 10,
                                "end_line": 45,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 49,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/hack/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 10,
                                                "end_line": 45,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 45
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 34,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 6,
                                "start_line": 45
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 100,
                        "start_line": 1
                    }
                },
                "300": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 21,
                        "end_line": 4,
                        "input_file": {
                            "filename": "autogen/starknet/external/hack/3cf159a0ba2d9c6ca162fb61b78c8cbc15d56feace02d3d7d58bf424031e0da1.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 10,
                                "end_line": 45,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 62,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/hack/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 10,
                                                "end_line": 45,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 45
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 50,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'retdata_size' in:"
                                ],
                                "start_col": 6,
                                "start_line": 45
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 20,
                        "start_line": 4
                    }
                },
                "302": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 16,
                        "end_line": 3,
                        "input_file": {
                            "filename": "autogen/starknet/external/hack/3cf159a0ba2d9c6ca162fb61b78c8cbc15d56feace02d3d7d58bf424031e0da1.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 10,
                                "end_line": 45,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 70,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/hack/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 10,
                                                "end_line": 45,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 45
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 63,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'retdata' in:"
                                ],
                                "start_col": 6,
                                "start_line": 45
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 9,
                        "start_line": 3
                    }
                },
                "303": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.hack"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 72,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/hack/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 10,
                                "end_line": 45,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 6,
                                "start_line": 45
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 1,
                        "start_line": 1
                    }
                },
                "304": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.supportsInterface"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 42,
                        "end_line": 66,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 42,
                                "end_line": 66,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 24,
                                        "end_line": 69,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "start_col": 5,
                                        "start_line": 69
                                    },
                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                ],
                                "start_col": 24,
                                "start_line": 66
                            },
                            "While expanding the reference 'syscall_ptr' in:"
                        ],
                        "start_col": 24,
                        "start_line": 66
                    }
                },
                "305": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.supportsInterface"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 70,
                        "end_line": 66,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 70,
                                "end_line": 66,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 24,
                                        "end_line": 69,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "start_col": 5,
                                        "start_line": 69
                                    },
                                    "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                ],
                                "start_col": 44,
                                "start_line": 66
                            },
                            "While expanding the reference 'pedersen_ptr' in:"
                        ],
                        "start_col": 44,
                        "start_line": 66
                    }
                },
                "306": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.supportsInterface"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 87,
                        "end_line": 66,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 87,
                                "end_line": 66,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 24,
                                        "end_line": 69,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "start_col": 5,
                                        "start_line": 69
                                    },
                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                ],
                                "start_col": 72,
                                "start_line": 66
                            },
                            "While expanding the reference 'range_check_ptr' in:"
                        ],
                        "start_col": 72,
                        "start_line": 66
                    }
                },
                "307": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.supportsInterface"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 22,
                        "end_line": 69,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 21,
                        "start_line": 69
                    }
                },
                "309": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.supportsInterface"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 24,
                        "end_line": 69,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 5,
                        "start_line": 69
                    }
                },
                "310": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface_encode_return"
                    ],
                    "flow_tracking_data": null,
                    "hints": [
                        {
                            "location": {
                                "end_col": 38,
                                "end_line": 3,
                                "input_file": {
                                    "filename": "autogen/starknet/external/return/supportsInterface/40b33230f82887d6ee6ba7936c0fcb15006d084631250a62d0c39394fb5b7629.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 23,
                                        "end_line": 66,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "start_col": 6,
                                        "start_line": 66
                                    },
                                    "While handling return value of"
                                ],
                                "start_col": 5,
                                "start_line": 3
                            },
                            "n_prefix_newlines": 0
                        }
                    ],
                    "inst": {
                        "end_col": 18,
                        "end_line": 4,
                        "input_file": {
                            "filename": "autogen/starknet/external/return/supportsInterface/40b33230f82887d6ee6ba7936c0fcb15006d084631250a62d0c39394fb5b7629.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 23,
                                "end_line": 66,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 6,
                                "start_line": 66
                            },
                            "While handling return value of"
                        ],
                        "start_col": 5,
                        "start_line": 4
                    }
                },
                "312": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface_encode_return"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 49,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/5c10028f67364b153272aa9b4cbc0fb78920a40fab821ac7257b0069e0773b49.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 20,
                                "end_line": 68,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 7,
                                "start_line": 68
                            },
                            "While handling return value 'success'"
                        ],
                        "start_col": 1,
                        "start_line": 1
                    }
                },
                "313": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface_encode_return"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 48,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/5c10028f67364b153272aa9b4cbc0fb78920a40fab821ac7257b0069e0773b49.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 20,
                                "end_line": 68,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 36,
                                        "end_line": 11,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/return/supportsInterface/40b33230f82887d6ee6ba7936c0fcb15006d084631250a62d0c39394fb5b7629.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 23,
                                                "end_line": 66,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 66
                                            },
                                            "While handling return value of"
                                        ],
                                        "start_col": 18,
                                        "start_line": 11
                                    },
                                    "While expanding the reference '__return_value_ptr' in:"
                                ],
                                "start_col": 7,
                                "start_line": 68
                            },
                            "While handling return value 'success'"
                        ],
                        "start_col": 26,
                        "start_line": 2
                    }
                },
                "315": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface_encode_return"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 81,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/return/supportsInterface/40b33230f82887d6ee6ba7936c0fcb15006d084631250a62d0c39394fb5b7629.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 23,
                                "end_line": 66,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 40,
                                        "end_line": 10,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/return/supportsInterface/40b33230f82887d6ee6ba7936c0fcb15006d084631250a62d0c39394fb5b7629.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 23,
                                                "end_line": 66,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 66
                                            },
                                            "While handling return value of"
                                        ],
                                        "start_col": 25,
                                        "start_line": 10
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 6,
                                "start_line": 66
                            },
                            "While handling return value of"
                        ],
                        "start_col": 66,
                        "start_line": 1
                    }
                },
                "316": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface_encode_return"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 63,
                        "end_line": 11,
                        "input_file": {
                            "filename": "autogen/starknet/external/return/supportsInterface/40b33230f82887d6ee6ba7936c0fcb15006d084631250a62d0c39394fb5b7629.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 23,
                                "end_line": 66,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 6,
                                "start_line": 66
                            },
                            "While handling return value of"
                        ],
                        "start_col": 18,
                        "start_line": 11
                    }
                },
                "317": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface_encode_return"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 35,
                        "end_line": 5,
                        "input_file": {
                            "filename": "autogen/starknet/external/return/supportsInterface/40b33230f82887d6ee6ba7936c0fcb15006d084631250a62d0c39394fb5b7629.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 23,
                                "end_line": 66,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 38,
                                        "end_line": 12,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/return/supportsInterface/40b33230f82887d6ee6ba7936c0fcb15006d084631250a62d0c39394fb5b7629.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 23,
                                                "end_line": 66,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 66
                                            },
                                            "While handling return value of"
                                        ],
                                        "start_col": 14,
                                        "start_line": 12
                                    },
                                    "While expanding the reference '__return_value_ptr_start' in:"
                                ],
                                "start_col": 6,
                                "start_line": 66
                            },
                            "While handling return value of"
                        ],
                        "start_col": 11,
                        "start_line": 5
                    }
                },
                "318": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface_encode_return"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 40,
                        "end_line": 12,
                        "input_file": {
                            "filename": "autogen/starknet/external/return/supportsInterface/40b33230f82887d6ee6ba7936c0fcb15006d084631250a62d0c39394fb5b7629.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 23,
                                "end_line": 66,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 6,
                                "start_line": 66
                            },
                            "While handling return value of"
                        ],
                        "start_col": 5,
                        "start_line": 9
                    }
                },
                "319": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 40,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/708f2877a5fc05dca278266df4d8e2025597a78068ffd64385f0ef27ab208871.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 67,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 45,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/arg_processor/c31620b02d4d706f0542c989b2aadc01b0981d1f6a5933a8fe4937ace3d70d92.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 23,
                                                "end_line": 66,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 57,
                                                        "end_line": 1,
                                                        "input_file": {
                                                            "filename": "autogen/starknet/arg_processor/01cba52f8515996bb9d7070bde81ff39281d096d7024a558efcba6e1fd2402cf.cairo"
                                                        },
                                                        "parent_location": [
                                                            {
                                                                "end_col": 23,
                                                                "end_line": 66,
                                                                "input_file": {
                                                                    "filename": "reetrancy.cairo"
                                                                },
                                                                "start_col": 6,
                                                                "start_line": 66
                                                            },
                                                            "While handling calldata of"
                                                        ],
                                                        "start_col": 35,
                                                        "start_line": 1
                                                    },
                                                    "While expanding the reference '__calldata_actual_size' in:"
                                                ],
                                                "start_col": 6,
                                                "start_line": 66
                                            },
                                            "While handling calldata of"
                                        ],
                                        "start_col": 31,
                                        "start_line": 1
                                    },
                                    "While expanding the reference '__calldata_ptr' in:"
                                ],
                                "start_col": 5,
                                "start_line": 67
                            },
                            "While handling calldata argument 'interfaceId'"
                        ],
                        "start_col": 22,
                        "start_line": 2
                    }
                },
                "321": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 58,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/01cba52f8515996bb9d7070bde81ff39281d096d7024a558efcba6e1fd2402cf.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 23,
                                "end_line": 66,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 6,
                                "start_line": 66
                            },
                            "While handling calldata of"
                        ],
                        "start_col": 1,
                        "start_line": 1
                    }
                },
                "322": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 64,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/supportsInterface/b2c52ca2d2a8fc8791a983086d8716c5eacd0c3d62934914d2286f84b98ff4cb.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 42,
                                "end_line": 66,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 55,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/supportsInterface/bca8209c591df9f65b13800fe22999fe396aef7f2e9ee72505ad6a9793c5916d.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 23,
                                                "end_line": 66,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 66
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 44,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 24,
                                "start_line": 66
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 19,
                        "start_line": 1
                    }
                },
                "323": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 110,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/supportsInterface/9684a85e93c782014ca14293edea4eb2502039a5a7b6538ecd39c56faaf12529.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 70,
                                "end_line": 66,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 82,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/supportsInterface/bca8209c591df9f65b13800fe22999fe396aef7f2e9ee72505ad6a9793c5916d.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 23,
                                                "end_line": 66,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 66
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 70,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 44,
                                "start_line": 66
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 20,
                        "start_line": 1
                    }
                },
                "324": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 67,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/supportsInterface/741ea357d6336b0bed7bf0472425acd0311d543883b803388880e60a232040c7.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 87,
                                "end_line": 66,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 115,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/supportsInterface/bca8209c591df9f65b13800fe22999fe396aef7f2e9ee72505ad6a9793c5916d.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 23,
                                                "end_line": 66,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 66
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 100,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 72,
                                "start_line": 66
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 23,
                        "start_line": 1
                    }
                },
                "325": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 50,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/708f2877a5fc05dca278266df4d8e2025597a78068ffd64385f0ef27ab208871.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 67,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 155,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/supportsInterface/bca8209c591df9f65b13800fe22999fe396aef7f2e9ee72505ad6a9793c5916d.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 23,
                                                "end_line": 66,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 66
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 129,
                                        "start_line": 1
                                    },
                                    "While expanding the reference '__calldata_arg_interfaceId' in:"
                                ],
                                "start_col": 5,
                                "start_line": 67
                            },
                            "While handling calldata argument 'interfaceId'"
                        ],
                        "start_col": 34,
                        "start_line": 1
                    }
                },
                "326": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 23,
                        "end_line": 66,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 6,
                        "start_line": 66
                    }
                },
                "328": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 115,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/supportsInterface/bca8209c591df9f65b13800fe22999fe396aef7f2e9ee72505ad6a9793c5916d.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 23,
                                "end_line": 66,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 106,
                                        "end_line": 2,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/supportsInterface/bca8209c591df9f65b13800fe22999fe396aef7f2e9ee72505ad6a9793c5916d.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 23,
                                                "end_line": 66,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 66
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 91,
                                        "start_line": 2
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 6,
                                "start_line": 66
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 100,
                        "start_line": 1
                    }
                },
                "329": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 107,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/external/supportsInterface/bca8209c591df9f65b13800fe22999fe396aef7f2e9ee72505ad6a9793c5916d.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 23,
                                "end_line": 66,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 6,
                                "start_line": 66
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 48,
                        "start_line": 2
                    }
                },
                "331": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 55,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/supportsInterface/bca8209c591df9f65b13800fe22999fe396aef7f2e9ee72505ad6a9793c5916d.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 23,
                                "end_line": 66,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 20,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/supportsInterface/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 23,
                                                "end_line": 66,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 66
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 9,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 6,
                                "start_line": 66
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 44,
                        "start_line": 1
                    }
                },
                "332": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 82,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/supportsInterface/bca8209c591df9f65b13800fe22999fe396aef7f2e9ee72505ad6a9793c5916d.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 23,
                                "end_line": 66,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 33,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/supportsInterface/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 23,
                                                "end_line": 66,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 66
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 21,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 6,
                                "start_line": 66
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 70,
                        "start_line": 1
                    }
                },
                "333": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 21,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/external/supportsInterface/bca8209c591df9f65b13800fe22999fe396aef7f2e9ee72505ad6a9793c5916d.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 23,
                                "end_line": 66,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 49,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/supportsInterface/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 23,
                                                "end_line": 66,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 66
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 34,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 6,
                                "start_line": 66
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 6,
                        "start_line": 2
                    }
                },
                "334": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 35,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/external/supportsInterface/bca8209c591df9f65b13800fe22999fe396aef7f2e9ee72505ad6a9793c5916d.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 23,
                                "end_line": 66,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 62,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/supportsInterface/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 23,
                                                "end_line": 66,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 66
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 50,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'retdata_size' in:"
                                ],
                                "start_col": 6,
                                "start_line": 66
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 23,
                        "start_line": 2
                    }
                },
                "335": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 44,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/external/supportsInterface/bca8209c591df9f65b13800fe22999fe396aef7f2e9ee72505ad6a9793c5916d.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 23,
                                "end_line": 66,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 70,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/supportsInterface/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 23,
                                                "end_line": 66,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 66
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 63,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'retdata' in:"
                                ],
                                "start_col": 6,
                                "start_line": 66
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 37,
                        "start_line": 2
                    }
                },
                "336": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 72,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/supportsInterface/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 23,
                                "end_line": 66,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 6,
                                "start_line": 66
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 1,
                        "start_line": 1
                    }
                },
                "337": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 18,
                        "end_line": 77,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 5,
                        "start_line": 77
                    }
                },
                "339": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 41,
                        "end_line": 74,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 33,
                                "end_line": 13,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 40,
                                        "end_line": 78,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "start_col": 24,
                                        "start_line": 78
                                    },
                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                ],
                                "start_col": 15,
                                "start_line": 13
                            },
                            "While expanding the reference 'syscall_ptr' in:"
                        ],
                        "start_col": 23,
                        "start_line": 74
                    }
                },
                "340": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 69,
                        "end_line": 74,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 61,
                                "end_line": 13,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 40,
                                        "end_line": 78,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "start_col": 24,
                                        "start_line": 78
                                    },
                                    "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                ],
                                "start_col": 35,
                                "start_line": 13
                            },
                            "While expanding the reference 'pedersen_ptr' in:"
                        ],
                        "start_col": 43,
                        "start_line": 74
                    }
                },
                "341": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 86,
                        "end_line": 74,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 78,
                                "end_line": 13,
                                "input_file": {
                                    "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 40,
                                        "end_line": 78,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "start_col": 24,
                                        "start_line": 78
                                    },
                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                ],
                                "start_col": 63,
                                "start_line": 13
                            },
                            "While expanding the reference 'range_check_ptr' in:"
                        ],
                        "start_col": 71,
                        "start_line": 74
                    }
                },
                "342": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 40,
                        "end_line": 78,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 24,
                        "start_line": 78
                    }
                },
                "344": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 7,
                        "end_line": 80,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 5,
                        "start_line": 80
                    }
                },
                "346": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 33,
                        "end_line": 13,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 40,
                                "end_line": 78,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 41,
                                        "end_line": 74,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 47,
                                                "end_line": 81,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 9,
                                                "start_line": 81
                                            },
                                            "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                        ],
                                        "start_col": 23,
                                        "start_line": 74
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 24,
                                "start_line": 78
                            },
                            "While trying to update the implicit return value 'syscall_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 13
                    }
                },
                "347": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 61,
                        "end_line": 13,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 40,
                                "end_line": 78,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 69,
                                        "end_line": 74,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 47,
                                                "end_line": 81,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 9,
                                                "start_line": 81
                                            },
                                            "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                        ],
                                        "start_col": 43,
                                        "start_line": 74
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 24,
                                "start_line": 78
                            },
                            "While trying to update the implicit return value 'pedersen_ptr' in:"
                        ],
                        "start_col": 35,
                        "start_line": 13
                    }
                },
                "348": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 78,
                        "end_line": 13,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 40,
                                "end_line": 78,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 86,
                                        "end_line": 74,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 47,
                                                "end_line": 81,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 9,
                                                "start_line": 81
                                            },
                                            "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                        ],
                                        "start_col": 71,
                                        "start_line": 74
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 24,
                                "start_line": 78
                            },
                            "While trying to update the implicit return value 'range_check_ptr' in:"
                        ],
                        "start_col": 63,
                        "start_line": 13
                    }
                },
                "349": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 45,
                        "end_line": 81,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 26,
                        "start_line": 81
                    }
                },
                "351": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 47,
                        "end_line": 81,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 9,
                        "start_line": 81
                    }
                },
                "352": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 33,
                        "end_line": 13,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 40,
                                "end_line": 78,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 34,
                                        "end_line": 19,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 23,
                                                "end_line": 85,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 5,
                                                "start_line": 85
                                            },
                                            "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                        ],
                                        "start_col": 16,
                                        "start_line": 19
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 24,
                                "start_line": 78
                            },
                            "While trying to update the implicit return value 'syscall_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 13
                    }
                },
                "353": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 61,
                        "end_line": 13,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 40,
                                "end_line": 78,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 62,
                                        "end_line": 19,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 23,
                                                "end_line": 85,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 5,
                                                "start_line": 85
                                            },
                                            "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                        ],
                                        "start_col": 36,
                                        "start_line": 19
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 24,
                                "start_line": 78
                            },
                            "While trying to update the implicit return value 'pedersen_ptr' in:"
                        ],
                        "start_col": 35,
                        "start_line": 13
                    }
                },
                "354": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 78,
                        "end_line": 13,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 40,
                                "end_line": 78,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 79,
                                        "end_line": 19,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 23,
                                                "end_line": 85,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 5,
                                                "start_line": 85
                                            },
                                            "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                        ],
                                        "start_col": 64,
                                        "start_line": 19
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 24,
                                "start_line": 78
                            },
                            "While trying to update the implicit return value 'range_check_ptr' in:"
                        ],
                        "start_col": 63,
                        "start_line": 13
                    }
                },
                "355": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 22,
                        "end_line": 85,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 21,
                        "start_line": 85
                    }
                },
                "357": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 23,
                        "end_line": 85,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 5,
                        "start_line": 85
                    }
                },
                "359": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 30,
                        "end_line": 87,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 19,
                        "start_line": 87
                    }
                },
                "361": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 33,
                        "end_line": 13,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 30,
                                "end_line": 87,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 33,
                                        "end_line": 13,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 40,
                                                "end_line": 88,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 24,
                                                "start_line": 88
                                            },
                                            "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                        ],
                                        "start_col": 15,
                                        "start_line": 13
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 19,
                                "start_line": 87
                            },
                            "While trying to update the implicit return value 'syscall_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 13
                    }
                },
                "362": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 61,
                        "end_line": 13,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 30,
                                "end_line": 87,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 61,
                                        "end_line": 13,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 40,
                                                "end_line": 88,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 24,
                                                "start_line": 88
                                            },
                                            "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                        ],
                                        "start_col": 35,
                                        "start_line": 13
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 19,
                                "start_line": 87
                            },
                            "While trying to update the implicit return value 'pedersen_ptr' in:"
                        ],
                        "start_col": 35,
                        "start_line": 13
                    }
                },
                "363": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 78,
                        "end_line": 13,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/user/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 30,
                                "end_line": 87,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 78,
                                        "end_line": 13,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 40,
                                                "end_line": 88,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 24,
                                                "start_line": 88
                                            },
                                            "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                        ],
                                        "start_col": 63,
                                        "start_line": 13
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 19,
                                "start_line": 87
                            },
                            "While trying to update the implicit return value 'range_check_ptr' in:"
                        ],
                        "start_col": 63,
                        "start_line": 13
                    }
                },
                "364": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 40,
                        "end_line": 88,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 24,
                        "start_line": 88
                    }
                },
                "366": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 33,
                        "end_line": 13,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 40,
                                "end_line": 88,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 33,
                                        "end_line": 13,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/target/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 34,
                                                "end_line": 89,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 21,
                                                "start_line": 89
                                            },
                                            "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                        ],
                                        "start_col": 15,
                                        "start_line": 13
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 24,
                                "start_line": 88
                            },
                            "While trying to update the implicit return value 'syscall_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 13
                    }
                },
                "367": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 61,
                        "end_line": 13,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 40,
                                "end_line": 88,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 61,
                                        "end_line": 13,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/target/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 34,
                                                "end_line": 89,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 21,
                                                "start_line": 89
                                            },
                                            "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                        ],
                                        "start_col": 35,
                                        "start_line": 13
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 24,
                                "start_line": 88
                            },
                            "While trying to update the implicit return value 'pedersen_ptr' in:"
                        ],
                        "start_col": 35,
                        "start_line": 13
                    }
                },
                "368": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 78,
                        "end_line": 13,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/_continue/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 40,
                                "end_line": 88,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 78,
                                        "end_line": 13,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/target/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 34,
                                                "end_line": 89,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 21,
                                                "start_line": 89
                                            },
                                            "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                        ],
                                        "start_col": 63,
                                        "start_line": 13
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 24,
                                "start_line": 88
                            },
                            "While trying to update the implicit return value 'range_check_ptr' in:"
                        ],
                        "start_col": 63,
                        "start_line": 13
                    }
                },
                "369": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 34,
                        "end_line": 89,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 21,
                        "start_line": 89
                    }
                },
                "371": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 33,
                        "end_line": 13,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 34,
                                "end_line": 89,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 45,
                                        "end_line": 270,
                                        "input_file": {
                                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 58,
                                                "end_line": 90,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 36,
                                                "start_line": 90
                                            },
                                            "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                        ],
                                        "start_col": 27,
                                        "start_line": 270
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 21,
                                "start_line": 89
                            },
                            "While trying to update the implicit return value 'syscall_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 13
                    }
                },
                "372": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 58,
                        "end_line": 90,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 36,
                        "start_line": 90
                    }
                },
                "374": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 45,
                        "end_line": 270,
                        "input_file": {
                            "filename": "/Users/jonathan.giamporcaro/workspace/venvs/cairo_venv_0-10/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 58,
                                "end_line": 90,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 30,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/d308ac6fd7d3ff633fc0c3917e7ab82b4b2bcfc481b2dfc124904e88ec8ce8d6.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 15,
                                                "end_line": 12,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 57,
                                                        "end_line": 93,
                                                        "input_file": {
                                                            "filename": "reetrancy.cairo"
                                                        },
                                                        "start_col": 5,
                                                        "start_line": 93
                                                    },
                                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                                ],
                                                "start_col": 10,
                                                "start_line": 12
                                            },
                                            "While handling contract interface function:"
                                        ],
                                        "start_col": 12,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 36,
                                "start_line": 90
                            },
                            "While trying to update the implicit return value 'syscall_ptr' in:"
                        ],
                        "start_col": 27,
                        "start_line": 270
                    }
                },
                "375": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 78,
                        "end_line": 13,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 34,
                                "end_line": 89,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 47,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/d308ac6fd7d3ff633fc0c3917e7ab82b4b2bcfc481b2dfc124904e88ec8ce8d6.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 15,
                                                "end_line": 12,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 57,
                                                        "end_line": 93,
                                                        "input_file": {
                                                            "filename": "reetrancy.cairo"
                                                        },
                                                        "start_col": 5,
                                                        "start_line": 93
                                                    },
                                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                                ],
                                                "start_col": 10,
                                                "start_line": 12
                                            },
                                            "While handling contract interface function:"
                                        ],
                                        "start_col": 32,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 21,
                                "start_line": 89
                            },
                            "While trying to update the implicit return value 'range_check_ptr' in:"
                        ],
                        "start_col": 63,
                        "start_line": 13
                    }
                },
                "376": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 17,
                        "end_line": 89,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 47,
                                "end_line": 93,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 40,
                                "start_line": 93
                            },
                            "While expanding the reference '_target' in:"
                        ],
                        "start_col": 10,
                        "start_line": 89
                    }
                },
                "377": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 15,
                        "end_line": 87,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 56,
                                "end_line": 93,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 51,
                                "start_line": 93
                            },
                            "While expanding the reference '_user' in:"
                        ],
                        "start_col": 10,
                        "start_line": 87
                    }
                },
                "378": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 57,
                        "end_line": 93,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 5,
                        "start_line": 93
                    }
                },
                "380": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 30,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/d308ac6fd7d3ff633fc0c3917e7ab82b4b2bcfc481b2dfc124904e88ec8ce8d6.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 15,
                                "end_line": 12,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 57,
                                        "end_line": 93,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 33,
                                                "end_line": 13,
                                                "input_file": {
                                                    "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 36,
                                                        "end_line": 95,
                                                        "input_file": {
                                                            "filename": "reetrancy.cairo"
                                                        },
                                                        "start_col": 25,
                                                        "start_line": 95
                                                    },
                                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                                ],
                                                "start_col": 15,
                                                "start_line": 13
                                            },
                                            "While expanding the reference 'syscall_ptr' in:"
                                        ],
                                        "start_col": 5,
                                        "start_line": 93
                                    },
                                    "While trying to update the implicit return value 'syscall_ptr' in:"
                                ],
                                "start_col": 10,
                                "start_line": 12
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 12,
                        "start_line": 1
                    }
                },
                "381": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 61,
                        "end_line": 13,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/target/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 34,
                                "end_line": 89,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 61,
                                        "end_line": 13,
                                        "input_file": {
                                            "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 36,
                                                "end_line": 95,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 25,
                                                "start_line": 95
                                            },
                                            "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                        ],
                                        "start_col": 35,
                                        "start_line": 13
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 21,
                                "start_line": 89
                            },
                            "While trying to update the implicit return value 'pedersen_ptr' in:"
                        ],
                        "start_col": 35,
                        "start_line": 13
                    }
                },
                "382": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 47,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/IClaimAPunk/claim/d308ac6fd7d3ff633fc0c3917e7ab82b4b2bcfc481b2dfc124904e88ec8ce8d6.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 15,
                                "end_line": 12,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 57,
                                        "end_line": 93,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 78,
                                                "end_line": 13,
                                                "input_file": {
                                                    "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 36,
                                                        "end_line": 95,
                                                        "input_file": {
                                                            "filename": "reetrancy.cairo"
                                                        },
                                                        "start_col": 25,
                                                        "start_line": 95
                                                    },
                                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                                ],
                                                "start_col": 63,
                                                "start_line": 13
                                            },
                                            "While expanding the reference 'range_check_ptr' in:"
                                        ],
                                        "start_col": 5,
                                        "start_line": 93
                                    },
                                    "While trying to update the implicit return value 'range_check_ptr' in:"
                                ],
                                "start_col": 10,
                                "start_line": 12
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 32,
                        "start_line": 1
                    }
                },
                "383": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 36,
                        "end_line": 95,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 25,
                        "start_line": 95
                    }
                },
                "385": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 33,
                        "end_line": 13,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 36,
                                "end_line": 95,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 37,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/contract_interface/I721/transferFrom/f8c7980cd46ed6d764c999318b5692736b724dc08c1bf96e92d1b77ddf37af10.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 18,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 106,
                                                        "end_line": 98,
                                                        "input_file": {
                                                            "filename": "reetrancy.cairo"
                                                        },
                                                        "start_col": 5,
                                                        "start_line": 98
                                                    },
                                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                                ],
                                                "start_col": 10,
                                                "start_line": 18
                                            },
                                            "While handling contract interface function:"
                                        ],
                                        "start_col": 19,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 25,
                                "start_line": 95
                            },
                            "While trying to update the implicit return value 'syscall_ptr' in:"
                        ],
                        "start_col": 15,
                        "start_line": 13
                    }
                },
                "386": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 78,
                        "end_line": 13,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 36,
                                "end_line": 95,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 54,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/contract_interface/I721/transferFrom/f8c7980cd46ed6d764c999318b5692736b724dc08c1bf96e92d1b77ddf37af10.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 18,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 106,
                                                        "end_line": 98,
                                                        "input_file": {
                                                            "filename": "reetrancy.cairo"
                                                        },
                                                        "start_col": 5,
                                                        "start_line": 98
                                                    },
                                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                                ],
                                                "start_col": 10,
                                                "start_line": 18
                                            },
                                            "While handling contract interface function:"
                                        ],
                                        "start_col": 39,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 25,
                                "start_line": 95
                            },
                            "While trying to update the implicit return value 'range_check_ptr' in:"
                        ],
                        "start_col": 63,
                        "start_line": 13
                    }
                },
                "387": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 21,
                        "end_line": 95,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 51,
                                "end_line": 98,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 40,
                                "start_line": 98
                            },
                            "While expanding the reference 'addressPunk' in:"
                        ],
                        "start_col": 10,
                        "start_line": 95
                    }
                },
                "388": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 32,
                        "end_line": 90,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 80,
                                "end_line": 98,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 58,
                                "start_line": 98
                            },
                            "While expanding the reference 'currentContractAddress' in:"
                        ],
                        "start_col": 10,
                        "start_line": 90
                    }
                },
                "389": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 15,
                        "end_line": 87,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 89,
                                "end_line": 98,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 84,
                                "start_line": 98
                            },
                            "While expanding the reference '_user' in:"
                        ],
                        "start_col": 10,
                        "start_line": 87
                    }
                },
                "390": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 54,
                        "end_line": 75,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 105,
                                "end_line": 98,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 98,
                                "start_line": 98
                            },
                            "While expanding the reference 'tokenId' in:"
                        ],
                        "start_col": 38,
                        "start_line": 75
                    }
                },
                "391": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 54,
                        "end_line": 75,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 105,
                                "end_line": 98,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 98,
                                "start_line": 98
                            },
                            "While expanding the reference 'tokenId' in:"
                        ],
                        "start_col": 38,
                        "start_line": 75
                    }
                },
                "392": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 106,
                        "end_line": 98,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 5,
                        "start_line": 98
                    }
                },
                "394": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 37,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/I721/transferFrom/f8c7980cd46ed6d764c999318b5692736b724dc08c1bf96e92d1b77ddf37af10.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 18,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 106,
                                        "end_line": 98,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 41,
                                                "end_line": 74,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 43,
                                                        "end_line": 100,
                                                        "input_file": {
                                                            "filename": "reetrancy.cairo"
                                                        },
                                                        "start_col": 5,
                                                        "start_line": 100
                                                    },
                                                    "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                                                ],
                                                "start_col": 23,
                                                "start_line": 74
                                            },
                                            "While expanding the reference 'syscall_ptr' in:"
                                        ],
                                        "start_col": 5,
                                        "start_line": 98
                                    },
                                    "While trying to update the implicit return value 'syscall_ptr' in:"
                                ],
                                "start_col": 10,
                                "start_line": 18
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 19,
                        "start_line": 1
                    }
                },
                "395": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 61,
                        "end_line": 13,
                        "input_file": {
                            "filename": "autogen/starknet/storage_var/punk/decl.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 36,
                                "end_line": 95,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 69,
                                        "end_line": 74,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 43,
                                                "end_line": 100,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 5,
                                                "start_line": 100
                                            },
                                            "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                                        ],
                                        "start_col": 43,
                                        "start_line": 74
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 25,
                                "start_line": 95
                            },
                            "While trying to update the implicit return value 'pedersen_ptr' in:"
                        ],
                        "start_col": 35,
                        "start_line": 13
                    }
                },
                "396": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 54,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/contract_interface/I721/transferFrom/f8c7980cd46ed6d764c999318b5692736b724dc08c1bf96e92d1b77ddf37af10.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 18,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 106,
                                        "end_line": 98,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 86,
                                                "end_line": 74,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 43,
                                                        "end_line": 100,
                                                        "input_file": {
                                                            "filename": "reetrancy.cairo"
                                                        },
                                                        "start_col": 5,
                                                        "start_line": 100
                                                    },
                                                    "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                                                ],
                                                "start_col": 71,
                                                "start_line": 74
                                            },
                                            "While expanding the reference 'range_check_ptr' in:"
                                        ],
                                        "start_col": 5,
                                        "start_line": 98
                                    },
                                    "While trying to update the implicit return value 'range_check_ptr' in:"
                                ],
                                "start_col": 10,
                                "start_line": 18
                            },
                            "While handling contract interface function:"
                        ],
                        "start_col": 39,
                        "start_line": 1
                    }
                },
                "397": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 41,
                        "end_line": 100,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 22,
                        "start_line": 100
                    }
                },
                "399": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__main__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 43,
                        "end_line": 100,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 5,
                        "start_line": 100
                    }
                },
                "400": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received_encode_return"
                    ],
                    "flow_tracking_data": null,
                    "hints": [
                        {
                            "location": {
                                "end_col": 38,
                                "end_line": 3,
                                "input_file": {
                                    "filename": "autogen/starknet/external/return/onERC721Received/748438f4ddd6f3fe6d8ef0cd8a4cde200527a2afc43648f40ea03f233f59909c.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 22,
                                        "end_line": 74,
                                        "input_file": {
                                            "filename": "reetrancy.cairo"
                                        },
                                        "start_col": 6,
                                        "start_line": 74
                                    },
                                    "While handling return value of"
                                ],
                                "start_col": 5,
                                "start_line": 3
                            },
                            "n_prefix_newlines": 0
                        }
                    ],
                    "inst": {
                        "end_col": 18,
                        "end_line": 4,
                        "input_file": {
                            "filename": "autogen/starknet/external/return/onERC721Received/748438f4ddd6f3fe6d8ef0cd8a4cde200527a2afc43648f40ea03f233f59909c.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 74,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 6,
                                "start_line": 74
                            },
                            "While handling return value of"
                        ],
                        "start_col": 5,
                        "start_line": 4
                    }
                },
                "402": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received_encode_return"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 50,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/11910489853ff455bdd52732af2e5eb2ae4e754e0865f4b448ae74c14a7f2cf7.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 25,
                                "end_line": 76,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 11,
                                "start_line": 76
                            },
                            "While handling return value 'selector'"
                        ],
                        "start_col": 1,
                        "start_line": 1
                    }
                },
                "403": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received_encode_return"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 48,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/11910489853ff455bdd52732af2e5eb2ae4e754e0865f4b448ae74c14a7f2cf7.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 25,
                                "end_line": 76,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 36,
                                        "end_line": 11,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/return/onERC721Received/748438f4ddd6f3fe6d8ef0cd8a4cde200527a2afc43648f40ea03f233f59909c.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 74,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 74
                                            },
                                            "While handling return value of"
                                        ],
                                        "start_col": 18,
                                        "start_line": 11
                                    },
                                    "While expanding the reference '__return_value_ptr' in:"
                                ],
                                "start_col": 11,
                                "start_line": 76
                            },
                            "While handling return value 'selector'"
                        ],
                        "start_col": 26,
                        "start_line": 2
                    }
                },
                "405": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received_encode_return"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 81,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/return/onERC721Received/748438f4ddd6f3fe6d8ef0cd8a4cde200527a2afc43648f40ea03f233f59909c.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 74,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 40,
                                        "end_line": 10,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/return/onERC721Received/748438f4ddd6f3fe6d8ef0cd8a4cde200527a2afc43648f40ea03f233f59909c.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 74,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 74
                                            },
                                            "While handling return value of"
                                        ],
                                        "start_col": 25,
                                        "start_line": 10
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 6,
                                "start_line": 74
                            },
                            "While handling return value of"
                        ],
                        "start_col": 66,
                        "start_line": 1
                    }
                },
                "406": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received_encode_return"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 63,
                        "end_line": 11,
                        "input_file": {
                            "filename": "autogen/starknet/external/return/onERC721Received/748438f4ddd6f3fe6d8ef0cd8a4cde200527a2afc43648f40ea03f233f59909c.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 74,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 6,
                                "start_line": 74
                            },
                            "While handling return value of"
                        ],
                        "start_col": 18,
                        "start_line": 11
                    }
                },
                "407": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received_encode_return"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 35,
                        "end_line": 5,
                        "input_file": {
                            "filename": "autogen/starknet/external/return/onERC721Received/748438f4ddd6f3fe6d8ef0cd8a4cde200527a2afc43648f40ea03f233f59909c.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 74,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 38,
                                        "end_line": 12,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/return/onERC721Received/748438f4ddd6f3fe6d8ef0cd8a4cde200527a2afc43648f40ea03f233f59909c.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 74,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 74
                                            },
                                            "While handling return value of"
                                        ],
                                        "start_col": 14,
                                        "start_line": 12
                                    },
                                    "While expanding the reference '__return_value_ptr_start' in:"
                                ],
                                "start_col": 6,
                                "start_line": 74
                            },
                            "While handling return value of"
                        ],
                        "start_col": 11,
                        "start_line": 5
                    }
                },
                "408": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received_encode_return"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 40,
                        "end_line": 12,
                        "input_file": {
                            "filename": "autogen/starknet/external/return/onERC721Received/748438f4ddd6f3fe6d8ef0cd8a4cde200527a2afc43648f40ea03f233f59909c.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 74,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 6,
                                "start_line": 74
                            },
                            "While handling return value of"
                        ],
                        "start_col": 5,
                        "start_line": 9
                    }
                },
                "409": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 67,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/onERC721Received/741ea357d6336b0bed7bf0472425acd0311d543883b803388880e60a232040c7.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 86,
                                "end_line": 74,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 24,
                                        "end_line": 2,
                                        "input_file": {
                                            "filename": "autogen/starknet/arg_processor/e0af26f9fbe513562e2133164d694cbff092c47bbb4efa182711421f0c0cc5d3.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 83,
                                                "end_line": 75,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 72,
                                                "start_line": 75
                                            },
                                            "While handling calldata argument 'data'"
                                        ],
                                        "start_col": 9,
                                        "start_line": 2
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 71,
                                "start_line": 74
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 23,
                        "start_line": 1
                    }
                },
                "410": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 47,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/4f1f3aa0a6fec21a155d7e953cd34daa7ca48450bbb80f627eb4f8df9f25922a.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 70,
                                "end_line": 75,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 51,
                                        "end_line": 2,
                                        "input_file": {
                                            "filename": "autogen/starknet/arg_processor/e0af26f9fbe513562e2133164d694cbff092c47bbb4efa182711421f0c0cc5d3.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 83,
                                                "end_line": 75,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 72,
                                                "start_line": 75
                                            },
                                            "While handling calldata argument 'data'"
                                        ],
                                        "start_col": 28,
                                        "start_line": 2
                                    },
                                    "While expanding the reference '__calldata_arg_data_len' in:"
                                ],
                                "start_col": 56,
                                "start_line": 75
                            },
                            "While handling calldata argument 'data_len'"
                        ],
                        "start_col": 31,
                        "start_line": 1
                    }
                },
                "411": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 52,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/e0af26f9fbe513562e2133164d694cbff092c47bbb4efa182711421f0c0cc5d3.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 83,
                                "end_line": 75,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 72,
                                "start_line": 75
                            },
                            "While handling calldata argument 'data'"
                        ],
                        "start_col": 1,
                        "start_line": 2
                    }
                },
                "412": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 40,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/4f1f3aa0a6fec21a155d7e953cd34daa7ca48450bbb80f627eb4f8df9f25922a.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 70,
                                "end_line": 75,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 40,
                                        "end_line": 8,
                                        "input_file": {
                                            "filename": "autogen/starknet/arg_processor/e0af26f9fbe513562e2133164d694cbff092c47bbb4efa182711421f0c0cc5d3.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 83,
                                                "end_line": 75,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 72,
                                                "start_line": 75
                                            },
                                            "While handling calldata argument 'data'"
                                        ],
                                        "start_col": 26,
                                        "start_line": 8
                                    },
                                    "While expanding the reference '__calldata_ptr' in:"
                                ],
                                "start_col": 56,
                                "start_line": 75
                            },
                            "While handling calldata argument 'data_len'"
                        ],
                        "start_col": 22,
                        "start_line": 2
                    }
                },
                "414": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 47,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/4f1f3aa0a6fec21a155d7e953cd34daa7ca48450bbb80f627eb4f8df9f25922a.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 70,
                                "end_line": 75,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 66,
                                        "end_line": 8,
                                        "input_file": {
                                            "filename": "autogen/starknet/arg_processor/e0af26f9fbe513562e2133164d694cbff092c47bbb4efa182711421f0c0cc5d3.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 83,
                                                "end_line": 75,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 72,
                                                "start_line": 75
                                            },
                                            "While handling calldata argument 'data'"
                                        ],
                                        "start_col": 43,
                                        "start_line": 8
                                    },
                                    "While expanding the reference '__calldata_arg_data_len' in:"
                                ],
                                "start_col": 56,
                                "start_line": 75
                            },
                            "While handling calldata argument 'data_len'"
                        ],
                        "start_col": 31,
                        "start_line": 1
                    }
                },
                "415": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 70,
                        "end_line": 8,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/e0af26f9fbe513562e2133164d694cbff092c47bbb4efa182711421f0c0cc5d3.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 83,
                                "end_line": 75,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 72,
                                "start_line": 75
                            },
                            "While handling calldata argument 'data'"
                        ],
                        "start_col": 26,
                        "start_line": 8
                    }
                },
                "416": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 58,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/01cba52f8515996bb9d7070bde81ff39281d096d7024a558efcba6e1fd2402cf.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 74,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 6,
                                "start_line": 74
                            },
                            "While handling calldata of"
                        ],
                        "start_col": 1,
                        "start_line": 1
                    }
                },
                "417": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 67,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/onERC721Received/741ea357d6336b0bed7bf0472425acd0311d543883b803388880e60a232040c7.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 86,
                                "end_line": 74,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 38,
                                        "end_line": 3,
                                        "input_file": {
                                            "filename": "autogen/starknet/arg_processor/e0af26f9fbe513562e2133164d694cbff092c47bbb4efa182711421f0c0cc5d3.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 83,
                                                "end_line": 75,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "parent_location": [
                                                    {
                                                        "end_col": 115,
                                                        "end_line": 1,
                                                        "input_file": {
                                                            "filename": "autogen/starknet/external/onERC721Received/38f14e54dbee54a8249b8cab1b07345d8a7d9b5814e51ef0364fb71b9dd4c67a.cairo"
                                                        },
                                                        "parent_location": [
                                                            {
                                                                "end_col": 22,
                                                                "end_line": 74,
                                                                "input_file": {
                                                                    "filename": "reetrancy.cairo"
                                                                },
                                                                "start_col": 6,
                                                                "start_line": 74
                                                            },
                                                            "While constructing the external wrapper for:"
                                                        ],
                                                        "start_col": 100,
                                                        "start_line": 1
                                                    },
                                                    "While expanding the reference 'range_check_ptr' in:"
                                                ],
                                                "start_col": 72,
                                                "start_line": 75
                                            },
                                            "While handling calldata argument 'data'"
                                        ],
                                        "start_col": 23,
                                        "start_line": 3
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 71,
                                "start_line": 74
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 23,
                        "start_line": 1
                    }
                },
                "418": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 64,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/onERC721Received/b2c52ca2d2a8fc8791a983086d8716c5eacd0c3d62934914d2286f84b98ff4cb.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 41,
                                "end_line": 74,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 55,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/onERC721Received/38f14e54dbee54a8249b8cab1b07345d8a7d9b5814e51ef0364fb71b9dd4c67a.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 74,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 74
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 44,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 23,
                                "start_line": 74
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 19,
                        "start_line": 1
                    }
                },
                "419": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 110,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/onERC721Received/9684a85e93c782014ca14293edea4eb2502039a5a7b6538ecd39c56faaf12529.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 69,
                                "end_line": 74,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 82,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/onERC721Received/38f14e54dbee54a8249b8cab1b07345d8a7d9b5814e51ef0364fb71b9dd4c67a.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 74,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 74
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 70,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 43,
                                "start_line": 74
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 20,
                        "start_line": 1
                    }
                },
                "420": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 42,
                        "end_line": 3,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/e0af26f9fbe513562e2133164d694cbff092c47bbb4efa182711421f0c0cc5d3.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 83,
                                "end_line": 75,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 115,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/onERC721Received/38f14e54dbee54a8249b8cab1b07345d8a7d9b5814e51ef0364fb71b9dd4c67a.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 74,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 74
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 100,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 72,
                                "start_line": 75
                            },
                            "While handling calldata argument 'data'"
                        ],
                        "start_col": 23,
                        "start_line": 3
                    }
                },
                "422": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 47,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/c28d01f4036658535ed1f26a855ca481100f6b9fa5c266733e27ba2dce390d91.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 23,
                                "end_line": 75,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 149,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/onERC721Received/38f14e54dbee54a8249b8cab1b07345d8a7d9b5814e51ef0364fb71b9dd4c67a.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 74,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 74
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 126,
                                        "start_line": 1
                                    },
                                    "While expanding the reference '__calldata_arg_operator' in:"
                                ],
                                "start_col": 9,
                                "start_line": 75
                            },
                            "While handling calldata argument 'operator'"
                        ],
                        "start_col": 31,
                        "start_line": 1
                    }
                },
                "423": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 44,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/df39236eab78c921af48d719316dc25209f5ba97dc94936a936f353a674f3486.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 36,
                                "end_line": 75,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 177,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/onERC721Received/38f14e54dbee54a8249b8cab1b07345d8a7d9b5814e51ef0364fb71b9dd4c67a.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 74,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 74
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 157,
                                        "start_line": 1
                                    },
                                    "While expanding the reference '__calldata_arg_from_' in:"
                                ],
                                "start_col": 25,
                                "start_line": 75
                            },
                            "While handling calldata argument 'from_'"
                        ],
                        "start_col": 28,
                        "start_line": 1
                    }
                },
                "424": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 67,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/60c79ef5477686f2843e61432dcde7f4fc0f354d42095115ea9dca625a35df6e.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 54,
                                "end_line": 75,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 209,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/onERC721Received/38f14e54dbee54a8249b8cab1b07345d8a7d9b5814e51ef0364fb71b9dd4c67a.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 74,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 74
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 187,
                                        "start_line": 1
                                    },
                                    "While expanding the reference '__calldata_arg_tokenId' in:"
                                ],
                                "start_col": 38,
                                "start_line": 75
                            },
                            "While handling calldata argument 'tokenId'"
                        ],
                        "start_col": 30,
                        "start_line": 1
                    }
                },
                "425": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 67,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/60c79ef5477686f2843e61432dcde7f4fc0f354d42095115ea9dca625a35df6e.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 54,
                                "end_line": 75,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 209,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/onERC721Received/38f14e54dbee54a8249b8cab1b07345d8a7d9b5814e51ef0364fb71b9dd4c67a.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 74,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 74
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 187,
                                        "start_line": 1
                                    },
                                    "While expanding the reference '__calldata_arg_tokenId' in:"
                                ],
                                "start_col": 38,
                                "start_line": 75
                            },
                            "While handling calldata argument 'tokenId'"
                        ],
                        "start_col": 30,
                        "start_line": 1
                    }
                },
                "426": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 47,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/4f1f3aa0a6fec21a155d7e953cd34daa7ca48450bbb80f627eb4f8df9f25922a.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 70,
                                "end_line": 75,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 243,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/onERC721Received/38f14e54dbee54a8249b8cab1b07345d8a7d9b5814e51ef0364fb71b9dd4c67a.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 74,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 74
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 220,
                                        "start_line": 1
                                    },
                                    "While expanding the reference '__calldata_arg_data_len' in:"
                                ],
                                "start_col": 56,
                                "start_line": 75
                            },
                            "While handling calldata argument 'data_len'"
                        ],
                        "start_col": 31,
                        "start_line": 1
                    }
                },
                "427": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 54,
                        "end_line": 5,
                        "input_file": {
                            "filename": "autogen/starknet/arg_processor/e0af26f9fbe513562e2133164d694cbff092c47bbb4efa182711421f0c0cc5d3.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 83,
                                "end_line": 75,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 269,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/onERC721Received/38f14e54dbee54a8249b8cab1b07345d8a7d9b5814e51ef0364fb71b9dd4c67a.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 74,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 74
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 250,
                                        "start_line": 1
                                    },
                                    "While expanding the reference '__calldata_arg_data' in:"
                                ],
                                "start_col": 72,
                                "start_line": 75
                            },
                            "While handling calldata argument 'data'"
                        ],
                        "start_col": 27,
                        "start_line": 5
                    }
                },
                "429": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 22,
                        "end_line": 74,
                        "input_file": {
                            "filename": "reetrancy.cairo"
                        },
                        "start_col": 6,
                        "start_line": 74
                    }
                },
                "431": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 115,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/onERC721Received/38f14e54dbee54a8249b8cab1b07345d8a7d9b5814e51ef0364fb71b9dd4c67a.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 74,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 105,
                                        "end_line": 2,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/onERC721Received/38f14e54dbee54a8249b8cab1b07345d8a7d9b5814e51ef0364fb71b9dd4c67a.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 74,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 74
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 90,
                                        "start_line": 2
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 6,
                                "start_line": 74
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 100,
                        "start_line": 1
                    }
                },
                "432": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 106,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/external/onERC721Received/38f14e54dbee54a8249b8cab1b07345d8a7d9b5814e51ef0364fb71b9dd4c67a.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 74,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 6,
                                "start_line": 74
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 48,
                        "start_line": 2
                    }
                },
                "434": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 55,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/onERC721Received/38f14e54dbee54a8249b8cab1b07345d8a7d9b5814e51ef0364fb71b9dd4c67a.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 74,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 20,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/onERC721Received/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 74,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 74
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 9,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'syscall_ptr' in:"
                                ],
                                "start_col": 6,
                                "start_line": 74
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 44,
                        "start_line": 1
                    }
                },
                "435": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 82,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/onERC721Received/38f14e54dbee54a8249b8cab1b07345d8a7d9b5814e51ef0364fb71b9dd4c67a.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 74,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 33,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/onERC721Received/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 74,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 74
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 21,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'pedersen_ptr' in:"
                                ],
                                "start_col": 6,
                                "start_line": 74
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 70,
                        "start_line": 1
                    }
                },
                "436": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 21,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/external/onERC721Received/38f14e54dbee54a8249b8cab1b07345d8a7d9b5814e51ef0364fb71b9dd4c67a.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 74,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 49,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/onERC721Received/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 74,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 74
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 34,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'range_check_ptr' in:"
                                ],
                                "start_col": 6,
                                "start_line": 74
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 6,
                        "start_line": 2
                    }
                },
                "437": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 35,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/external/onERC721Received/38f14e54dbee54a8249b8cab1b07345d8a7d9b5814e51ef0364fb71b9dd4c67a.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 74,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 62,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/onERC721Received/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 74,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 74
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 50,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'retdata_size' in:"
                                ],
                                "start_col": 6,
                                "start_line": 74
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 23,
                        "start_line": 2
                    }
                },
                "438": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 44,
                        "end_line": 2,
                        "input_file": {
                            "filename": "autogen/starknet/external/onERC721Received/38f14e54dbee54a8249b8cab1b07345d8a7d9b5814e51ef0364fb71b9dd4c67a.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 74,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "parent_location": [
                                    {
                                        "end_col": 70,
                                        "end_line": 1,
                                        "input_file": {
                                            "filename": "autogen/starknet/external/onERC721Received/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo"
                                        },
                                        "parent_location": [
                                            {
                                                "end_col": 22,
                                                "end_line": 74,
                                                "input_file": {
                                                    "filename": "reetrancy.cairo"
                                                },
                                                "start_col": 6,
                                                "start_line": 74
                                            },
                                            "While constructing the external wrapper for:"
                                        ],
                                        "start_col": 63,
                                        "start_line": 1
                                    },
                                    "While expanding the reference 'retdata' in:"
                                ],
                                "start_col": 6,
                                "start_line": 74
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 37,
                        "start_line": 2
                    }
                },
                "439": {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received"
                    ],
                    "flow_tracking_data": null,
                    "hints": [],
                    "inst": {
                        "end_col": 72,
                        "end_line": 1,
                        "input_file": {
                            "filename": "autogen/starknet/external/onERC721Received/da17921a4e81c09e730800bbf23bfdbe5e9e6bfaedc59d80fbf62087fa43c27d.cairo"
                        },
                        "parent_location": [
                            {
                                "end_col": 22,
                                "end_line": 74,
                                "input_file": {
                                    "filename": "reetrancy.cairo"
                                },
                                "start_col": 6,
                                "start_line": 74
                            },
                            "While constructing the external wrapper for:"
                        ],
                        "start_col": 1,
                        "start_line": 1
                    }
                }
            }
        },
        "hints": {
            "0": [
                {
                    "accessible_scopes": [
                        "starkware.cairo.common.alloc",
                        "starkware.cairo.common.alloc.alloc"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 0,
                            "offset": 0
                        },
                        "reference_ids": {}
                    }
                }
            ],
            "3": [
                {
                    "accessible_scopes": [
                        "starkware.cairo.common.math",
                        "starkware.cairo.common.math.assert_not_zero"
                    ],
                    "code": "from starkware.cairo.common.math_utils import assert_integer\nassert_integer(ids.value)\nassert ids.value % PRIME != 0, f'assert_not_zero failed: {ids.value} = 0.'",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 1,
                            "offset": 0
                        },
                        "reference_ids": {
                            "starkware.cairo.common.math.assert_not_zero.value": 0
                        }
                    }
                }
            ],
            "15": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.call_contract"
                    ],
                    "code": "syscall_handler.call_contract(segments=segments, syscall_ptr=ids.syscall_ptr)",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 2,
                            "offset": 1
                        },
                        "reference_ids": {
                            "starkware.starknet.common.syscalls.call_contract.syscall_ptr": 1
                        }
                    }
                }
            ],
            "28": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.deploy"
                    ],
                    "code": "syscall_handler.deploy(segments=segments, syscall_ptr=ids.syscall_ptr)",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 3,
                            "offset": 1
                        },
                        "reference_ids": {
                            "starkware.starknet.common.syscalls.deploy.syscall_ptr": 2
                        }
                    }
                }
            ],
            "35": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.get_caller_address"
                    ],
                    "code": "syscall_handler.get_caller_address(segments=segments, syscall_ptr=ids.syscall_ptr)",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 4,
                            "offset": 1
                        },
                        "reference_ids": {
                            "starkware.starknet.common.syscalls.get_caller_address.syscall_ptr": 3
                        }
                    }
                }
            ],
            "42": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.get_contract_address"
                    ],
                    "code": "syscall_handler.get_contract_address(segments=segments, syscall_ptr=ids.syscall_ptr)",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 5,
                            "offset": 1
                        },
                        "reference_ids": {
                            "starkware.starknet.common.syscalls.get_contract_address.syscall_ptr": 4
                        }
                    }
                }
            ],
            "50": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.storage_read"
                    ],
                    "code": "syscall_handler.storage_read(segments=segments, syscall_ptr=ids.syscall_ptr)",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 6,
                            "offset": 1
                        },
                        "reference_ids": {
                            "starkware.starknet.common.syscalls.storage_read.syscall_ptr": 5
                        }
                    }
                }
            ],
            "59": [
                {
                    "accessible_scopes": [
                        "starkware.starknet.common.syscalls",
                        "starkware.starknet.common.syscalls.storage_write"
                    ],
                    "code": "syscall_handler.storage_write(segments=segments, syscall_ptr=ids.syscall_ptr)",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 7,
                            "offset": 1
                        },
                        "reference_ids": {
                            "starkware.starknet.common.syscalls.storage_write.syscall_ptr": 6
                        }
                    }
                }
            ],
            "69": [
                {
                    "accessible_scopes": [
                        "starkware.cairo.common.uint256",
                        "starkware.cairo.common.uint256.uint256_add"
                    ],
                    "code": "sum_low = ids.a.low + ids.b.low\nids.carry_low = 1 if sum_low >= ids.SHIFT else 0\nsum_high = ids.a.high + ids.b.high + ids.carry_low\nids.carry_high = 1 if sum_high >= ids.SHIFT else 0",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 9,
                            "offset": 4
                        },
                        "reference_ids": {
                            "starkware.cairo.common.uint256.uint256_add.a": 7,
                            "starkware.cairo.common.uint256.uint256_add.b": 8,
                            "starkware.cairo.common.uint256.uint256_add.carry_high": 10,
                            "starkware.cairo.common.uint256.uint256_add.carry_low": 9
                        }
                    }
                }
            ],
            "295": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.hack"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 25,
                            "offset": 124
                        },
                        "reference_ids": {}
                    }
                }
            ],
            "310": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.supportsInterface_encode_return"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 27,
                            "offset": 0
                        },
                        "reference_ids": {}
                    }
                }
            ],
            "400": [
                {
                    "accessible_scopes": [
                        "__main__",
                        "__main__",
                        "__wrappers__",
                        "__wrappers__.onERC721Received_encode_return"
                    ],
                    "code": "memory[ap] = segments.add()",
                    "flow_tracking_data": {
                        "ap_tracking": {
                            "group": 30,
                            "offset": 0
                        },
                        "reference_ids": {}
                    }
                }
            ]
        },
        "identifiers": {
            "__main__.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "__main__.I721": {
                "type": "namespace"
            },
            "__main__.I721.Args": {
                "full_name": "__main__.I721.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.I721.ImplicitArgs": {
                "full_name": "__main__.I721.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.I721.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.I721.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.I721.TRANSFERFROM_SELECTOR": {
                "type": "const",
                "value": 116061167288211781254449158074459916871457383008289084697957612485591092000
            },
            "__main__.I721.alloc": {
                "destination": "starkware.cairo.common.alloc.alloc",
                "type": "alias"
            },
            "__main__.I721.call_contract": {
                "destination": "starkware.starknet.common.syscalls.call_contract",
                "type": "alias"
            },
            "__main__.I721.library_call": {
                "destination": "starkware.starknet.common.syscalls.library_call",
                "type": "alias"
            },
            "__main__.I721.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__main__.I721.transferFrom": {
                "decorators": [],
                "pc": 108,
                "type": "function"
            },
            "__main__.I721.transferFrom.Args": {
                "full_name": "__main__.I721.transferFrom.Args",
                "members": {
                    "contract_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "from_": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "to": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "tokenId": {
                        "cairo_type": "starkware.cairo.common.uint256.Uint256",
                        "offset": 3
                    }
                },
                "size": 5,
                "type": "struct"
            },
            "__main__.I721.transferFrom.ImplicitArgs": {
                "full_name": "__main__.I721.transferFrom.ImplicitArgs",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.I721.transferFrom.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.I721.transferFrom.SIZEOF_LOCALS": {
                "type": "const",
                "value": 1
            },
            "__main__.IClaimAPunk": {
                "type": "namespace"
            },
            "__main__.IClaimAPunk.Args": {
                "full_name": "__main__.IClaimAPunk.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.IClaimAPunk.CLAIM_SELECTOR": {
                "type": "const",
                "value": 323941825463020211252781080720490861905751490209587316351695433661350998802
            },
            "__main__.IClaimAPunk.ImplicitArgs": {
                "full_name": "__main__.IClaimAPunk.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.IClaimAPunk.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.IClaimAPunk.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.IClaimAPunk.alloc": {
                "destination": "starkware.cairo.common.alloc.alloc",
                "type": "alias"
            },
            "__main__.IClaimAPunk.call_contract": {
                "destination": "starkware.starknet.common.syscalls.call_contract",
                "type": "alias"
            },
            "__main__.IClaimAPunk.claim": {
                "decorators": [],
                "pc": 89,
                "type": "function"
            },
            "__main__.IClaimAPunk.claim.Args": {
                "full_name": "__main__.IClaimAPunk.claim.Args",
                "members": {
                    "contract_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "to": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.IClaimAPunk.claim.ImplicitArgs": {
                "full_name": "__main__.IClaimAPunk.claim.ImplicitArgs",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.IClaimAPunk.claim.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.IClaimAPunk.claim.SIZEOF_LOCALS": {
                "type": "const",
                "value": 1
            },
            "__main__.IClaimAPunk.library_call": {
                "destination": "starkware.starknet.common.syscalls.library_call",
                "type": "alias"
            },
            "__main__.IClaimAPunk.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__main__.IERC721_RECEIVER_ID": {
                "destination": "openzeppelin.utils.constants.library.IERC721_RECEIVER_ID",
                "type": "alias"
            },
            "__main__.Uint256": {
                "destination": "starkware.cairo.common.uint256.Uint256",
                "type": "alias"
            },
            "__main__._continue": {
                "type": "namespace"
            },
            "__main__._continue.Args": {
                "full_name": "__main__._continue.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__._continue.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "__main__._continue.ImplicitArgs": {
                "full_name": "__main__._continue.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__._continue.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__._continue.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__._continue.addr": {
                "decorators": [],
                "pc": 130,
                "type": "function"
            },
            "__main__._continue.addr.Args": {
                "full_name": "__main__._continue.addr.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__._continue.addr.ImplicitArgs": {
                "full_name": "__main__._continue.addr.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 0
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__._continue.addr.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__._continue.addr.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__._continue.hash2": {
                "destination": "starkware.cairo.common.hash.hash2",
                "type": "alias"
            },
            "__main__._continue.normalize_address": {
                "destination": "starkware.starknet.common.storage.normalize_address",
                "type": "alias"
            },
            "__main__._continue.read": {
                "decorators": [],
                "pc": 135,
                "type": "function"
            },
            "__main__._continue.read.Args": {
                "full_name": "__main__._continue.read.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__._continue.read.ImplicitArgs": {
                "full_name": "__main__._continue.read.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__._continue.read.Return": {
                "cairo_type": "(stop: felt)",
                "type": "type_definition"
            },
            "__main__._continue.read.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__._continue.storage_read": {
                "destination": "starkware.starknet.common.syscalls.storage_read",
                "type": "alias"
            },
            "__main__._continue.storage_write": {
                "destination": "starkware.starknet.common.syscalls.storage_write",
                "type": "alias"
            },
            "__main__._continue.write": {
                "decorators": [],
                "pc": 148,
                "type": "function"
            },
            "__main__._continue.write.Args": {
                "full_name": "__main__._continue.write.Args",
                "members": {
                    "value": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "__main__._continue.write.ImplicitArgs": {
                "full_name": "__main__._continue.write.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__._continue.write.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__._continue.write.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.assert_not_zero": {
                "destination": "starkware.cairo.common.math.assert_not_zero",
                "type": "alias"
            },
            "__main__.deploy": {
                "destination": "starkware.starknet.common.syscalls.deploy",
                "type": "alias"
            },
            "__main__.get_caller_address": {
                "destination": "starkware.starknet.common.syscalls.get_caller_address",
                "type": "alias"
            },
            "__main__.get_contract_address": {
                "destination": "starkware.starknet.common.syscalls.get_contract_address",
                "type": "alias"
            },
            "__main__.hack": {
                "decorators": [
                    "external"
                ],
                "pc": 250,
                "type": "function"
            },
            "__main__.hack.Args": {
                "full_name": "__main__.hack.Args",
                "members": {
                    "addressContract": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "addressPunk": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "addressUser": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.hack.ImplicitArgs": {
                "full_name": "__main__.hack.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.hack.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.hack.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.onERC721Received": {
                "decorators": [
                    "external"
                ],
                "pc": 337,
                "type": "function"
            },
            "__main__.onERC721Received.Args": {
                "full_name": "__main__.onERC721Received.Args",
                "members": {
                    "data": {
                        "cairo_type": "felt*",
                        "offset": 5
                    },
                    "data_len": {
                        "cairo_type": "felt",
                        "offset": 4
                    },
                    "from_": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "operator": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "tokenId": {
                        "cairo_type": "starkware.cairo.common.uint256.Uint256",
                        "offset": 2
                    }
                },
                "size": 6,
                "type": "struct"
            },
            "__main__.onERC721Received.ImplicitArgs": {
                "full_name": "__main__.onERC721Received.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.onERC721Received.Return": {
                "cairo_type": "(selector: felt)",
                "type": "type_definition"
            },
            "__main__.onERC721Received.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.punk": {
                "type": "namespace"
            },
            "__main__.punk.Args": {
                "full_name": "__main__.punk.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.punk.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "__main__.punk.ImplicitArgs": {
                "full_name": "__main__.punk.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.punk.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.punk.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.punk.addr": {
                "decorators": [],
                "pc": 220,
                "type": "function"
            },
            "__main__.punk.addr.Args": {
                "full_name": "__main__.punk.addr.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.punk.addr.ImplicitArgs": {
                "full_name": "__main__.punk.addr.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 0
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.punk.addr.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.punk.addr.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.punk.hash2": {
                "destination": "starkware.cairo.common.hash.hash2",
                "type": "alias"
            },
            "__main__.punk.normalize_address": {
                "destination": "starkware.starknet.common.storage.normalize_address",
                "type": "alias"
            },
            "__main__.punk.read": {
                "decorators": [],
                "pc": 225,
                "type": "function"
            },
            "__main__.punk.read.Args": {
                "full_name": "__main__.punk.read.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.punk.read.ImplicitArgs": {
                "full_name": "__main__.punk.read.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.punk.read.Return": {
                "cairo_type": "(address: felt)",
                "type": "type_definition"
            },
            "__main__.punk.read.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.punk.storage_read": {
                "destination": "starkware.starknet.common.syscalls.storage_read",
                "type": "alias"
            },
            "__main__.punk.storage_write": {
                "destination": "starkware.starknet.common.syscalls.storage_write",
                "type": "alias"
            },
            "__main__.punk.write": {
                "decorators": [],
                "pc": 238,
                "type": "function"
            },
            "__main__.punk.write.Args": {
                "full_name": "__main__.punk.write.Args",
                "members": {
                    "value": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "__main__.punk.write.ImplicitArgs": {
                "full_name": "__main__.punk.write.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.punk.write.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.punk.write.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.supportsInterface": {
                "decorators": [
                    "view"
                ],
                "pc": 304,
                "type": "function"
            },
            "__main__.supportsInterface.Args": {
                "full_name": "__main__.supportsInterface.Args",
                "members": {
                    "interfaceId": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "__main__.supportsInterface.ImplicitArgs": {
                "full_name": "__main__.supportsInterface.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.supportsInterface.Return": {
                "cairo_type": "(success: felt)",
                "type": "type_definition"
            },
            "__main__.supportsInterface.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.target": {
                "type": "namespace"
            },
            "__main__.target.Args": {
                "full_name": "__main__.target.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.target.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "__main__.target.ImplicitArgs": {
                "full_name": "__main__.target.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.target.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.target.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.target.addr": {
                "decorators": [],
                "pc": 190,
                "type": "function"
            },
            "__main__.target.addr.Args": {
                "full_name": "__main__.target.addr.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.target.addr.ImplicitArgs": {
                "full_name": "__main__.target.addr.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 0
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.target.addr.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.target.addr.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.target.hash2": {
                "destination": "starkware.cairo.common.hash.hash2",
                "type": "alias"
            },
            "__main__.target.normalize_address": {
                "destination": "starkware.starknet.common.storage.normalize_address",
                "type": "alias"
            },
            "__main__.target.read": {
                "decorators": [],
                "pc": 195,
                "type": "function"
            },
            "__main__.target.read.Args": {
                "full_name": "__main__.target.read.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.target.read.ImplicitArgs": {
                "full_name": "__main__.target.read.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.target.read.Return": {
                "cairo_type": "(address: felt)",
                "type": "type_definition"
            },
            "__main__.target.read.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.target.storage_read": {
                "destination": "starkware.starknet.common.syscalls.storage_read",
                "type": "alias"
            },
            "__main__.target.storage_write": {
                "destination": "starkware.starknet.common.syscalls.storage_write",
                "type": "alias"
            },
            "__main__.target.write": {
                "decorators": [],
                "pc": 208,
                "type": "function"
            },
            "__main__.target.write.Args": {
                "full_name": "__main__.target.write.Args",
                "members": {
                    "value": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "__main__.target.write.ImplicitArgs": {
                "full_name": "__main__.target.write.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.target.write.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.target.write.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.uint256_add": {
                "destination": "starkware.cairo.common.uint256.uint256_add",
                "type": "alias"
            },
            "__main__.user": {
                "type": "namespace"
            },
            "__main__.user.Args": {
                "full_name": "__main__.user.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.user.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "__main__.user.ImplicitArgs": {
                "full_name": "__main__.user.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.user.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.user.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.user.addr": {
                "decorators": [],
                "pc": 160,
                "type": "function"
            },
            "__main__.user.addr.Args": {
                "full_name": "__main__.user.addr.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.user.addr.ImplicitArgs": {
                "full_name": "__main__.user.addr.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 0
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__main__.user.addr.Return": {
                "cairo_type": "(res: felt)",
                "type": "type_definition"
            },
            "__main__.user.addr.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.user.hash2": {
                "destination": "starkware.cairo.common.hash.hash2",
                "type": "alias"
            },
            "__main__.user.normalize_address": {
                "destination": "starkware.starknet.common.storage.normalize_address",
                "type": "alias"
            },
            "__main__.user.read": {
                "decorators": [],
                "pc": 165,
                "type": "function"
            },
            "__main__.user.read.Args": {
                "full_name": "__main__.user.read.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__main__.user.read.ImplicitArgs": {
                "full_name": "__main__.user.read.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.user.read.Return": {
                "cairo_type": "(address: felt)",
                "type": "type_definition"
            },
            "__main__.user.read.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__main__.user.storage_read": {
                "destination": "starkware.starknet.common.syscalls.storage_read",
                "type": "alias"
            },
            "__main__.user.storage_write": {
                "destination": "starkware.starknet.common.syscalls.storage_write",
                "type": "alias"
            },
            "__main__.user.write": {
                "decorators": [],
                "pc": 178,
                "type": "function"
            },
            "__main__.user.write.Args": {
                "full_name": "__main__.user.write.Args",
                "members": {
                    "value": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "__main__.user.write.ImplicitArgs": {
                "full_name": "__main__.user.write.ImplicitArgs",
                "members": {
                    "pedersen_ptr": {
                        "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
                        "offset": 1
                    },
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "__main__.user.write.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "__main__.user.write.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.hack": {
                "decorators": [
                    "external"
                ],
                "pc": 284,
                "type": "function"
            },
            "__wrappers__.hack.Args": {
                "full_name": "__wrappers__.hack.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.hack.ImplicitArgs": {
                "full_name": "__wrappers__.hack.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.hack.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.hack.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.hack.__wrapped_func": {
                "destination": "__main__.hack",
                "type": "alias"
            },
            "__wrappers__.hack_encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.onERC721Received": {
                "decorators": [
                    "external"
                ],
                "pc": 409,
                "type": "function"
            },
            "__wrappers__.onERC721Received.Args": {
                "full_name": "__wrappers__.onERC721Received.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.onERC721Received.ImplicitArgs": {
                "full_name": "__wrappers__.onERC721Received.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.onERC721Received.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.onERC721Received.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.onERC721Received.__wrapped_func": {
                "destination": "__main__.onERC721Received",
                "type": "alias"
            },
            "__wrappers__.onERC721Received_encode_return": {
                "decorators": [],
                "pc": 400,
                "type": "function"
            },
            "__wrappers__.onERC721Received_encode_return.Args": {
                "full_name": "__wrappers__.onERC721Received_encode_return.Args",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "ret_value": {
                        "cairo_type": "(selector: felt)",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__wrappers__.onERC721Received_encode_return.ImplicitArgs": {
                "full_name": "__wrappers__.onERC721Received_encode_return.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.onERC721Received_encode_return.Return": {
                "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.onERC721Received_encode_return.SIZEOF_LOCALS": {
                "type": "const",
                "value": 1
            },
            "__wrappers__.onERC721Received_encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "__wrappers__.supportsInterface": {
                "decorators": [
                    "view"
                ],
                "pc": 319,
                "type": "function"
            },
            "__wrappers__.supportsInterface.Args": {
                "full_name": "__wrappers__.supportsInterface.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.supportsInterface.ImplicitArgs": {
                "full_name": "__wrappers__.supportsInterface.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.supportsInterface.Return": {
                "cairo_type": "(syscall_ptr: felt*, pedersen_ptr: starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr: felt, size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.supportsInterface.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "__wrappers__.supportsInterface.__wrapped_func": {
                "destination": "__main__.supportsInterface",
                "type": "alias"
            },
            "__wrappers__.supportsInterface_encode_return": {
                "decorators": [],
                "pc": 310,
                "type": "function"
            },
            "__wrappers__.supportsInterface_encode_return.Args": {
                "full_name": "__wrappers__.supportsInterface_encode_return.Args",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "ret_value": {
                        "cairo_type": "(success: felt)",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "__wrappers__.supportsInterface_encode_return.ImplicitArgs": {
                "full_name": "__wrappers__.supportsInterface_encode_return.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "__wrappers__.supportsInterface_encode_return.Return": {
                "cairo_type": "(range_check_ptr: felt, data_len: felt, data: felt*)",
                "type": "type_definition"
            },
            "__wrappers__.supportsInterface_encode_return.SIZEOF_LOCALS": {
                "type": "const",
                "value": 1
            },
            "__wrappers__.supportsInterface_encode_return.memcpy": {
                "destination": "starkware.cairo.common.memcpy.memcpy",
                "type": "alias"
            },
            "openzeppelin.utils.constants.library.DEFAULT_ADMIN_ROLE": {
                "type": "const",
                "value": 0
            },
            "openzeppelin.utils.constants.library.IACCESSCONTROL_ID": {
                "type": "const",
                "value": 2036718347
            },
            "openzeppelin.utils.constants.library.IACCOUNT_ID": {
                "type": "const",
                "value": 2792084853
            },
            "openzeppelin.utils.constants.library.IERC165_ID": {
                "type": "const",
                "value": 33540519
            },
            "openzeppelin.utils.constants.library.IERC721_ENUMERABLE_ID": {
                "type": "const",
                "value": 2014223715
            },
            "openzeppelin.utils.constants.library.IERC721_ID": {
                "type": "const",
                "value": 2158778573
            },
            "openzeppelin.utils.constants.library.IERC721_METADATA_ID": {
                "type": "const",
                "value": 1532892063
            },
            "openzeppelin.utils.constants.library.IERC721_RECEIVER_ID": {
                "type": "const",
                "value": 353073666
            },
            "openzeppelin.utils.constants.library.INVALID_ID": {
                "type": "const",
                "value": 4294967295
            },
            "openzeppelin.utils.constants.library.UINT8_MAX": {
                "type": "const",
                "value": 255
            },
            "starkware.cairo.common.alloc.alloc": {
                "decorators": [],
                "pc": 0,
                "type": "function"
            },
            "starkware.cairo.common.alloc.alloc.Args": {
                "full_name": "starkware.cairo.common.alloc.alloc.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "starkware.cairo.common.alloc.alloc.ImplicitArgs": {
                "full_name": "starkware.cairo.common.alloc.alloc.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "starkware.cairo.common.alloc.alloc.Return": {
                "cairo_type": "(ptr: felt*)",
                "type": "type_definition"
            },
            "starkware.cairo.common.alloc.alloc.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.cairo.common.bitwise.ALL_ONES": {
                "type": "const",
                "value": -106710729501573572985208420194530329073740042555888586719234
            },
            "starkware.cairo.common.bitwise.BitwiseBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin",
                "type": "alias"
            },
            "starkware.cairo.common.bool.FALSE": {
                "type": "const",
                "value": 0
            },
            "starkware.cairo.common.bool.TRUE": {
                "type": "const",
                "value": 1
            },
            "starkware.cairo.common.cairo_builtins.BitwiseBuiltin": {
                "full_name": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin",
                "members": {
                    "x": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "x_and_y": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "x_or_y": {
                        "cairo_type": "felt",
                        "offset": 4
                    },
                    "x_xor_y": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "y": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 5,
                "type": "struct"
            },
            "starkware.cairo.common.cairo_builtins.EcOpBuiltin": {
                "full_name": "starkware.cairo.common.cairo_builtins.EcOpBuiltin",
                "members": {
                    "m": {
                        "cairo_type": "felt",
                        "offset": 4
                    },
                    "p": {
                        "cairo_type": "starkware.cairo.common.ec_point.EcPoint",
                        "offset": 0
                    },
                    "q": {
                        "cairo_type": "starkware.cairo.common.ec_point.EcPoint",
                        "offset": 2
                    },
                    "r": {
                        "cairo_type": "starkware.cairo.common.ec_point.EcPoint",
                        "offset": 5
                    }
                },
                "size": 7,
                "type": "struct"
            },
            "starkware.cairo.common.cairo_builtins.EcPoint": {
                "destination": "starkware.cairo.common.ec_point.EcPoint",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_builtins.HashBuiltin": {
                "full_name": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "members": {
                    "result": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "x": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "y": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.cairo.common.cairo_builtins.KeccakBuiltin": {
                "full_name": "starkware.cairo.common.cairo_builtins.KeccakBuiltin",
                "members": {
                    "input": {
                        "cairo_type": "starkware.cairo.common.keccak_state.KeccakBuiltinState",
                        "offset": 0
                    },
                    "output": {
                        "cairo_type": "starkware.cairo.common.keccak_state.KeccakBuiltinState",
                        "offset": 8
                    }
                },
                "size": 16,
                "type": "struct"
            },
            "starkware.cairo.common.cairo_builtins.KeccakBuiltinState": {
                "destination": "starkware.cairo.common.keccak_state.KeccakBuiltinState",
                "type": "alias"
            },
            "starkware.cairo.common.cairo_builtins.SignatureBuiltin": {
                "full_name": "starkware.cairo.common.cairo_builtins.SignatureBuiltin",
                "members": {
                    "message": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "pub_key": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.cairo.common.dict_access.DictAccess": {
                "full_name": "starkware.cairo.common.dict_access.DictAccess",
                "members": {
                    "key": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "new_value": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "prev_value": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.cairo.common.ec_point.EcPoint": {
                "full_name": "starkware.cairo.common.ec_point.EcPoint",
                "members": {
                    "x": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "y": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.cairo.common.hash.HashBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
                "type": "alias"
            },
            "starkware.cairo.common.keccak_state.KeccakBuiltinState": {
                "full_name": "starkware.cairo.common.keccak_state.KeccakBuiltinState",
                "members": {
                    "s0": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "s1": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "s2": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "s3": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "s4": {
                        "cairo_type": "felt",
                        "offset": 4
                    },
                    "s5": {
                        "cairo_type": "felt",
                        "offset": 5
                    },
                    "s6": {
                        "cairo_type": "felt",
                        "offset": 6
                    },
                    "s7": {
                        "cairo_type": "felt",
                        "offset": 7
                    }
                },
                "size": 8,
                "type": "struct"
            },
            "starkware.cairo.common.math.FALSE": {
                "destination": "starkware.cairo.common.bool.FALSE",
                "type": "alias"
            },
            "starkware.cairo.common.math.TRUE": {
                "destination": "starkware.cairo.common.bool.TRUE",
                "type": "alias"
            },
            "starkware.cairo.common.math.assert_not_zero": {
                "decorators": [],
                "pc": 3,
                "type": "function"
            },
            "starkware.cairo.common.math.assert_not_zero.Args": {
                "full_name": "starkware.cairo.common.math.assert_not_zero.Args",
                "members": {
                    "value": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.cairo.common.math.assert_not_zero.ImplicitArgs": {
                "full_name": "starkware.cairo.common.math.assert_not_zero.ImplicitArgs",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "starkware.cairo.common.math.assert_not_zero.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "starkware.cairo.common.math.assert_not_zero.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.cairo.common.math.assert_not_zero.value": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.math.assert_not_zero.value",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 1,
                            "offset": 0
                        },
                        "pc": 3,
                        "value": "[cast(fp + (-3), felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.math_cmp.RC_BOUND": {
                "type": "const",
                "value": 340282366920938463463374607431768211456
            },
            "starkware.cairo.common.math_cmp.assert_le_felt": {
                "destination": "starkware.cairo.common.math.assert_le_felt",
                "type": "alias"
            },
            "starkware.cairo.common.math_cmp.assert_lt_felt": {
                "destination": "starkware.cairo.common.math.assert_lt_felt",
                "type": "alias"
            },
            "starkware.cairo.common.pow.assert_le": {
                "destination": "starkware.cairo.common.math.assert_le",
                "type": "alias"
            },
            "starkware.cairo.common.pow.get_ap": {
                "destination": "starkware.cairo.common.registers.get_ap",
                "type": "alias"
            },
            "starkware.cairo.common.pow.get_fp_and_pc": {
                "destination": "starkware.cairo.common.registers.get_fp_and_pc",
                "type": "alias"
            },
            "starkware.cairo.common.registers.get_ap": {
                "destination": "starkware.cairo.lang.compiler.lib.registers.get_ap",
                "type": "alias"
            },
            "starkware.cairo.common.registers.get_fp_and_pc": {
                "destination": "starkware.cairo.lang.compiler.lib.registers.get_fp_and_pc",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.ALL_ONES": {
                "type": "const",
                "value": 340282366920938463463374607431768211455
            },
            "starkware.cairo.common.uint256.BitwiseBuiltin": {
                "destination": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.HALF_SHIFT": {
                "type": "const",
                "value": 18446744073709551616
            },
            "starkware.cairo.common.uint256.SHIFT": {
                "type": "const",
                "value": 340282366920938463463374607431768211456
            },
            "starkware.cairo.common.uint256.Uint256": {
                "full_name": "starkware.cairo.common.uint256.Uint256",
                "members": {
                    "high": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "low": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.cairo.common.uint256.assert_in_range": {
                "destination": "starkware.cairo.common.math.assert_in_range",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.assert_le": {
                "destination": "starkware.cairo.common.math.assert_le",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.assert_nn_le": {
                "destination": "starkware.cairo.common.math.assert_nn_le",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.assert_not_zero": {
                "destination": "starkware.cairo.common.math.assert_not_zero",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.bitwise_and": {
                "destination": "starkware.cairo.common.bitwise.bitwise_and",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.bitwise_or": {
                "destination": "starkware.cairo.common.bitwise.bitwise_or",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.bitwise_xor": {
                "destination": "starkware.cairo.common.bitwise.bitwise_xor",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.get_ap": {
                "destination": "starkware.cairo.common.registers.get_ap",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.get_fp_and_pc": {
                "destination": "starkware.cairo.common.registers.get_fp_and_pc",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.is_le": {
                "destination": "starkware.cairo.common.math_cmp.is_le",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.pow": {
                "destination": "starkware.cairo.common.pow.pow",
                "type": "alias"
            },
            "starkware.cairo.common.uint256.uint256_add": {
                "decorators": [],
                "pc": 67,
                "type": "function"
            },
            "starkware.cairo.common.uint256.uint256_add.Args": {
                "full_name": "starkware.cairo.common.uint256.uint256_add.Args",
                "members": {
                    "a": {
                        "cairo_type": "starkware.cairo.common.uint256.Uint256",
                        "offset": 0
                    },
                    "b": {
                        "cairo_type": "starkware.cairo.common.uint256.Uint256",
                        "offset": 2
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "starkware.cairo.common.uint256.uint256_add.ImplicitArgs": {
                "full_name": "starkware.cairo.common.uint256.uint256_add.ImplicitArgs",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.cairo.common.uint256.uint256_add.Return": {
                "cairo_type": "(res: starkware.cairo.common.uint256.Uint256, carry: felt)",
                "type": "type_definition"
            },
            "starkware.cairo.common.uint256.uint256_add.SIZEOF_LOCALS": {
                "type": "const",
                "value": 4
            },
            "starkware.cairo.common.uint256.uint256_add.a": {
                "cairo_type": "starkware.cairo.common.uint256.Uint256",
                "full_name": "starkware.cairo.common.uint256.uint256_add.a",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 9,
                            "offset": 0
                        },
                        "pc": 67,
                        "value": "[cast(fp + (-6), starkware.cairo.common.uint256.Uint256*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.uint256.uint256_add.b": {
                "cairo_type": "starkware.cairo.common.uint256.Uint256",
                "full_name": "starkware.cairo.common.uint256.uint256_add.b",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 9,
                            "offset": 0
                        },
                        "pc": 67,
                        "value": "[cast(fp + (-4), starkware.cairo.common.uint256.Uint256*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.uint256.uint256_add.carry_high": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.uint256.uint256_add.carry_high",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 9,
                            "offset": 4
                        },
                        "pc": 69,
                        "value": "[cast(fp + 3, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.uint256.uint256_add.carry_low": {
                "cairo_type": "felt",
                "full_name": "starkware.cairo.common.uint256.uint256_add.carry_low",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 9,
                            "offset": 4
                        },
                        "pc": 69,
                        "value": "[cast(fp + 2, felt*)]"
                    }
                ],
                "type": "reference"
            },
            "starkware.cairo.common.uint256.uint256_check": {
                "decorators": [],
                "pc": 62,
                "type": "function"
            },
            "starkware.cairo.common.uint256.uint256_check.Args": {
                "full_name": "starkware.cairo.common.uint256.uint256_check.Args",
                "members": {
                    "a": {
                        "cairo_type": "starkware.cairo.common.uint256.Uint256",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.cairo.common.uint256.uint256_check.ImplicitArgs": {
                "full_name": "starkware.cairo.common.uint256.uint256_check.ImplicitArgs",
                "members": {
                    "range_check_ptr": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.cairo.common.uint256.uint256_check.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "starkware.cairo.common.uint256.uint256_check.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.storage.ADDR_BOUND": {
                "type": "const",
                "value": -106710729501573572985208420194530329073740042555888586719489
            },
            "starkware.starknet.common.storage.MAX_STORAGE_ITEM_SIZE": {
                "type": "const",
                "value": 256
            },
            "starkware.starknet.common.storage.assert_250_bit": {
                "destination": "starkware.cairo.common.math.assert_250_bit",
                "type": "alias"
            },
            "starkware.starknet.common.syscalls.CALL_CONTRACT_SELECTOR": {
                "type": "const",
                "value": 20853273475220472486191784820
            },
            "starkware.starknet.common.syscalls.CallContract": {
                "full_name": "starkware.starknet.common.syscalls.CallContract",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.CallContractRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.CallContractResponse",
                        "offset": 5
                    }
                },
                "size": 7,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.CallContractRequest": {
                "full_name": "starkware.starknet.common.syscalls.CallContractRequest",
                "members": {
                    "calldata": {
                        "cairo_type": "felt*",
                        "offset": 4
                    },
                    "calldata_size": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "contract_address": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "function_selector": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 5,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.CallContractResponse": {
                "full_name": "starkware.starknet.common.syscalls.CallContractResponse",
                "members": {
                    "retdata": {
                        "cairo_type": "felt*",
                        "offset": 1
                    },
                    "retdata_size": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.DELEGATE_CALL_SELECTOR": {
                "type": "const",
                "value": 21167594061783206823196716140
            },
            "starkware.starknet.common.syscalls.DELEGATE_L1_HANDLER_SELECTOR": {
                "type": "const",
                "value": 23274015802972845247556842986379118667122
            },
            "starkware.starknet.common.syscalls.DEPLOY_SELECTOR": {
                "type": "const",
                "value": 75202468540281
            },
            "starkware.starknet.common.syscalls.Deploy": {
                "full_name": "starkware.starknet.common.syscalls.Deploy",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.DeployRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.DeployResponse",
                        "offset": 6
                    }
                },
                "size": 9,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.DeployRequest": {
                "full_name": "starkware.starknet.common.syscalls.DeployRequest",
                "members": {
                    "class_hash": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "constructor_calldata": {
                        "cairo_type": "felt*",
                        "offset": 4
                    },
                    "constructor_calldata_size": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "contract_address_salt": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "deploy_from_zero": {
                        "cairo_type": "felt",
                        "offset": 5
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 6,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.DeployResponse": {
                "full_name": "starkware.starknet.common.syscalls.DeployResponse",
                "members": {
                    "constructor_retdata": {
                        "cairo_type": "felt*",
                        "offset": 2
                    },
                    "constructor_retdata_size": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "contract_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.DictAccess": {
                "destination": "starkware.cairo.common.dict_access.DictAccess",
                "type": "alias"
            },
            "starkware.starknet.common.syscalls.EMIT_EVENT_SELECTOR": {
                "type": "const",
                "value": 1280709301550335749748
            },
            "starkware.starknet.common.syscalls.EmitEvent": {
                "full_name": "starkware.starknet.common.syscalls.EmitEvent",
                "members": {
                    "data": {
                        "cairo_type": "felt*",
                        "offset": 4
                    },
                    "data_len": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "keys": {
                        "cairo_type": "felt*",
                        "offset": 2
                    },
                    "keys_len": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 5,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GET_BLOCK_NUMBER_SELECTOR": {
                "type": "const",
                "value": 1448089106835523001438702345020786
            },
            "starkware.starknet.common.syscalls.GET_BLOCK_TIMESTAMP_SELECTOR": {
                "type": "const",
                "value": 24294903732626645868215235778792757751152
            },
            "starkware.starknet.common.syscalls.GET_CALLER_ADDRESS_SELECTOR": {
                "type": "const",
                "value": 94901967781393078444254803017658102643
            },
            "starkware.starknet.common.syscalls.GET_CONTRACT_ADDRESS_SELECTOR": {
                "type": "const",
                "value": 6219495360805491471215297013070624192820083
            },
            "starkware.starknet.common.syscalls.GET_SEQUENCER_ADDRESS_SELECTOR": {
                "type": "const",
                "value": 1592190833581991703053805829594610833820054387
            },
            "starkware.starknet.common.syscalls.GET_TX_INFO_SELECTOR": {
                "type": "const",
                "value": 1317029390204112103023
            },
            "starkware.starknet.common.syscalls.GET_TX_SIGNATURE_SELECTOR": {
                "type": "const",
                "value": 1448089128652340074717162277007973
            },
            "starkware.starknet.common.syscalls.GetBlockNumber": {
                "full_name": "starkware.starknet.common.syscalls.GetBlockNumber",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetBlockNumberRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetBlockNumberResponse",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetBlockNumberRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetBlockNumberRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetBlockNumberResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetBlockNumberResponse",
                "members": {
                    "block_number": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetBlockTimestamp": {
                "full_name": "starkware.starknet.common.syscalls.GetBlockTimestamp",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetBlockTimestampRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetBlockTimestampResponse",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetBlockTimestampRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetBlockTimestampRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetBlockTimestampResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetBlockTimestampResponse",
                "members": {
                    "block_timestamp": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetCallerAddress": {
                "full_name": "starkware.starknet.common.syscalls.GetCallerAddress",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetCallerAddressRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetCallerAddressResponse",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetCallerAddressRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetCallerAddressRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetCallerAddressResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetCallerAddressResponse",
                "members": {
                    "caller_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetContractAddress": {
                "full_name": "starkware.starknet.common.syscalls.GetContractAddress",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetContractAddressRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetContractAddressResponse",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetContractAddressRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetContractAddressRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetContractAddressResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetContractAddressResponse",
                "members": {
                    "contract_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetSequencerAddress": {
                "full_name": "starkware.starknet.common.syscalls.GetSequencerAddress",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetSequencerAddressRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetSequencerAddressResponse",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetSequencerAddressRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetSequencerAddressRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetSequencerAddressResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetSequencerAddressResponse",
                "members": {
                    "sequencer_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetTxInfo": {
                "full_name": "starkware.starknet.common.syscalls.GetTxInfo",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetTxInfoRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetTxInfoResponse",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetTxInfoRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetTxInfoRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetTxInfoResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetTxInfoResponse",
                "members": {
                    "tx_info": {
                        "cairo_type": "starkware.starknet.common.syscalls.TxInfo*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetTxSignature": {
                "full_name": "starkware.starknet.common.syscalls.GetTxSignature",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetTxSignatureRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.GetTxSignatureResponse",
                        "offset": 1
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetTxSignatureRequest": {
                "full_name": "starkware.starknet.common.syscalls.GetTxSignatureRequest",
                "members": {
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.GetTxSignatureResponse": {
                "full_name": "starkware.starknet.common.syscalls.GetTxSignatureResponse",
                "members": {
                    "signature": {
                        "cairo_type": "felt*",
                        "offset": 1
                    },
                    "signature_len": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.LIBRARY_CALL_L1_HANDLER_SELECTOR": {
                "type": "const",
                "value": 436233452754198157705746250789557519228244616562
            },
            "starkware.starknet.common.syscalls.LIBRARY_CALL_SELECTOR": {
                "type": "const",
                "value": 92376026794327011772951660
            },
            "starkware.starknet.common.syscalls.LibraryCall": {
                "full_name": "starkware.starknet.common.syscalls.LibraryCall",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.LibraryCallRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.CallContractResponse",
                        "offset": 5
                    }
                },
                "size": 7,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.LibraryCallRequest": {
                "full_name": "starkware.starknet.common.syscalls.LibraryCallRequest",
                "members": {
                    "calldata": {
                        "cairo_type": "felt*",
                        "offset": 4
                    },
                    "calldata_size": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "class_hash": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "function_selector": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 5,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.SEND_MESSAGE_TO_L1_SELECTOR": {
                "type": "const",
                "value": 433017908768303439907196859243777073
            },
            "starkware.starknet.common.syscalls.STORAGE_READ_SELECTOR": {
                "type": "const",
                "value": 100890693370601760042082660
            },
            "starkware.starknet.common.syscalls.STORAGE_WRITE_SELECTOR": {
                "type": "const",
                "value": 25828017502874050592466629733
            },
            "starkware.starknet.common.syscalls.SendMessageToL1SysCall": {
                "full_name": "starkware.starknet.common.syscalls.SendMessageToL1SysCall",
                "members": {
                    "payload_ptr": {
                        "cairo_type": "felt*",
                        "offset": 3
                    },
                    "payload_size": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "to_address": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.StorageRead": {
                "full_name": "starkware.starknet.common.syscalls.StorageRead",
                "members": {
                    "request": {
                        "cairo_type": "starkware.starknet.common.syscalls.StorageReadRequest",
                        "offset": 0
                    },
                    "response": {
                        "cairo_type": "starkware.starknet.common.syscalls.StorageReadResponse",
                        "offset": 2
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.StorageReadRequest": {
                "full_name": "starkware.starknet.common.syscalls.StorageReadRequest",
                "members": {
                    "address": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.StorageReadResponse": {
                "full_name": "starkware.starknet.common.syscalls.StorageReadResponse",
                "members": {
                    "value": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.StorageWrite": {
                "full_name": "starkware.starknet.common.syscalls.StorageWrite",
                "members": {
                    "address": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "selector": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "value": {
                        "cairo_type": "felt",
                        "offset": 2
                    }
                },
                "size": 3,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.TxInfo": {
                "full_name": "starkware.starknet.common.syscalls.TxInfo",
                "members": {
                    "account_contract_address": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "chain_id": {
                        "cairo_type": "felt",
                        "offset": 6
                    },
                    "max_fee": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "nonce": {
                        "cairo_type": "felt",
                        "offset": 7
                    },
                    "signature": {
                        "cairo_type": "felt*",
                        "offset": 4
                    },
                    "signature_len": {
                        "cairo_type": "felt",
                        "offset": 3
                    },
                    "transaction_hash": {
                        "cairo_type": "felt",
                        "offset": 5
                    },
                    "version": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 8,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.call_contract": {
                "decorators": [],
                "pc": 8,
                "type": "function"
            },
            "starkware.starknet.common.syscalls.call_contract.Args": {
                "full_name": "starkware.starknet.common.syscalls.call_contract.Args",
                "members": {
                    "calldata": {
                        "cairo_type": "felt*",
                        "offset": 3
                    },
                    "calldata_size": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "contract_address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "function_selector": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 4,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.call_contract.ImplicitArgs": {
                "full_name": "starkware.starknet.common.syscalls.call_contract.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.call_contract.Return": {
                "cairo_type": "(retdata_size: felt, retdata: felt*)",
                "type": "type_definition"
            },
            "starkware.starknet.common.syscalls.call_contract.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.syscalls.call_contract.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.syscalls.call_contract.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 2,
                            "offset": 0
                        },
                        "pc": 8,
                        "value": "[cast(fp + (-7), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 2,
                            "offset": 1
                        },
                        "pc": 15,
                        "value": "cast([fp + (-7)] + 7, felt*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.deploy": {
                "decorators": [],
                "pc": 20,
                "type": "function"
            },
            "starkware.starknet.common.syscalls.deploy.Args": {
                "full_name": "starkware.starknet.common.syscalls.deploy.Args",
                "members": {
                    "class_hash": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "constructor_calldata": {
                        "cairo_type": "felt*",
                        "offset": 3
                    },
                    "constructor_calldata_size": {
                        "cairo_type": "felt",
                        "offset": 2
                    },
                    "contract_address_salt": {
                        "cairo_type": "felt",
                        "offset": 1
                    },
                    "deploy_from_zero": {
                        "cairo_type": "felt",
                        "offset": 4
                    }
                },
                "size": 5,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.deploy.ImplicitArgs": {
                "full_name": "starkware.starknet.common.syscalls.deploy.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.deploy.Return": {
                "cairo_type": "(contract_address: felt)",
                "type": "type_definition"
            },
            "starkware.starknet.common.syscalls.deploy.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.syscalls.deploy.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.syscalls.deploy.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 3,
                            "offset": 0
                        },
                        "pc": 20,
                        "value": "[cast(fp + (-8), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 3,
                            "offset": 1
                        },
                        "pc": 28,
                        "value": "cast([fp + (-8)] + 9, felt*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.get_caller_address": {
                "decorators": [],
                "pc": 32,
                "type": "function"
            },
            "starkware.starknet.common.syscalls.get_caller_address.Args": {
                "full_name": "starkware.starknet.common.syscalls.get_caller_address.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.get_caller_address.ImplicitArgs": {
                "full_name": "starkware.starknet.common.syscalls.get_caller_address.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.get_caller_address.Return": {
                "cairo_type": "(caller_address: felt)",
                "type": "type_definition"
            },
            "starkware.starknet.common.syscalls.get_caller_address.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.syscalls.get_caller_address.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.syscalls.get_caller_address.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 4,
                            "offset": 0
                        },
                        "pc": 32,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 4,
                            "offset": 1
                        },
                        "pc": 35,
                        "value": "cast([fp + (-3)] + 2, felt*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.get_contract_address": {
                "decorators": [],
                "pc": 39,
                "type": "function"
            },
            "starkware.starknet.common.syscalls.get_contract_address.Args": {
                "full_name": "starkware.starknet.common.syscalls.get_contract_address.Args",
                "members": {},
                "size": 0,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.get_contract_address.ImplicitArgs": {
                "full_name": "starkware.starknet.common.syscalls.get_contract_address.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.get_contract_address.Return": {
                "cairo_type": "(contract_address: felt)",
                "type": "type_definition"
            },
            "starkware.starknet.common.syscalls.get_contract_address.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.syscalls.get_contract_address.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.syscalls.get_contract_address.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 5,
                            "offset": 0
                        },
                        "pc": 39,
                        "value": "[cast(fp + (-3), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 5,
                            "offset": 1
                        },
                        "pc": 42,
                        "value": "cast([fp + (-3)] + 2, felt*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.storage_read": {
                "decorators": [],
                "pc": 46,
                "type": "function"
            },
            "starkware.starknet.common.syscalls.storage_read.Args": {
                "full_name": "starkware.starknet.common.syscalls.storage_read.Args",
                "members": {
                    "address": {
                        "cairo_type": "felt",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.storage_read.ImplicitArgs": {
                "full_name": "starkware.starknet.common.syscalls.storage_read.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.storage_read.Return": {
                "cairo_type": "(value: felt)",
                "type": "type_definition"
            },
            "starkware.starknet.common.syscalls.storage_read.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.syscalls.storage_read.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.syscalls.storage_read.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 6,
                            "offset": 0
                        },
                        "pc": 46,
                        "value": "[cast(fp + (-4), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 6,
                            "offset": 1
                        },
                        "pc": 50,
                        "value": "cast([fp + (-4)] + 3, felt*)"
                    }
                ],
                "type": "reference"
            },
            "starkware.starknet.common.syscalls.storage_write": {
                "decorators": [],
                "pc": 54,
                "type": "function"
            },
            "starkware.starknet.common.syscalls.storage_write.Args": {
                "full_name": "starkware.starknet.common.syscalls.storage_write.Args",
                "members": {
                    "address": {
                        "cairo_type": "felt",
                        "offset": 0
                    },
                    "value": {
                        "cairo_type": "felt",
                        "offset": 1
                    }
                },
                "size": 2,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.storage_write.ImplicitArgs": {
                "full_name": "starkware.starknet.common.syscalls.storage_write.ImplicitArgs",
                "members": {
                    "syscall_ptr": {
                        "cairo_type": "felt*",
                        "offset": 0
                    }
                },
                "size": 1,
                "type": "struct"
            },
            "starkware.starknet.common.syscalls.storage_write.Return": {
                "cairo_type": "()",
                "type": "type_definition"
            },
            "starkware.starknet.common.syscalls.storage_write.SIZEOF_LOCALS": {
                "type": "const",
                "value": 0
            },
            "starkware.starknet.common.syscalls.storage_write.syscall_ptr": {
                "cairo_type": "felt*",
                "full_name": "starkware.starknet.common.syscalls.storage_write.syscall_ptr",
                "references": [
                    {
                        "ap_tracking_data": {
                            "group": 7,
                            "offset": 0
                        },
                        "pc": 54,
                        "value": "[cast(fp + (-5), felt**)]"
                    },
                    {
                        "ap_tracking_data": {
                            "group": 7,
                            "offset": 1
                        },
                        "pc": 59,
                        "value": "cast([fp + (-5)] + 3, felt*)"
                    }
                ],
                "type": "reference"
            }
        },
        "main_scope": "__main__",
        "prime": "0x800000000000011000000000000000000000000000000000000000000000001",
        "reference_manager": {
            "references": [
                {
                    "ap_tracking_data": {
                        "group": 1,
                        "offset": 0
                    },
                    "pc": 3,
                    "value": "[cast(fp + (-3), felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 2,
                        "offset": 0
                    },
                    "pc": 8,
                    "value": "[cast(fp + (-7), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 3,
                        "offset": 0
                    },
                    "pc": 20,
                    "value": "[cast(fp + (-8), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 4,
                        "offset": 0
                    },
                    "pc": 32,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 5,
                        "offset": 0
                    },
                    "pc": 39,
                    "value": "[cast(fp + (-3), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 6,
                        "offset": 0
                    },
                    "pc": 46,
                    "value": "[cast(fp + (-4), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 7,
                        "offset": 0
                    },
                    "pc": 54,
                    "value": "[cast(fp + (-5), felt**)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 9,
                        "offset": 0
                    },
                    "pc": 67,
                    "value": "[cast(fp + (-6), starkware.cairo.common.uint256.Uint256*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 9,
                        "offset": 0
                    },
                    "pc": 67,
                    "value": "[cast(fp + (-4), starkware.cairo.common.uint256.Uint256*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 9,
                        "offset": 4
                    },
                    "pc": 69,
                    "value": "[cast(fp + 2, felt*)]"
                },
                {
                    "ap_tracking_data": {
                        "group": 9,
                        "offset": 4
                    },
                    "pc": 69,
                    "value": "[cast(fp + 3, felt*)]"
                }
            ]
        }
    }
}

export default REE_COMPILED;
