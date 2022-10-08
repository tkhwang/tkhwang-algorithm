/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const N = nums.length;
    
    nums.sort((a,b) => a - b);
    let min = Infinity;
    let minValue;
    
    for (let i = 0; i < N; i += 1) {
        let left = i + 1;
        let right = N -1;
        
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (min > Math.abs(target - sum)) {
                min = Math.abs(target - sum);
                minValue = sum;
            }            
            
            if (sum === target) return target
            else if (sum > target) {
                right -= 1;
            } else if (sum < target) {
                left += 1;
            }
        }
    }
    
    return minValue;
};