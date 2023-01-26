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
    const seen = Array(N).fill(false);
    
    const dfs = (path, cur) => {
        if (cur === N - 1) {
            res.push([...path]);
            return;
        }
            
        for (const next of graph[cur]) {
            if (seen[next]) continue;

            path.push(next);
            seen[next] = true;
            
            dfs(path, next);
            
            path.pop();
            seen[next] = false;
        }
    }

    seen[0] = true;
    dfs([ 0 ], 0)
    
    return res;
};