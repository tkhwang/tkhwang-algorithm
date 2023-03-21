/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    const N = nums.length;

    let res = 0;
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = nums[right];
        
        if (cur !== 0) {
            left = right + 1;
            continue;
        }
        
        res += right - left + 1;
    }
    
    return res;
};