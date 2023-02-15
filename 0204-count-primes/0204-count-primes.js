/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(N) {
    const seen = Array(N + 1).fill(false);
    let count = 0;
    
    for (let p = 2; p <= Math.sqrt(N) + 1; p += 1) {
        if (seen[p]) continue;
        
        for (let i = p * p; i < N; i += p) {
            seen[i] = true;
        }
    }
    
    for (let p = 2; p < N; p += 1) {
        if (!seen[p]) count += 1;
    }
    
    return count;
};