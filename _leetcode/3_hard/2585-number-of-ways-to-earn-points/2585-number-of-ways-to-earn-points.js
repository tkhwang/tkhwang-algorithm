/**
 * @param {number} target
 * @param {number[][]} types
 * @return {number}
 */
var waysToReachTarget = function(target, types) {
    const N = types.length;
    const MOD = 7 + 10 ** 9;
    
    const cache = {};
    const genKey = (remain, index) => `${remain}:${index}`;
    
    const dfs = (remain, index) => {
        if (remain === 0) return 1;
        if (index >= N) return 0;
        if (cache[genKey(remain, index)] !== undefined) return cache[genKey(remain, index)];
        
        const [ count, marks ] = types[index];
        
        let total = 0;
        for (let c = 0; c <= count; c += 1) {
            if (remain - c * marks >= 0) total += dfs(remain - c * marks, index + 1);
            else break;
        }
        return cache[genKey(remain, index)] = total % MOD;
    }
    
    return dfs(target, 0) % MOD;
};