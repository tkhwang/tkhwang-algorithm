/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const seen = Array(n);
    let count = 0;
    
    for (let i = 2; i < n; i += 1) {
        if (seen[i]) continue;
        
        count += 1;
        for (let j = i*i; j < n; j += i) {
            seen[j] = true;
        }
    }
    return count;
};