/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(N) {
    const seen = Array(N+1).fill(false);
    let count = 0;
    
    for (let i = 2; i < N; i += 1) {
        if (seen[i]) continue;
        
        count += 1;
        
        for (let j = i * i; j < N; j += i) {
            seen[j] = true;
        }
    }
    
    return count;
};