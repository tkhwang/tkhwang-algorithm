/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const N = nums.length;
    
    const array = Array(N + 1).fill(0);
    array[0] = -1;
    
    for (const num of nums) {
        array[num] += 1;
    }
    
    const res = Array(2);
    const DUP = 0;
    const MISS = 1;

    for (let i = 1; i <= N; i += 1) {
        if (array[i] === 0) res[MISS] = i;
        else if (array[i] === 2) res[DUP] = i;
    }
    
    return res;    
};