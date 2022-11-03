/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let sum = 0;
    let min = 0;
    for (const num of nums) {
        sum += num;
        min = Math.min(min, sum);
    }
    return -min + 1;
};