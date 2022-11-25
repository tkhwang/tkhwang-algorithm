/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    const N = nums.length;
    
    let max = -Infinity;
    const map = new Map();
    map.set(0,  -1)
    
    let sum = 0;
    
    for (let i = 0; i < N; i += 1){
        sum += nums[i];

        if (map.has(sum - k)) {
            if (max < i - map.get(sum - k)) max = i - map.get(sum - k);
        }
        
        if (!map.has(sum)) map.set(sum, i);
    }
    
    return max === -Infinity ? 0 : max;
};