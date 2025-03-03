/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    const N = values.length;
    
    let maxFromLeft = -Infinity;
    let max = -Infinity;
    
    for (let i = 0; i < N; i += 1) {
        max = Math.max(maxFromLeft + values[i] - i, max)
        maxFromLeft = Math.max(maxFromLeft, values[i] + i);
            
    }
    return max;
};