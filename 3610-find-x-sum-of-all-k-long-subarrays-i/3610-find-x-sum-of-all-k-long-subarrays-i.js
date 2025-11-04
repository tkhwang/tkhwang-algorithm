/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    const N = nums.length;

    const result = [];
    const window = {};

    const checkWindow = (start, width, howMany) => {
        const freq = {};
        for (let i = start; i < start + width; i += 1) {
            const cur = nums[i];
            freq[cur] = (freq[cur] ?? 0) + 1;
        }

        const keys = Object.keys(freq).map(Number);
        keys.sort((a,b) => (freq[b] - freq[a]) || (b - a));

        const mostFreqs = keys.slice(0, howMany).map(Number);
        return mostFreqs.map((value) => value * freq[value]).reduce((a,b) => a + b, 0);
    }

    for (let i = 0; i <= N - k; i += 1) {
        const mostSum = checkWindow(i, k, x);
        result.push(mostSum)
    }

    return result;
};