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

    const isPowerOfTwo = (n) => (Math.log(n)/Math.log(2)) % 1 === 0
    
    const N = powers.length;
    const prefixProduct = Array(N).fill(0);

    let product = 1;
    for(let i = 0; i < N; i += 1) {
        product *= powers[i];
        prefixProduct[i] = product;
    }

    const result = [];
    for (const [ start , end ] of queries) {
        result.push((prefixProduct[end] / prefixProduct[start] * powers[start]) % MOD)
    }
    
    return result;
};