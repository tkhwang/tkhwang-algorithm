/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
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

    const N = nums.length;
    
    nums.sort((a,b) => a - b);
    
    let sum = 0;
    
    for (let i = 0; i < N - 2; i += 1) {
        for (let j = i + 1; j < N - 1; j += 1) {
            let index = bisectLeft(nums, nums[i] + nums[j], j + 1);
            index -= (j + 1);
            sum += index;
        }
    }
    return sum;
};