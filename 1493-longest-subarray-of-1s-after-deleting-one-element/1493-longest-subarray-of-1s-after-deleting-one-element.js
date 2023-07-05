/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const n = nums.length;
    let max = -Infinity;
    const freq = {};
    let left = 0;
    
    for (let right = 0; right < n; right += 1) {
        const rightNum = nums[right];
        freq[rightNum] = (freq[rightNum] || 0) + 1;
        
        while (freq["0"] > 1) {
            const leftNum = nums[left];
            
            freq[leftNum] -= 1;
            if (freq[leftNum] === 0) delete freq[leftNum];
            left += 1;
        }
        
        // const length = (right - left + 1) - Number(freq["0"]);
        const length = (right - left + 1) - 1
        if (max < length) max = length;
    }
    return max === -Infinity ? 0 : max;
};