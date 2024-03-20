/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(N) {
    const prefixSum = Array(N + 1).fill(0);
    
    let sum = 0;
    for (let i = 1; i <= N; i += 1) {
        sum += i;
        prefixSum[i] = sum;
    }
    
    for (let i = 1; i <= N; i += 1) {
        const left = prefixSum[i];
        const right = prefixSum[N] - prefixSum[i-1];
        
        if (left === right) return i;
    }
    return -1;    
};