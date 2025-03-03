/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const N = trust.length;
    
    const inorders = {};
    const outorders = {};
    for (let i = 1; i <= n; i += 1) {
        inorders[i] = 0;
        outorders[i] = 0;
    }
    
    for (const [ u, v ] of trust) {
        inorders[v] += 1;
        outorders[u] += 1;
    }
    
    for (let i = 1; i <= n; i += 1) {
        if (inorders[i] === n -1 && outorders[i] === 0) return i;
    }
    
    return -1;
};