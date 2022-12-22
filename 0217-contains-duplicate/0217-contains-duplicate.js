/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const obj = {};
    for (const [ i, num ] of nums.entries()) {
        if (obj[num] === undefined) obj[num] = i;
        else return true;
    }
    return false;
};