/**
 * @param {number[]} nums
 * @return {number}
 */
var findValidSplit = function(nums) {
    const N = nums.length;
    
    const primeFactors = (n) => {
      let counts = {}
      for (let x = 2; x * x <= n; x++) {
        while (n % x === 0) {
          counts[x] = (counts[x] || 0) + 1
          n /= x
        }
      }
      if (n > 1) counts[n] = (counts[n] || 0) + 1
      return counts
    }
    
    const farIndex = {};
    for (let i = N - 1; i >= 0; i -= 1) {
        const cur = nums[i];
        const primeObj = primeFactors(cur);
        for (const prime in primeObj) {
            if (farIndex[prime] !== undefined) continue;
            farIndex[prime] = i;
        }
    }
    
    let max = 0;
    let i = 0;
    
    while (i <= max) {
        const cur = nums[i];
        const primeObj = primeFactors(cur);
        for (const prime in primeObj) {
             max = Math.max(max, farIndex[prime]);
        }
        i += 1;
    }
    return max === N - 1 ? -1 : max;
};