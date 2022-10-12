/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    const N = nums.length;
    
    nums.sort((a,b) => a - b);
    
    for (let i = N-1; i >= 2; i -= 1) {
        const cur = nums[i];
        const prv = nums[i-1];
        const prvprv = nums[i-2];
        
        if (prv + prvprv > cur) return cur + prv + prvprv;
    }
    
    return 0;
};