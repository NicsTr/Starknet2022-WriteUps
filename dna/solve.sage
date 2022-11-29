from tqdm.contrib.itertools import product
from functools import reduce

def Init_Stark(curve_characteristic,curve_a, curve_b,Gx, Gy, curve_Order):    
	Fp=GF(curve_characteristic); 				#Initialize Prime field of Point
	Fq=GF(curve_Order);					#Initialize Prime field of scalars
	Curve=EllipticCurve(Fp, [curve_a, curve_b]);		#Initialize Elliptic curve
	curve_Generator=Curve([Gx, Gy]);
	P0=Curve([PEDERSEN_POINTS[0][0], PEDERSEN_POINTS[0][1]]);
	P1=Curve([PEDERSEN_POINTS[1][0], PEDERSEN_POINTS[1][1]]);
	P2=Curve([PEDERSEN_POINTS[2][0], PEDERSEN_POINTS[2][1]]);
	P3=Curve([PEDERSEN_POINTS[3][0], PEDERSEN_POINTS[3][1]]);
	Shift=Curve(PEDERSEN_SHIFT[0], PEDERSEN_SHIFT[1]);
	return [Curve,curve_Generator, P0, P1, P2, P3, Shift];

PEDERSEN_SHIFT = [##shift = constant[0]
   0x49ee3eba8c1600700ee1b87eb599f16716b0b1022947733551fde4050ca6804,
   0x3ca0cfe4b3bc6ddf346d49d06ea0ed34e621062c0e056c1d0405d266e10268a	
];

PEDERSEN_POINTS=[
        [##P0 = constant[2]
            0x234287dcbaffe7f969c748655fca9e58fa8120b6d56eb0c1080d17957ebe47b,
            0x3b056f100f96fb21e889527d41f4e39940135dd7a6c94cc6ed0268ee89e5615
        ],
        [##P1
            0x04fa56f376c83db33f9dab2656558f3399099ec1de5e3018b7a6932dba8aa378,
            0x03fa0984c931c9e38113e0c0e47e4401562761f92a7a23b45168f4e80ff5b54d
        ],
        [##P2
          0x04ba4cc166be8dec764910f75b45f74b40c690c74709e90f3aa372f0bd2d6997,        
          0x0040301cf5c1751f4b971e46c4ede85fcac5c59a5ce5ae7c48151f27b24b219c
        ],
        [##P3
          0x054302dcb0e6cc1c6e44cca8f61a63bb2ca65048d53fb325d36ff12c49a58202,
          0x01b77b3e37d13504b348046268d8ae25ce98ad783c25561a879dcc77e99c2426
        ]
    ];

curve_characteristic=2^251+17*2^192+1     
is_prime(curve_characteristic); #should return true
beta = 0x6f21413efbe40de150e596d72f7a8c5609ad26c15c915c1f4cdfcb99cee9e89
Stark_order=0x800000000000010ffffffffffffffffb781126dcae7b2321e66a241adc64d2f
GEN_X = 0x1ef15c18599971b7beced415a40f0c7deacfd9b0d1819e03d723d8bc943cfca;
GEN_Y = 0x5668060aa49730b7be4801df46ec62de53ecd11abe43a32873000c36e8dc1f;	
[Curve,curve_Generator, P0, P1, P2, P3, Shift]=Init_Stark(curve_characteristic,1, beta,GEN_X, GEN_Y,Stark_order) ;

def  pedersen_point(a,b):
	hi_a=a>>248;
	low_a =a&(2^248-1);
	hi_b=b>>248;
	low_b =b&(2^248-1);
	HashPoint=Shift+low_a*P0+hi_a*P1+low_b*P2+hi_b*P3;
	
	return HashPoint;
	
def pedersen(a,b):
	hi_a=a>>248;
	low_a =a&(2^248-1);
	hi_b=b>>248;
	low_b =b&(2^248-1);
	HashPoint=Shift+low_a*P0+hi_a*P1+low_b*P2+hi_b*P3;
	
	return int(HashPoint[0]);

def my_pedersen(a):
    HashPoint=Shift+a*P0+low_b*P2;
    return int(HashPoint[0])

def compute_y(E,x):
    R.<y> = PolynomialRing(E.base_ring())
    a = E.a_invariants()
    L = (y^2 + (a[0]*x + a[2])*y - (x^3 + a[1]*x^2 + a[3]*x + a[4])).roots()
    return {l[0] for l in L}




# Values that define our search space
vals_a0 = []
vals_a0.append([1498, 997, 2753, 6301])
vals_a0.append([5939, 1823, 5501, 2069])
vals_a0.append([113, 127, 131, 137])
vals_a0.append([1913, 7919, 7127, 7577])
vals_a0.append([877,
    27644437,
    35742549198872617291353508656626642567,
    359334085968622831041960188598043661065388726959079837,
    ])
vals_a0.append([16127, 1046527, 16769023, 1073676287])
vals_a0.append([2381, 2521, 3121, 3613])
vals_a0.append([3259, 3301, 3307, 3313])

vals_a1 = []
vals_a1.append([479, 487, 491, 499])
vals_a1.append([23497, 24571, 25117, 26227])
vals_a1.append([60493, 63949, 65713, 69313])
vals_a1.append([87178291199, 479001599, 39916801, 5039]);
vals_a1.append([13, 29, 53, 89])
vals_a1.append([433494437, 2971215073, 28657, 514229])
vals_a1.append([131071, 2147483647, 524287, 8191])
vals_a1.append([786433, 746497, 995329, 839809])
vals_a1.append([9091, 101, 333667, 9901])

# Precompute every possible scalar product. This leads to a huge performance
# gain since we only have to do sum of point from now on.
points_a0 = [[l[i]*P0 for i in range(4)] for l in vals_a0]
points_a1 = [[l[i]*P0 for i in range(4)] for l in vals_a1]


def every_sum_points(points, vals):
    """
    Quick way to compute every possible sum of points
    """
    for indexes in product(*[range(4)]*len(points)):
        res, sum_val = reduce(lambda x, y: (x[0] + y[0], x[1] + y[1]),
                [(points[i][j], vals[i][j]) for i,j in enumerate(indexes)])
        yield res, sum_val

def baby_step():
    """
    Compute every possible sum of points for the first half.
    """
    bs_set = {}
    for sum_point, sum_val in every_sum_points(points_a0, vals_a0):
        bs_set[sum_point] = sum_val
    return bs_set

def giant_step(bs_set, targets):
    """
    Compute every possible sum of points for the second half
    then try to find a collision in the baby step set.
    """
    for sum_point, sum_val in every_sum_points(points_a1, vals_a1):
        for t in targets:
            if t - sum_point in bs_set:
                return (bs_set[t - sum_point], sum_val)

def retrieve_vals(vals, sum_val):
    for v in product(*vals):
        tmp = sum(v)
        if tmp != sum_val:
            continue
            
        true_val = [84, 71, 65, 67]
        return [true_val[vals[i].index(v[i])] for i in range(len(vals))]


# Basic test vector from Cairo Playground
assert pedersen(137, 317) == (-863444159476502546088459186476947726748719122465837082380242773307767654571) % curve_characteristic

if __name__ == "__main__":
    # Compute targets
    target_x = 3329738248317886966279794942297149793815292158761370755733235303955518040301
    target_ys = compute_y(Curve, target_x)
    low_b = 317
    # trying to find a such that a*P0 = target_point - Shift - low_b*P2
    target_points = [Curve(target_x, y) - Shift - low_b*P2 for y in target_ys]

    print("[*] Running the search...")
    bs_set = baby_step()
    a0, a1 = giant_step(bs_set, target_points)

    # Check that we found the right value for a
    assert pedersen(a0 + a1, 317) == target_x

    print("[*] Retrieve the value to craft a solution to the challenge...")
    res = []
    res += retrieve_vals(vals_a0, a0)
    res += retrieve_vals(vals_a1, a1)

    print(res)
