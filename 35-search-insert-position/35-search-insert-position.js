/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const n = nums.length;
    
    let left = 0;
    let right = n;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] >= target) right = mid;
        else left = mid + 1;
    }
    
    return left;
};