/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const n = graph.length;
    const result = [];
    
    const dfs = (cur, path) => {
        if (cur === n - 1) {
            result.push([...path])
            return;
        }
        
        for (const next of graph[cur]) {
            path.push(next);
            dfs(next, path)
            path.pop();
        }
    }
    
    dfs(0, [ 0 ]);

    return result;
};