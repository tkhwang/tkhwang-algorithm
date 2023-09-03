/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function(nums) {
    const N = nums.length;
    let count = 0;
    
    for (let i = N - 2; i > -1; i += -1) {
        const nxt = nums[i+1];
        const cur = nums[i];
        const prv = nums[i-1];
        
        if (cur <= nxt) continue;
        
        const numElements = Math.floor((cur + nxt - 1) / nxt);
        count += numElements - 1;
        nums[i] = Math.floor(nums[i] / numElements);
    }
    
    return count;
};