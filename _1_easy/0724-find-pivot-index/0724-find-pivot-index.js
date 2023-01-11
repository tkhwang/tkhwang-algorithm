/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const N = nums.length;

    const totalSum = nums.reduce((a,b) => a + b, 0);
    
    let sum = 0;
    
    for (let i = 0; i < N; i += 1) {
        const leftSum = sum;
        const rightSum = totalSum - leftSum - nums[i];
        
        if (leftSum === rightSum) return i;
        
        sum += nums[i];
    }
    
    return - 1;
};