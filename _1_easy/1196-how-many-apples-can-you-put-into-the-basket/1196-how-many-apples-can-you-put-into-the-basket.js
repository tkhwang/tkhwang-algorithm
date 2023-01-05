/**
 * @param {number[]} weight
 * @return {number}
 */
var maxNumberOfApples = function(weight) {
    const N = weight.length;
    
    weight.sort((a,b) => a - b);
    const LIMIT = 5000;
    
    let i = 0;
    let sum = 0;
    while (i < N) {
        sum += weight[i];
        if (sum > LIMIT) return i;
        i += 1;
    }
    return i;
};