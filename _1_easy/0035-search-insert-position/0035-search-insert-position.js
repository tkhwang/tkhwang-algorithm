/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
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
    
    return bisectLeft(nums, target);
};