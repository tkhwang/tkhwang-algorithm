/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
    const N = strs.length;
    
    const calcDelta = (x, y) => {
        let count = 0;
        for (let i = 0; i < x.length; i += 1) {
            if (x[i] !== y[i]) count += 1;
        }
        return count;
    }
    
    const adj = {};
    
    for (let i = 0; i < N; i += 1) {
        for (let j = i + 1; j < N; j += 1) {
            if (calcDelta(strs[i], strs[j]) <= 2) {
                if (adj[i] === undefined) adj[i] = [];
                if (adj[j] === undefined) adj[j] = [];
                adj[i].push(j);
                adj[j].push(i);
            }
        }
    }
    
    const visited = Array(N).fill(false);
    let count = 0;
    
    const visit = (i) => {
        if (adj[i] === undefined) return;
        for (const u of adj[i]) {
            if (visited[u]) continue;
            visited[u] = true;
            visit(u);
        }
    }
    
    for (let i = 0; i < N; i += 1) {
        if (visited[i]) continue;
        count += 1;
        visited[i] = true;
        visit(i);
    }
    
    return count;
};