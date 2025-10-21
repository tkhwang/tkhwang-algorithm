/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    const set = new Set(nums);

    let cur = k;
    while (true) {
        if (!nums.includes(cur)) return cur;

        cur += k;
    }
};