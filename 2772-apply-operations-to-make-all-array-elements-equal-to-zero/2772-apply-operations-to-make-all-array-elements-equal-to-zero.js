/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkArray = function(nums, k) {
    const N = nums.length;

    let cur = 0;
    for (const [ i, num ] of nums.entries()) {
        if (cur > num) return false;
        
        nums[i] -= cur;
        cur += nums[i];
        
        if (i >= k - 1) {
            cur -= nums[i - k + 1];
        }
    }
    
    return cur === 0;
};