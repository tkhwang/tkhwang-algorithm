/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    const MOD = 7 + 10 ** 9;
    const cache = {};
    const genKey = (sum, times) => `${sum}:${times}`;
    
    const dfs = (sum, times) => {
        const key = genKey(sum, times);
        
        if (times === 0) {
            if (sum === 0) return 1;
            else 0;
        }
        if (sum < 0 || times < 0) return 0;
        if (cache[key] !== undefined) return cache[key];
        
        let res = 0;
        for (let i = 1; i <= k; i += 1) {
            res += dfs(sum - i, times - 1) % MOD;
        }
        return cache[key] = res % MOD;
    }
    
    return dfs(target, n)    
};