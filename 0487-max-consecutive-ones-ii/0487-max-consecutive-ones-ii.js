/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const N = nums.length;
    
    let max = -Infinity;
    const freq = {};
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = nums[right];
        freq[cur] = (freq[cur] || 0) + 1;
        while (freq["0"] > 1) {
            freq[nums[left]] -= 1;
            if (freq[nums[left]] === 0) delete freq[nums[left]];
            left += 1;
        }
        if (right - left + 1 > max) max = right - left + 1;
    }
    
    return max;
};