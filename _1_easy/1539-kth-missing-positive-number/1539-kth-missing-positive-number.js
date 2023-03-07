/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    const N = arr.length;
    
    let left = 0;
    let right = N - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] - mid - 1 < k) left = mid + 1;
        else right = mid - 1;
    }
    
    return left + k;
};