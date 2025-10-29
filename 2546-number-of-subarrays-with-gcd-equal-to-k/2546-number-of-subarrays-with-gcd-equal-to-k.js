/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayGCD = function(nums, k) {
    const N = nums.length;

    const gcd = (a,b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    }

    let count = 0;
    
    for (let left = 0; left < N; left++) {
        let currentGCD = 0;  
        for (let right = left; right < N; right++) {
            currentGCD = gcd(currentGCD, nums[right]);
            
            if (currentGCD === k) count++;
            // else if (currentGCD < k) break;
        }
    }
    return count;
};