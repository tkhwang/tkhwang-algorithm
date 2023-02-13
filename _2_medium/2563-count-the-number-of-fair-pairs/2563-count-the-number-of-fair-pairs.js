/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {

    const bisectLeft = (array, target, left = 0, right = array.length) => {
      // [left, right) half inclusive range

      while (left < right) {
        const mid = Math.floor((left + right) / 2)

        // left-most
        if (array[mid] >= target) {
          right = mid
        } else {
          left = mid + 1
        }
      }
      return left
    }
    
    const bisectRight = (array, target, left = 0, right = array.length) => {
      // [left, right) half inclusive range
      while (left < right) {
        const mid = Math.floor((left + right) / 2)

        // right-most
        if (array[mid] > target) {
          right = mid
        } else {
          left = mid + 1
        }
      }
      return left
    }

    const N = nums.length;
    
    nums.sort((a,b) => a - b);
    
    let res = 0;
    
    
    for (let i = 0; i < N; i += 1) {
        const num = nums[i];
        
        let left = bisectLeft(nums, lower - num, 0, i);
        let right = bisectRight(nums, upper - num, 0, i);
        
        res += right - left;
    }
    
    return res;
};