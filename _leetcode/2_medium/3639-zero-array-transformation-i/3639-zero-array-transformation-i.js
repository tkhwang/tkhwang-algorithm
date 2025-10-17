/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    const N = nums.length;

    const diff = new Array(N + 1).fill(0);

    for (const [ left, right ] of queries) {
        diff[left] += 1;
        if (right + 1 < N) diff[right + 1] -= 1;
    }

    let cover = 0;

    for (let i = 0; i < N; i += 1) {
        cover += diff[i];
        if (cover < nums[i]) return false;
    }
    return true;
};