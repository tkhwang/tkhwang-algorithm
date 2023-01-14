/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
    const graph = {};
    
    const N = pid.length;
    
    for (let i = 0; i < N; i += 1) {
        const cur = pid[i];
        const parent = ppid[i];
        
        if (parent === 0) continue;
        
        if (graph[parent] === undefined) graph[parent] = [];
        graph[parent].push(cur);
    }
    
    const res = [];
    
    const dfs = (cur) => {
        res.push(cur);
        
        if (graph[cur] === undefined) return;
        
        for (const child of graph[cur]) {
            dfs(child);
        }
    }
    
    dfs(kill);
    
    return res;
};