/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const set = new Set();
    const result = [];

    for (const num of nums) {
        if (set.has(num)) {
            result.push(num);
        } else {
            set.add(num);
        }
    }
    return result;
};