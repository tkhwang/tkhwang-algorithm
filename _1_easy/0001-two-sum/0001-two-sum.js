/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const N = nums.length;
    const hash = {};
    
    for (const [ i, num ] of nums.entries()) {
        if (hash[target - num] !== undefined) {
            return [ hash[target-num], i ];
        } else {
            hash[num] = i;
        }
    }
};