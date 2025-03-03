/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    const N = nums.length;
    
    nums.sort((a,b) => a - b);

    let left = 0;
    let right = Math.max(...nums) - Math.min(...nums);
    
    const isOK = (limit) => {
        let count = 0;

        let left = 0;
        for (let right = 0; right < N; right += 1) {
            while (nums[right] - nums[left] > limit) left += 1;
            count += right - left;
        }
        return count >= k;
    }
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (isOK(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};