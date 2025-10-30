/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    const N = nums.length;
    let count = 0;

    for (let i = 0; i < N; i += 1) {
        const window = {};
        for (let j = i; j < N; j += 1) {
            const cur = nums[j];
            window[cur] = (window[cur] ?? 0) + 1;
            const uniuqNumCount = Object.keys(window).length;
            count += uniuqNumCount * uniuqNumCount;
        }
    }
    return count;
};