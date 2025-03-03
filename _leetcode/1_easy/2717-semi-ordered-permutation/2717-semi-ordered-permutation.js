/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function(nums) {
    const N = nums.length;
    let res = 0;
    
    for (let i = 0; i < N - 1; i++) {
      if (nums[i] === N) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        res++;
      }
    }
    
    for (let i = N - 1; i > 0; i--) {
      if (nums[i] === 1) {
        [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
        res++;
      }
    }
    
    return res;    
};