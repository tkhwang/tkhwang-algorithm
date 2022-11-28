/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    const N = nums.length;
    
    const calc = (sum, left, right) => sum * (right - left + 1);
    
    let count = 0;
    let sum = 0;
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = nums[right];
        sum += cur;
        
        let value = calc(sum, left, right);
        while (value >= k) {
            const leftNum = nums[left];
            sum -= leftNum;
            left += 1;
            value = calc(sum, left, right);
        }
        count += right - left + 1;
    }
    return count;
};