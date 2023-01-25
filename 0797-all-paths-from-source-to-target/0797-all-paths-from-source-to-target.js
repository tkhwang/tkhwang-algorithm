/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const N = graph.length;
    
    const obj = {};
    
    for (const [ cur, nexts ] of graph.entries()) {
        if (obj[cur] === undefined) obj[cur] = [];
        for (const next of nexts) {
            obj[cur].push(next);
        }
    }
    
    const res = [];
    
    const dfs = (path, cur, index) => {
        if (cur === N - 1) {
            res.push([...path]);
            return;
        }
        
        if (graph[cur] === undefined) return;
        for (const next of graph[cur]) {
            path.push(next);
            
            dfs(path, next)
            
            path.pop();
        }
    }
    

    dfs([ 0 ], 0)
    
    return res;
};