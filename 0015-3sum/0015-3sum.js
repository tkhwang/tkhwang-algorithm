/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const N = nums.length;
    
    nums.sort((a,b) => a - b);
    
    const res = [];
    
    const twoSum = (left, right, target) => {
        while (left < right) {
            const leftValue = nums[left];
            const rightValue = nums[right];
            
            const sum = leftValue + rightValue;
            
            if (sum > target) {
                while (left < right && nums[right] === rightValue) right -= 1;
            } else if (sum < target) {
                while (left < right && nums[left] === leftValue) left += 1;
            } else if (sum === target) {
                res.push([ -target, nums[left], nums[right] ]);
                while (left < right && nums[right] === rightValue) right -= 1;
                while (left < right && nums[left] === leftValue) left += 1;
            }
        }
    }
    
    for (let i = 0; i < N; i += 1) {
        const cur = nums[i];
        
        twoSum(i+1, N-1, -cur);
        
        while (i < N && nums[i] === nums[i+1]) i += 1;
    }
    
    return res;
};