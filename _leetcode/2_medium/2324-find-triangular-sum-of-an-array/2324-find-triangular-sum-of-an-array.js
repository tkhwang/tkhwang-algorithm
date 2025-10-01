/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {

    const dfs = (array) => {
        if (array.length === 1) return array[0];

        const local = [];
        for (let i = 1; i < array.length; i += 1) {
            const prev = array[i-1];
            const curr = array[i];
            const value = (prev + curr) % 10;
            local.push(value);
        }
        return dfs(local);
    }

    return dfs(nums)
};