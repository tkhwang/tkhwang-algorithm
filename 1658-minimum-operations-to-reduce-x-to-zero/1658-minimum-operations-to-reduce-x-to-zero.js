/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    const N = nums.length;
    
    let target = x * (-1);
    
    for (const num of nums) {
        target += num;
    }
    
    if (target === 0) return N;
    
    let maxLen = 0;
    let curSum = 0;
    
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = nums[right];
        curSum += cur;
        while(left <= right && curSum > target) {
            const leftNum = nums[left];
            curSum -= leftNum;
            left += 1;
        }
        if (curSum === target) {
            maxLen = Math.max(maxLen, right - left + 1);
        }
    }
    
    return maxLen ? N - maxLen: -1;
};