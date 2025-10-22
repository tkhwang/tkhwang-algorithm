/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const N = nums.length;

    const sum = nums.reduce((a,b) => a + b, 0);
    if (sum % 2 !== 0) return false;

    const cache = {};
    const genKey = (remain, index) => `${remain}:${index}`;

    const dfs = (remain, index) => {
        if (remain === 0) return true;
        if (remain < 0) return false;
        if (index >= N - 1) return false;
        
        const key = genKey(remain, index);
        if (cache[key] !== undefined) return cache[key];

        let temp = false;

        temp = dfs(remain, index + 1) || dfs(remain - nums[index], index + 1);

        cache[key] = temp;
        return temp;
    }

    return dfs(sum / 2, 0);
};