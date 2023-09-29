/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    const n = nums.length;
    let direction = null;
    
    for (let i = 1; i < n; i += 1) {
        if (nums[i-1] === nums[i]) continue;
        
        if (!direction) {
            direction = nums[i-1] < nums[i] ? +1 : -1;
        } else {
            if (direction === 1) {
                if (!(nums[i-1] < nums[i])) return false;
            } else {
                if (!(nums[i-1] > nums[i])) return false;
            }
        }
    }
    return true;
};