/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    const N = arr.length;
    
    for (let i = 1; i < N - 1; i += 1) {
        if (arr[i-1] < arr[i] && arr[i] > arr[i+1]) return i;
    }
    return -1;
};