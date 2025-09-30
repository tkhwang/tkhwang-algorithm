/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for (const [ index, num ] of nums.entries()) {
        if (map.has(target - num)) {
            return [ map.get(target - num), index]
        } else {
            map.set(num, index);
        }
    }
    return [];
};