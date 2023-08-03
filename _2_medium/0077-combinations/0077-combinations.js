/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(N, k) {
    const res = [];
    
    const dfs = (paths, start) => {
        if (paths.length === k) {
            if (res.push([...paths]));
            return;
        }
        
        for (let i = start; i <= N; i += 1) {
            paths.push(i);
            dfs(paths, i + 1);
            paths.pop();
        }
    }
    
    dfs([], 1);
    
    return res;
};