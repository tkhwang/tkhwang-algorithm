/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const N = nums.length;
    
    let min = Infinity
    let left = 0;
    let sum = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = nums[right];
        sum += cur;

        while (sum >= target) {
            const len = right - left + 1;
            if (min > len) min = len;
            
            const leftNum = nums[left];
            sum -= leftNum;
            left += 1;
        }
    }
    return min === Infinity ? 0 : min;
};