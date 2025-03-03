/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(nums) {
    const N = nums.length;
    const stack = [];
    const MOD = 7 + 10 ** 9;
    
    let res = 0;
    for (let i = 0; i <= N; i += 1) {
        while (stack.length && (i === N || nums[stack.at(-1)] >= nums[i])) {
            const mid = stack.pop();
            
            const before = stack.length === 0 ? -1 : stack.at(-1);

            res += nums[mid] * (mid - before) * (i - mid) % MOD;
        }
        stack.push(i)
    }
    return res % MOD;
};