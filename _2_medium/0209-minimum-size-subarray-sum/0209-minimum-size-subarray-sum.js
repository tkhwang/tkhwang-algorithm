/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const N = nums.length;
    
    let min = Infinity;
    let sum = 0;
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        sum += nums[right];
        
        while (sum >= target) {
            const len = right - left + 1;
            if (min > len) min = len;
            sum -= nums[left];
            left += 1;
        }
    }
    
    return min === Infinity ? 0 : min;
};