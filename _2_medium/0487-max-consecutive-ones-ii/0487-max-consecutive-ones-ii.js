/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const N = nums.length;
    
    const freq = {};
    let left = 0;
    let max = -Infinity;
    
    for (let right = 0; right < N; right += 1) {
        const cur = nums[right];
        freq[cur] = (freq[cur] || 0) + 1;
        while (freq["0"] > 1) {
            const leftNum = nums[left];
            
            freq[leftNum] -= 1;
            if (freq[leftNum] === 0) delete freq[leftNum];
            
            left += 1;
        }
        max = Math.max(max, right - left + 1);
    }
    
    return max;
};