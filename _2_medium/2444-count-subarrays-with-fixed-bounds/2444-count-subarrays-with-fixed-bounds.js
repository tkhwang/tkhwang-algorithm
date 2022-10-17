/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    const N = nums.length;
    
    let minFound = false;
    let maxFound = false;
    let minCurIndex = -1;
    let maxCurIndex = -1;

    let res = 0;
    
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = nums[right];
        
        if (cur === minK) {
            minFound = true;
            minCurIndex = right;
        }
        if (cur === maxK) {
            maxFound = true;
            maxCurIndex = right;
        }
        
        if (cur < minK || cur > maxK) {
            left = right + 1;
            minFound = false;
            maxFound = false;
            minCurIndex = -1;
            maxCurIndex = -1;
        }

        if (minFound && maxFound) {
            res += Math.min(minCurIndex, maxCurIndex) - left + 1;
        }
    }
    
    return res;
};