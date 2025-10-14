/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(N) {
    const primes = Array(N + 1).fill(true);
    primes[0] = false;
    primes[1] = false;

    for (let i = 2; i < Math.sqrt(N) + 1; i += 1) {
        if (primes[i]) {
            for (let j = i * i; j < N; j += i) {
                primes[j] = false;
            }
        }
    }
    
    let count = 0;
    for (let i = 2; i < N; i += 1) {
        if (primes[i]) count += 1;
    }
    return count;
};