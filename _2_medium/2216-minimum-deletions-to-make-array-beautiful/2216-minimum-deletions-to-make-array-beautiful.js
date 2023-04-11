/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function(nums) {
    const N = nums.length;
    
    let count = 0;

    for (let i = 1; i < N; i += 1) {
        const prv = nums[i-1];
        const cur = nums[i];
        
        if (prv === cur && (i - count) % 2 === 1) {
            count += 1;
        }
    }
    
    if ((N - count) % 2 === 1) count += 1;
    
    return count;
};