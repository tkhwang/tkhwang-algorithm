/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    const N = pairs.length;
    
    pairs.sort((a,b) => a[1] - b[1]);
    let end = pairs[0][1];
    
    let res = 1;
    
    for (let i = 1; i < N; i += 1) {
        const [ curStart, curEnd ] = pairs[i];

        if (end >= curStart) continue;
        
        res += 1;
        end = curEnd;
    }
    
    return res;
};