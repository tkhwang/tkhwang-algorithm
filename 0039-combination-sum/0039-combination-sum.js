/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const N = candidates.length;
    const res = [];
    
    const dfs = (cur, remain, start) => {
        if (start >= N) return;
        
        if (remain === 0) {
            res.push([...cur]);
            return;
        }
        
        for (let i = start; i < N; i += 1) {
            if (remain - candidates[i] < 0) continue;
            cur.push(candidates[i]);
            dfs(cur, remain - candidates[i], i);
            cur.pop();
        }
    }
    
    dfs([], target, 0);
    
    return res;
};