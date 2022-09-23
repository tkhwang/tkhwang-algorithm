/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const n = candidates.length;
    const res = [];
    
    const backtrack = (cur, sum, index) => {
        if (sum === 0) {
            res.push([...cur]);
            return;
        }
        if (sum < 0) return;
        
        for (let i = index; i < n; i += 1) {
            if (sum >= candidates[i]) {
                cur.push(candidates[i]);
                backtrack(cur, sum - candidates[i], i);
                cur.pop();
            }
        }
    }
    
    backtrack([], target, 0);
    
    return res;
};