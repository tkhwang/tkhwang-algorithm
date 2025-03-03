/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    const N = arr.length;
    let sum = 0;
    
    for (let i = 0; i < N; i += 1) {
        for (let j = i; j < N; j += 2) {
            const sub = arr.slice(i, j + 1);
            sum += sub.reduce((a,b) => a + b, 0)        ;
        }
    }
    return sum;
};