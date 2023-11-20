/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
    const N = nums.length;
    
    nums.sort((a,b) => a - b);
    let res = 0;
    
    for (let i = N - 1; i > 0; i -= 1) {
        if (nums[i -1] !== nums[i]) {
            res += N - i;        
        }
    }
    
    return res;
};