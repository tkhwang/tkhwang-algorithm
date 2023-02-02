/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const N = nums.length;
    
    // nums.sort((a,b) => a - b);
    
    const merge = (left, right) => {
        const res = [];
        
        const NL = left.length;
        const NR = right.length;
        
        let i = 0;
        let j = 0;
        
        while (i < NL && j < NR) {
            if (left[i] <= right[j]) {
                res.push(left[i]);
                i += 1;
            } else {
                res.push(right[j]);
                j += 1;
            }
        }
        
        return [
            ...res,
            ...left.slice(i),
            ...right.slice(j)
        ]
    }
    
    const mergeSort = (array) => {
        if (array.length < 2) return array;
            
        const mid = Math.floor(array.length / 2);
        
        return merge(
            mergeSort(array.slice(0, mid)),
            mergeSort(array.slice(mid))
        )
    }
    
    mergeSort(nums)
    
    let left = 0;
    let right = N- 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        }
    }
    
    return left;
};