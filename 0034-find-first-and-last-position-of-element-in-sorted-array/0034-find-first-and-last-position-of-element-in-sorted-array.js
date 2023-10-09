/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const leftBound = (array, target, left = 0, right = array.length) => {
      // [left, right)

      while (left < right) {
        const mid = Math.floor((left + right) / 2)

        if (array[mid] >= target) {
          right = mid
        } else {
          left = mid + 1
        }
      }
      // index
      // return left

      // check whether array[left] === target
      if (left === array.length) return -1
      return array[left] === target ? left : -1
    }
    
    const rightBound = (array, target, left = 0, right = array.length) => {
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
      // right-most
      // return left - 1

      // check whether array[left -1] === target
      if (left === 0) return -1;
      return array[left-1] === target ? left -1 : -1
    }
    
    for (const num of nums) {
        const left = leftBound(nums, target);
        const right = rightBound(nums, target);
        
        if (left !== -1 && right !== -1) return [ left, right ];
    }
    return [ -1, -1 ];
};