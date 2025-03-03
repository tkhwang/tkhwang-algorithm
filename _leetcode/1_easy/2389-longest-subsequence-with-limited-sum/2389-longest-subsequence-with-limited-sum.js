/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a,b) => a - b);
    const result = [];
    
    for (const query of queries) {
        let sum = 0;
        let i = 0;
        let width = 0;
        while (sum <= query) {
            sum += nums[i];
            width = i;
            i += 1;
        }
        result.push(width);
    }
    return result;    
};