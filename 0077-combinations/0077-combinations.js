/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(N, k) {
    const res = [];
    
    const dfs = (cur, start) => {
        if (cur.length === k) {
            res.push([...cur]);
            return;
        }
        
        for (let i = start; i <= N; i += 1) {
            cur.push(i);
            
            dfs(cur, i + 1);
            
            cur.pop();
        }
        
    }
    
    dfs([], 1);
    
    return res;
};