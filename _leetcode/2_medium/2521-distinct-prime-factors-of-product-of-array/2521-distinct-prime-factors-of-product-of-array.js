/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctPrimeFactors = function(nums) {
    const N = nums.length;
    
    const set = new Set();
    
    const primeFactors = (n) => {
      const factors = [];
      let divisor = 2;

      while (n >= 2) {
        if (n % divisor == 0) {
          factors.push(divisor);
          n = n / divisor;
        } else {
          divisor++;
        }
      }
      return factors;
    }       
    
    for (let num of nums) {
        const primes = primeFactors(num);
        for (const prime of primes) {
            set.add(prime);
        }
    }
    
    return Array.from(set).length;
};