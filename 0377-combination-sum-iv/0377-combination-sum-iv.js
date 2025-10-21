/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const N = nums.length;

    const cache = {};

    const backtrack = (remain) => {
        if (remain < 0) return 0;
        if (remain === 0) return 1;

        if (cache[remain] !== undefined) return cache[remain];

        let count = 0;    
        for (const num of nums) {
            if (remain - num < 0) continue;
            count += backtrack(remain - num)
        }
        cache[remain] = count;
        return count;
    }

    return backtrack(target)
};