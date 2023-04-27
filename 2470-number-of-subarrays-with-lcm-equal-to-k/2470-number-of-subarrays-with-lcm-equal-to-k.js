/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayLCM = function(nums, k) {
    const getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1)
    const getLCM = (num1, num2) => num1 * num2 / getGCD(num1, num2);
    
    const N = nums.length;
    let res = 0;
    for (let i = 0; i < N; i += 1) {
        let cur = 1;
        for (let j = i; j < N; j += 1) {
            if (k % nums[j] !== 0) break;
            cur = getLCM(cur, nums[j]);
            res += (cur === k ? 1 : 0)
        }
    }
    return res;
};