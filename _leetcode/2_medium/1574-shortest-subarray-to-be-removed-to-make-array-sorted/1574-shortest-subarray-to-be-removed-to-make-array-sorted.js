/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
    const N = arr.length;
    
    let left = 0;
    let right = N - 1;
    
    while (left + 1 < N && arr[left] <= arr[left + 1]) left += 1;
    if (left === N - 1) return 0;
    
    while (0 <= right & arr[right -1] <= arr[right]) right -= 1;
    
    let res = Math.min(right, N - left - 1);
    
    let i = 0;
    let j = right;
    
    while (i <= left && j < N) {
        if (arr[i] <= arr[j]) {
            res = Math.min(res, j - i - 1);
            i += 1;
        } else {
            j += 1;
        }
    }
    
    return res;
};