/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const adj = {};
    const set = new Set();
    const genKey = (begin, end) => `${begin}:${end}`;
    
    for (const [ begin, end ] of connections) {
        if (adj[begin] === undefined) adj[begin] = [];
        if (adj[end] === undefined) adj[end] = [];
        adj[begin].push(end);
        adj[end].push(begin);
        set.add(genKey(begin, end));
    }

    const seen = new Array(n).fill(false);
    
    let res = 0;
    
    const dfs = (cur) => {
        let count = 0;

        if (adj[cur] === undefined) return count;
        
        for (const next of adj[cur]) {
            if (seen[next]) continue;
            
            if (set.has(genKey(cur, next))) count += 1;
            seen[next] = true;
            count += dfs(next);
        }
        
        return count;
    }
    
    seen[0] = true;
    return dfs(0)
};