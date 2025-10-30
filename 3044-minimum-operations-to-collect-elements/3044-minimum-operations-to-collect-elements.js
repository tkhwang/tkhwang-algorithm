/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const N = nums.length;

    const targets = Array(k).fill(null).map((v, i) => i + 1);

    const set = new Set(targets);

    let count = 0;
    for (let i = N - 1; i >= 0; i -= 1) {
        count += 1;

        const cur = nums[i];
        if (set.has(cur)) set.delete(cur);
        if (set.size === 0) return count;
    }

};