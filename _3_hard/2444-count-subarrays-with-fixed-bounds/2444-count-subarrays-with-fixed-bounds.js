/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    const N = nums.length;
    
    let foundMin = false;
    let foundMax = false;
    let curMinPos = -1;
    let curMaxPos = -1;
    
    let res = 0;
    let left = 0;
    for(let right = 0; right < N; right += 1) {
        const cur = nums[right];
        
        if (cur === minK) {
            foundMin = true;
            curMinPos = right;
        }
        if (cur === maxK) {
            foundMax = true;
            curMaxPos = right;
        }
        
        if (cur > maxK || cur < minK) {
            left = right + 1;
            foundMin = false;
            foundMax = false;
            curMinPos = -1;
            curMaxPos = -1;
        }
        
        if (foundMin && foundMax) {
            res += Math.min(curMinPos, curMaxPos) - left + 1;
        }
    }
    
    return res;
};