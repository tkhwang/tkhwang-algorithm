/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const N = nums.length;
    
    const freq = {};
    let max = -Infinity;
    
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = nums[right];
        freq[cur] = (freq[cur] || 0) + 1;

        while (freq[0] > 1) {
            const leftCh = nums[left];
            
            freq[leftCh] -= 1;
            if (freq[leftCh] === 0) delete freq[leftCh];
            
            left += 1;
        }
        
        if (max < right - left + 1) max = right - left + 1;
    }
    return max;
};