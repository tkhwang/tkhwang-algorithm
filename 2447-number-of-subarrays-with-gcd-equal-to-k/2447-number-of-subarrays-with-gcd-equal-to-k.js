/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayGCD = function(nums, k) {
    const N = nums.length;

    const getGCD = (num1, num2) => num2 > 0 ? getGCD(num2, num1 % num2) : num1;
    
    let count = 0;
    let gcd = -1;
    for (let i = 0; i < N; i += 1) {
        let gcd = nums[i];
        for (let j = i; j < N; j += 1) {
            if (gcd >= nums[j]) {
                gcd = getGCD(gcd, nums[j]);
            } else {
                gcd = getGCD(nums[j], gcd);
            }
            
            if (gcd === k) count += 1;
            else if (gcd < k) break;
        }
    }
    return count;
};