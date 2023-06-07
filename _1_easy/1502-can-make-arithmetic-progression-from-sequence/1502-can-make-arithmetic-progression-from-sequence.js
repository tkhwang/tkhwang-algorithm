/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    const N = arr.length;
    
    arr.sort((a,b) => a - b);
    
    const diff = arr[1] - arr[0];
    
    for (let i = 2; i < N; i += 1) {
        if (arr[i] - arr[i-1] !== diff) return false;
    }
    
    return true;    
};