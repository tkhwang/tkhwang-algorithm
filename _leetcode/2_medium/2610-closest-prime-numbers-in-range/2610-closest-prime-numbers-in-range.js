/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
  let prevPrime = -1;
  let bestPair = [-1, -1];
  let minDiff = Infinity;
  
  for (let num = left; num <= right; num++) {
    if (isPrime(num)) {
      if (prevPrime !== -1) {
        let diff = num - prevPrime;
        if (diff < minDiff) {
          minDiff = diff;
          bestPair = [prevPrime, num];
          // The smallest possible difference between two primes is 2 (twin primes)
          if (minDiff === 2) {
            return bestPair;
          }
        }
      }
      prevPrime = num;
    }
  }
  
  return bestPair;    
};

function isPrime(n) {
  if (n < 2) return false;
  // Only check up to the square root of n.
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}