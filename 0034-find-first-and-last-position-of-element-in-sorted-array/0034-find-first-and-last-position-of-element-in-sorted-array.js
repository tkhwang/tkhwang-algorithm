/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const N = nums.length;

    const bisectLeft = (array, target) => {
        const N = array.length;
        
        // [0, N)
        let left = 0;
        let right = N;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
       
            if (array[mid] >= target) right = mid;
            else left = mid + 1;
        }
        return left;
    }    

    const bisectRight = (array, target) => {
        const N = array.length;
        
        // [0, N)
        let left = 0;
        let right = N;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            
            if (array[mid] > target) right = mid;
            else left = mid + 1;
        }
        return left;
    }    

    const left = bisectLeft(nums, target);
    let right = bisectRight(nums, target);
    right -= 1;
    console.log(target, left, right)
    
    if (nums[left] !== target || nums[right] !== target) return [ -1, -1 ];
    
    return [ left, right ];
};