/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(N) {
    const MOD = 7 + 10 ** 9;
    

    const dp = Array(N).fill(null).map((_) => Array(4));
    const makeState = (t1, t2) => {
        let state = 0;
        if (t1) state |= 1;
        if (t2) state |= 1 << 1;
        return state;
    }
    
    const dfs = (index, t1, t2) => {
        if (index >= N) return 1;
        if (dp[index][makeState(t1, t2)] !== undefined) return dp[index][makeState(t1, t2)];
        
        let count = 0;
        
        /*
         *    t1  t3
         *    t2  t4
         */
        const t3 = index < N - 1;
        const t4 = index < N - 1;
        
        // X
        // X
        if (t1 && t2) count += dfs(index + 1, true, true);
        
        // XX
        // X
        if (t1 && t2 && t3) count += dfs(index + 1, false, true);
        
        // X
        // XX
        if (t1 && t2 && t4) count += dfs(index + 1, true, false);
        
        // #X
        // XX
        if (!t1 && t2 && t3 && t4) count += dfs(index + 1, false, false);
        
        // XX
        // #X
        if (t1 && !t2 && t3 && t4) count += dfs(index + 1, false, false);
        
        // #
        // XX
        if (!t1 && t2 && t4) count += dfs(index + 1, true, false);
        
        // XX
        // #
        if (t1 && !t2 && t3) count += dfs(index + 1, false, true);
        
        // XX
        // XX
        if (t1 && t2 && t3 && t4) count += dfs(index + 1, false, false);
        
        // #
        // #
        if (!t1 && !t2) count += dfs(index + 1, true, true);
        
        count = count % MOD;
        
        return dp[index][makeState(t1, t2)] = count;
    }
    
    return dfs(0, true, true)
};