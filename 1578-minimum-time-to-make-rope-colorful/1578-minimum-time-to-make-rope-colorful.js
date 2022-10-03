/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    const N = colors.length;
    let prvIndex = 0;
    let res = 0;
    
    for (let i = 1; i < N; i += 1) {
        const cur = colors[i];
        
        if (colors[prvIndex] !== cur)  {
            prvIndex = i;
            continue;
        } 
        
        if (neededTime[prvIndex] > neededTime[i]) {
            res += neededTime[i];
        } else {
            res += neededTime[prvIndex];
            prvIndex = i;
        }
    }
    
    return res;
};