/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const n = candidates.length;
    const result = [];
    
    const dfs = (cur, sum, index) => {
        if (sum === 0) {
            result.push([...cur])
            return;
        }
        if (sum < 0) return;
        
        for (let i = index; i < n; i += 1) {
            cur.push(candidates[i]);
            
            dfs(cur, sum - candidates[i], i);
            
            cur.pop();
        }
    }
    
    dfs([], target, 0);
    
    return result;
};