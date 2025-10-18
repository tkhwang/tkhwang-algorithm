/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function(nums, k) {
    const N = nums.length;

    nums.sort((a,b) => a - b);

    let last = -Infinity;
    let count = 0;

    for (const num of nums) {
        let min = num - k;
        let max = num + k;

        let target = Math.max(min, last + 1);

        if (target <= max) {
            last = target;
            count += 1;
        }
    }
    
    return count;
};