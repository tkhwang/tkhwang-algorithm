/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    const result = [];
    let cur = 0; 

    for (let bit of nums) {
        cur = (cur * 2 + bit) % 5;
        result.push(cur === 0);
    }

    return result;
};