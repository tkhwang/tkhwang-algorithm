/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const N = nums.length;

    if (N === 1) return nums[0];

    let sumSofar = 0;
    let max = -Infinity;

    for (const num of nums) {
        if (sumSofar < 0) sumSofar = 0;
        sumSofar += num;

        if (max < sumSofar) max = sumSofar
    }

    return max;
};