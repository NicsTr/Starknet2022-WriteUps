# `DNA`

## Number of points

500 (hardest challenge of the CTF)

## Challenge victory condition

This challenge is validated when a call to `is_challenge_done` returns 1. For
it to return 1, the user has to invoke `test_password` with a list of values
satisfying a condition.

## Challenge solution

### Source code analysis

The `test_password` function uses a simpler function, `test_value` during its execution:
```cairo
func test_value(input: felt, res1: felt, res2: felt, res3: felt, res4: felt) -> (res: felt) {
    alloc_locals;

    let value = input;

    if (value == 67) {
        return (res=res4);
    }

    if (value == 71) {
        return (res=res2);
    }

    if (value == 84) {
        return (res=res1);
    }

    if (value == 65) {
        return (res=res3);
    }
    return (res=0);
}
```
This function is simply mapping the `input` value to one of five
possible field elements: either one of the four parameters if `input` is among
`[84, 71, 65, 67]` or `0` for any other value.

Here is the code of `test_password`:

```cairo
@external
func test_password{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr: felt}(
    inputs_len: felt, inputs: felt*
) -> () {
    alloc_locals;
    let values_len = inputs_len;
    let values = inputs;

    with_attr error_message("    ERROR: You have to use a list with a len equal to 17!") {
        assert values_len = 17;
    }

    test_value([values], 1498, 997, 2753, 6301);
    let result1 = [ap - 1];

    test_value([values + 1], 5939, 1823, 5501, 2069);
    let result2 = [ap - 1] + result1;

    test_value([values + 2], 113, 127, 131, 137);
    let result3 = [ap - 1] + result2;

    test_value([values + 3], 1913, 7919, 7127, 7577);
    let result4 = [ap - 1] + result3;

    test_value(
        [values + 4],
        877,
        27644437,
        35742549198872617291353508656626642567,
        359334085968622831041960188598043661065388726959079837,
    );
    let result5 = [ap - 1] + result4;

    test_value([values + 5], 16127, 1046527, 16769023, 1073676287);
    let result6 = [ap - 1] + result5;

    test_value([values + 6], 2381, 2521, 3121, 3613);
    let result7 = [ap - 1] + result6;

    test_value([values + 7], 3259, 3301, 3307, 3313);
    let result8 = [ap - 1] + result7;

    test_value([values + 8], 479, 487, 491, 499);
    let result9 = [ap - 1] + result8;

    test_value([values + 9], 23497, 24571, 25117, 26227);
    let result10 = [ap - 1] + result9;

    test_value([values + 10], 60493, 63949, 65713, 69313);
    let result11 = [ap - 1] + result10;

    test_value([values + 11], 87178291199, 479001599, 39916801, 5039);
    let result12 = [ap - 1] + result11;

    test_value([values + 12], 13, 29, 53, 89);
    let result13 = [ap - 1] + result12;

    test_value([values + 13], 433494437, 2971215073, 28657, 514229);
    let result14 = [ap - 1] + result13;

    test_value([values + 14], 131071, 2147483647, 524287, 8191);
    let result15 = [ap - 1] + result14;

    test_value([values + 15], 786433, 746497, 995329, 839809);
    let result16 = [ap - 1] + result15;

    test_value([values + 16], 9091, 101, 333667, 9901);
    let result17 = [ap - 1] + result16;

    let (test_password_) = hash2{hash_ptr=pedersen_ptr}(result17, 317);
    let (read_storage) = test_pass.read(test_password_);
    if (read_storage == 1) {
        challenge_is_done.write(1);
        return ();
    }
    return ();
}
```
In summary, this function:
* checks that the input is a list of 17 values;
* for each of the input values, it replaces it with another value by using
  `test_value` and a set of four arbitrary integers;
* increments an accumulator (that we call `a`) by the value returned by `test_value`;
* after processing the 17 inputs, hashes this accumulator using
  `hash2(a, 317)`;
* Compares this hash with the target value set in the storage variable
  `test_pass`.

The target value `test_pass` can be recovered and is equal to:
`3329738248317886966279794942297149793815292158761370755733235303955518040301`.
Our goal is thus to find an appropriate list of 17 values such that the result of the hash is equal to this value.

The hash function used, `hash2`, is a Pedersen hash that takes as input two
field elements and returns a field element. It is computed using elliptic
curve arithmetic. Given two inputs `a` and `b`, the result is the x-coordinate
of the point $H$ defined by:

```math
H = S + [\texttt{a}_\texttt{low}]P_0 + [\texttt{a}_\texttt{high}]P_1 + [\texttt{b}_\texttt{low}]P_2 + [\texttt{b}_\texttt{high}]P_3
```

where
$S, P_0, P_1, P_2, P_3$ are points that are fixed for `hash2` and $\cdot_\texttt{low}$ (respectively, $\cdot_\texttt{high}$) is the integer represented by the 248 lowest bits (respectively, 4 highest bits) of $\cdot$.


### Finding an suitable value for `a`

In our case, since the value of `b` is fixed to `317` and since the highest reachable
value for `a` is lower than $2^{248}$, the formula for the Pedersen hash can be simplified:
$H = S + [317]P_2 + [\texttt{a}]P_1$.
Having a target value for the x-coordinate of `hash2(a, 317)` fixes two
possible points $H$ and $H'$ and we are looking for a value `a` such that:
$H - S - [317]P_2 = [\texttt{a}]P_1$ or $H' - S - [317]P_2 = [\texttt{a}]P_1$.
That is, we are looking for the discrete logarithm of either
$H - S - [317]P_2$ or $H' - S - [317]P_2$ with $P_1$ as a base point.

In general, this is a difficult problem. However, we know that the solution
`a` is the sum of 17 values and that each value can have 4 different
possibilities. In total, we would have $4^{17} = 2^{34}$ different values to
try. While this is much less than the number of possible values in the general
discrete logarithm problem, this is still too costly in the context of this
challenge to compute every hash
possible since elliptic curves operations are slow.

To help us solve this challenge, we use a strategy inspired by the well-known
[baby-step giant-step
algorithm](https://en.wikipedia.org/wiki/Baby-step_giant-step). Instead of
doing $2^{34}$ operations, we use a trade-off between memory and
computation cost. Remember that the value we need to find, $a$ is computed as the sum of 17 unknown values that we call $a_i$: 
```math
a = \sum_{i = 0}^{17}a_i.
```
Let split $a$ into two parts:
```math
a = \sum_{i=0}^{7}a_i + \sum_{i=8}^{17}a_i = A_0 + A_1.
```
What we do is to first
compute every possible value for $A_0$ and store the result of $[A_0]P_1$ in a table. Then, we
compute every possible value for $A_1$, compute $H - S - [317]P_2 - [A_1]P_1$
and look in the previously computed table if the value is present. If it is
the case, then we have two values $A_0$ and $A_1$ such that
$S + [317]P_2 + [A_0]P_1 + [A_1]P_1 = H$, which in turn means that $a = A_0 + A_1$.
The cost of such an algorithm have an upper bound at $2^{16} + 2^{18}$ scalar multiplications
and $2^{16}$ stored elliptic curve points. Once we obtain the values of $A_0$
and $A_1$, we can quickly recover the values of each $a_i$ and in turn the
17 values needed as input to the `test_password` function.

Our implementation of this attack is written in
[Sage](https://www.sagemath.org/) and it takes 100 cpu-seconds to run on our
laptop's i7 processor. It is however important to note that in our case, the second step is terminating more quickly than expected for a random unique solution: we found the right $A_1$ after only 3% of the $2^{18}$ possible values. This may be due to the fact the solution $(A_0, A_1)$ is not unique in combination with luck.
