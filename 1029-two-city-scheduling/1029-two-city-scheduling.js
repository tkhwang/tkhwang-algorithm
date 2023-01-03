/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    const N = costs.length;
    
    const updated = costs.map((v,i) => [i, ...v]);
    
    updated.sort((a,b) => (a[2] - a[1]) - (b[2] - b[1]));
    
    let sum = 0;
    for (let i = 0; i < Math.floor(N/2); i += 1) {
        sum += updated[i][2];
    }
    for (let i = Math.floor(N/2); i < N; i += 1) {
        sum += updated[i][1];
    }
    return sum;
};