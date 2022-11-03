/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const res = [];
    
    const dfs = (cur, remain, index) => {
        if (cur.length === k && remain === 0) {
            res.push([...cur]);
            return;
        }
        
        for (let i = index; i < 10; i += 1) {
            if (cur.includes(i)) continue;
            if (n - i < 0) continue;
            
            cur.push(i);
            dfs(cur, remain - i, i + 1);
            cur.pop();
        }
    }
    
    dfs([], n, 1);
    
    return res;
};