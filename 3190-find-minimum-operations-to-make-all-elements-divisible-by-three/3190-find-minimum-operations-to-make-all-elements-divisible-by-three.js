/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    return nums.map((num) => Math.min(
        num % 3,
        3 - (num % 3)
    ))
    .reduce((a,b) => a + b, 0);
};