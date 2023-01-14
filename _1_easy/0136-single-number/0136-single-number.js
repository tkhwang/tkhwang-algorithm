/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const N = nums.length;
    
    let res = 0;

    for (const num of nums) {
        res = res ^ num;
    }

    return res;
};