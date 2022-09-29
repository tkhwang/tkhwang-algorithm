/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
    const graph = {};
    
    for (const [i, p] of pid.entries()) {
        if (graph[ppid[i]] === undefined) graph[ppid[i]] = [];
        graph[ppid[i]].push(p)
    }

    const result = [];
    
    const dfs = (node) => {
        if (!node) return;
        
        result.push(node);

        if (graph[node] === undefined) return;
        for (const child of graph[node]) {
            dfs(child)
        }
    }
    
    dfs(kill);
    
    return result;
};