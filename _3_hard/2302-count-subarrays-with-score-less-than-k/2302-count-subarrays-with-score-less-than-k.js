/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    const N = nums.length;
    
    let sum = 0;
    let left = 0;
    let count = 0;
    
    for (let right = 0; right < N; right += 1) {
        sum += nums[right];
        let len = right - left + 1;
        
        while (sum * len >= k) {
            sum -= nums[left];
            left += 1;
            len -= 1;
        }
        
        count += (right - left + 1);
    }
    
    return count;
};