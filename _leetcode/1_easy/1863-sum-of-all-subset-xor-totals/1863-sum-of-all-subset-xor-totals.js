/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    const N = nums.length;

    const dfs = (index, upto) => {
        if (index >= N) return upto;

        return dfs(index + 1, upto) + 
               dfs(index + 1, upto ^ nums[index]);
    }

    return dfs(0, 0);
};