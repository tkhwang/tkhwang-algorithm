/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    const MOD = 7 + 10 ** 9;
    const cache = {};
    
    const dfs = (cur) => {
        if (cur > high) return 0;
        if (cache[cur] !== undefined) return cache[cur];
        
        let res = 0;
        
        if (low <= cur && cur <= high) res += 1;
        
        res += dfs(cur + zero);
        res += dfs(cur + one);
        res %= MOD;
        
        return cache[cur] = res;
    }
    
    return dfs(0) % MOD;
};