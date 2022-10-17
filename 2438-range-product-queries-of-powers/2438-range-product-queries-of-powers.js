/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function(n, queries) {
    
    
    const powers = [ ];
    const MOD = 7 + 10 ** 9;
    for (let i = 0; i < 32; i += 1) {
        if (n & (1 << i)) {
            powers.push(1<<i);
        }
    }
    const N = powers.length;

//     const prefixProduct = Array(N).fill(0);

//     let product = 1;
//     for(let i = 0; i < N; i += 1) {
//         product *= powers[i];
//         prefixProduct[i] = product;
//     }

//     const result = [];
//     for (const [ start , end ] of queries) {
//         result.push((prefixProduct[end] / prefixProduct[start] * powers[start]) % MOD)
//     }
    
    const res = [];
    
    for (const [ start, end ] of queries) {
        let product = 1;
        for (let i = start; i <= end; i += 1) {
            product = (product * powers[i]) % MOD;
        }
        res.push(product);
    }
    
    return res;
};