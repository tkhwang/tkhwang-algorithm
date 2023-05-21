/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const N = graph.length;
    const adjs = {};
    
    for (let i = 0; i < N; i += 1) {
        const nexts = graph[i];
        for (const next of nexts) {
            if (adjs[i] === undefined) adjs[i] = [];
            adjs[i].push(next)
        }
    }
    
    const dfs = [ 0 ];
    const visited = new Set();
    visited.add(0);
    
    const WHITE= 0;
    const BLACK = 1;
    const colors = {};
    
    for (let node = 0; node < N; node += 1) {
        if (colors[node] !== undefined) continue;

        const stack = [ node ];
        colors[node] = WHITE;
        while (stack.length) {
            const len = stack.length;

            for (let i = 0; i < len; i += 1) {
                const cur = stack.pop();

                if (adjs[cur] === undefined) continue;
                
                for (const next of adjs[cur]) {
                    if (colors[next] === undefined) {
                        colors[next] = colors[cur] ^ 1;
                        stack.push(next);
                    } else {
                        if (colors[next] === colors[cur] ) return false;
                    }
                }
            }
        }        
    }
    

    return true;
};