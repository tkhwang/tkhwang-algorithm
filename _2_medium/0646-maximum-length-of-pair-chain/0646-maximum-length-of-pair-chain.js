/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    const N = pairs.length;
    
    pairs.sort((a,b) => a[1] - b[1]);

    let count = 1;
    let prv = pairs[0];
    
    for (let i = 1; i < N; i += 1) {
        const [ prvStart, prvEnd ] = prv;
        const [ start, end ] = pairs[i];
        
        if (prvEnd < start) {
            count += 1;
            prv = pairs[i];
        }
    }
    
    return count;
};