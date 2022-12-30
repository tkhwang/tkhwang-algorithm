/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(obj) {
    const graph = {};
    for (const [ i, nexts ] of obj.entries()) {
        for (const next of nexts) {
            if (graph[i] === undefined) graph[i] = [];
            graph[i].push(next);
        }
    }
    
    console.log(graph);
    
    const N = obj.length;
    const res = [];
    
    const dfs = (cur, path, seen) => {
        if (cur === N - 1) {
            res.push([...path]);
            return;
        }
        
        if (graph[cur] === undefined) return;
        
        for (const next of graph[cur]) {
            if (seen.has(next)) continue;
            
            seen.add(next);
            path.push(next);
            
            dfs(next, path, seen);
            
            seen.delete(next);
            path.pop();
        }
    }
    
    const seen = new Set();
    seen.add(0);
    dfs(0, [ 0 ], seen);
    
    return res;
};