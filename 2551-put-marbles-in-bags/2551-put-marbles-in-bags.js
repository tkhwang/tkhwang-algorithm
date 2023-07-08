/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
    const N = weights.length;
    
    const arraySum = (array) => array.reduce((a,b) => a + b, 0);
    
    const candidates = [];
    for (let i = 1; i < N; i += 1) {
        candidates.push(weights[i-1] + weights[i]);
    }
    
    candidates.sort((a,b) => a - b);
    

    return arraySum(candidates.slice(candidates.length - (k-1))) -
           arraySum(candidates.slice(0, k-1));
};