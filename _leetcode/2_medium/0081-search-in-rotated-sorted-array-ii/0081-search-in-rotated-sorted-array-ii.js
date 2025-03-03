/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    const index = nums.indexOf(target);
    
    return index !== -1;
};