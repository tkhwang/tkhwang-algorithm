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
    
    console.log(inorders, outorders)
    
    const candidates = Object.keys(inorders).filter((key) => inorders[key] === n - 1);
    
    console.log(candidates);
    
    if (candidates.length === 0) return -1;
    
    const m = candidates.filter((key) => outorders[key] === 0)    

    return m.length === 0 ? -1 : m[0];
};