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
            const mid = Math.floor((left + right)/2);
            
            // => [left, mid)
            if (array[mid] === target) {
                right = mid;
            // select left space => [left, mid)
            } else if (array[mid] > target) {
                right = mid;
            // select right space => [mid + 1, right)
            } else if (array[mid] < target) {
                left = mid + 1;
            }
        }
        return left;
    }    

    const bisectRight = (array, target) => {
        const N = array.length;
        
        // [0, N)
        let left = 0;
        let right = N;
        
        while (left < right) {
            const mid = Math.floor((left + right)/2);
            
            // [mid+1, right)
            if (array[mid] === target) {
                left = mid + 1;
            // select left space => 
            } else if (array[mid] > target) {
                right = mid;
            // select right space => 
            } else if (array[mid] < target) {
                left = mid + 1;
            }
        }
        return left - 1;
    }    

    const left = bisectLeft(nums, target);
    const right = bisectRight(nums, target);
    
    if (nums[left] !== target || nums[right] !== target) return [ -1, -1 ];
    
    return [ left, right ];
};