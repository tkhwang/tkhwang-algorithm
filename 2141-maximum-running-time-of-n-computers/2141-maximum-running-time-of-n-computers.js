/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function(N, batteries) {
    batteries.sort((a,b) => a - b)
    
    let sum = batteries.reduce((a,b) => a + b, 0);
    
    while (batteries.at(-1) > sum / N) {
        N -= 1;
        sum -= batteries.pop();
    }
    
    return Math.floor(sum / N);
};