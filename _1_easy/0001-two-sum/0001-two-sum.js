/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const cache = {};
    
    for (const [ i, num ] of nums.entries()) {
        if (cache[target - num] !== undefined) { 
             return [ cache[target - num], i ];
        } else {
            cache[num] = i;
        }
    }
};