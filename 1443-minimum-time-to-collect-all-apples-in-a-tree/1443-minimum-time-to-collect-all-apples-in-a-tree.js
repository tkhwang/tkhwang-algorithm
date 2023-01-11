/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(N, edges, hasApple) {
    
    const graph = Array(N).fill(null).map((_) => []);
    for (const [ s, e ] of edges) {
        graph[s].push(e);
        graph[e].push(s);
    }
    
    const dfs = (cur, parent) => {
        let time = 0;
        for (const child of graph[cur]) {
            if (child === parent) continue;
            
            const childTime = dfs(child, cur);
            
            if (childTime > 0 || hasApple[child]) time += 2 + childTime;
        }
        return time;
    }
    
    return dfs(0, -1);
};