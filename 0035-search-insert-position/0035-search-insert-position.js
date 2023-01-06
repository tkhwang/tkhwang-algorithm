/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    const bisect = (array, target) => {
        const N = array.length;
        
        // [left, right]
        let left = 0;
        let right = N-1;
        
        while (left <= right) {
            const mid = Math.floor((left + right)/2);
            
            if (array[mid] === target) return mid;
            else if (array[mid] > target) {
                right = mid - 1;    
            } else if (array[mid] < target) {
                left = mid + 1;
            }
        }
        // insertion point
        return left;
    }
    
    const N = nums.length;
    
    let left = 0;
    let right = N - 1;
    
    return bisect(nums, target);    
};