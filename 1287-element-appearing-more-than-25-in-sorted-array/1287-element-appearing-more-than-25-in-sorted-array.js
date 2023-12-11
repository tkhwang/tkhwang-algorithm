/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const N = arr.length;
    
    const fourth = Math.floor(N / 4);
    
    for (let i = 0; i < N - fourth; i += 1) {
        const j = i + fourth;
        
        if (arr[i] === arr[j]) return arr[i];
    }
    
    return -1;
};