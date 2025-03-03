/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function(N, edges, labels) {
    const graph = Array(N).fill(null).map((_) => []);
    for (const [ u, v ] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    const res = Array(N).fill(0);

    const dfs = (cur, parent) => {
        
        if (graph[cur].length === 0) return {};
        
        let obj = {};
        
        for (const next of graph[cur]) {
            if (next === parent) continue;

            const sub = dfs(next, cur);
            
            for (const [ ch, count ] of Object.entries(sub)) {
                if (obj[ch] === undefined) obj[ch] = 0;
                obj[ch] += count;
            }
        }
        
        // current
        if (obj[labels[cur]] === undefined) obj[labels[cur]] = 0;
        obj[labels[cur]] += 1;
        
        res[cur] = obj[labels[cur]];
        
        return obj;
    }
    
    dfs(0, -1);
 
    return res;
};