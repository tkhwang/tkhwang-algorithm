/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const N = nums.length;
    
    nums.sort((a,b) => a - b);

    const res = [];
    
    const twoSum = (mid, left, target) => {
        let right = N - 1;
        
        while (left < right) {
            const sum = nums[left] + nums[right];
            
            if (sum < target) {
                left += 1;
            } else if (sum > target) {
                right -= 1;
            } else {
                res.push([ nums[mid], nums[left], nums[right] ]) ;
                left += 1;
                right -= 1;
                while (left < right && nums[left] === nums[left - 1]) left += 1;
            }
        }
    }
    for (let i = 0; i < N; i += 1) {
        const cur = nums[i];
        
        if (i === 0 || nums[i-1] !== nums[i]) {
            twoSum(i, i + 1, -cur);
        }
    }
    
    return res;
};