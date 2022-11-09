// Function 0
func __main__.challenge_is_done.addr{pedersen_ptr : starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr : felt}() -> (res : felt){
    v0 = pedersen_ptr
    v2 = range_check_ptr
    v4 = 0x3bd5999d9835e5a2497d76df48d4a46d7f221796ffcb7ce7f9155f10a5677e9    // 0x3bd5999d9835e5a2497d76df48d4a46d7f221796ffcb7ce7f9155f10a5677e9
    return(v4)
}

// Function 1
func __main__.challenge_is_done.read{syscall_ptr : felt*, pedersen_ptr : starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr : felt}() -> (res : felt){
    v5 = pedersen_ptr
    v7 = range_check_ptr
    addr(v5, v7)
    v9 = syscall_ptr
    v11 = v7
    storage_read(v9, v11)
    v12 = v9
    v13 = res
    v15 = syscall_ptr
    v16 = v11
    return(v16)
}

// Function 2
func __main__.challenge_is_done.write{syscall_ptr : felt*, pedersen_ptr : starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr : felt}(value : felt){
    v17 = pedersen_ptr
    v19 = range_check_ptr
    addr(v17, v19)
    v21 = syscall_ptr
    v23 = v19
    v24 = value
    storage_write(v21, v23, v24)
    v26 = pedersen_ptr
    v27 = range_check_ptr
    ret
}

// Function 3
@view func __main__.is_challenge_done{syscall_ptr : felt*, pedersen_ptr : starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr : felt}() -> (res : felt){
    v28 = syscall_ptr
    v30 = pedersen_ptr
    v32 = range_check_ptr
    read(v28, v30, v32)
    return(v32)
}

// Function 4
func __wrappers__.is_challenge_done_encode_return{}(ret_value : (res: felt), range_check_ptr : felt) -> (range_check_ptr : felt, data_len : felt, data : felt*){
    %{ 
        memory[ap] = segments.add()
    %} 

    ret_value = [v35]
    v35 = v35 + 1
    v36 = range_check_ptr
    assert v35 = v38 + v35
    v39 = v35
    return(v36, v38, v39)
}

// Function 5
@view func __wrappers__.is_challenge_done{}() -> (syscall_ptr : felt*, pedersen_ptr : starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr : felt, bitwise_ptr : felt, size : felt, retdata : felt*){
    retdata = size + retdata
    v42 = [bitwise_ptr]
    v44 = [bitwise_ptr + 1]
    v45 = [bitwise_ptr + 2]
    is_challenge_done(v42, v44, v45)
    v46 = v44
    is_challenge_done_encode_return(v45, v46)
    v47 = syscall_ptr
    v49 = pedersen_ptr
    v51 = v44
    v52 = [bitwise_ptr + 3]
    v53 = v45
    v54 = v46
    return(v47, v49, v51, v52, v53, v54)
}

// Function 6
@external func __main__.test_password{syscall_ptr : felt*, pedersen_ptr : starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr : felt, bitwise_ptr : starkware.cairo.common.cairo_builtins.BitwiseBuiltin*}(password : felt) -> (res : felt){
    v55 = bitwise_ptr
    v57 = 12345    // 09
    v58 = password
    bitwise_xor(v55, v57, v58)
    assert v60 = v58 - 19423
    if (v60 == 0) {
        v61 = syscall_ptr
        v63 = pedersen_ptr
        v65 = range_check_ptr
        v67 = 1    // 0x1
        write(v61, v63, v65, v67)
        v68 = v44
        v69 = 1    // 0x1
        return(v69)

    }
    v70 = syscall_ptr
    v71 = pedersen_ptr
    v72 = range_check_ptr
    v73 = v67
    v74 = 0    // 0x0
    return(v74)
}

// Function 7
func __wrappers__.test_password_encode_return{}(ret_value : (res: felt), range_check_ptr : felt) -> (range_check_ptr : felt, data_len : felt, data : felt*){
    %{ 
        memory[ap] = segments.add()
    %} 

    ret_value = [v76]
    v76 = v76 + 1
    v77 = range_check_ptr
    assert v76 = v79 + v76
    v80 = v76
    return(v77, v79, v80)
}

// Function 8
@external func __wrappers__.test_password{}() -> (syscall_ptr : felt*, pedersen_ptr : starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr : felt, bitwise_ptr : starkware.cairo.common.cairo_builtins.BitwiseBuiltin*, size : felt, retdata : felt*){
    v81 = retdata + 1
    assert v81 = size + retdata
    v84 = [bitwise_ptr]
    v86 = [bitwise_ptr + 1]
    v87 = [bitwise_ptr + 2]
    v88 = [bitwise_ptr + 3]
    v89 = [retdata]
    test_password(v84, v86, v87, v88, v89)
    v90 = v87
    test_password_encode_return(v89, v90)
    v91 = range_check_ptr
    v93 = bitwise_ptr
    v94 = v88
    v95 = retdata
    v96 = v89
    v97 = v90
    return(v91, v93, v94, v95, v96, v97)
}
