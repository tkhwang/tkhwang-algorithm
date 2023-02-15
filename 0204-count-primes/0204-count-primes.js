/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(N) {
    const seen = Array(N + 1).fill(false);
    let count = 0;
    
    for (let p = 2; p < N; p += 1) {
        if (seen[p]) continue;
        
        count += 1;
        
        for (let i = p * p; i < N; i += p) {
            seen[i] = true;
        }
    }

    return count;
};