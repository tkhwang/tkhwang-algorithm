/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
    if (!dislikes || dislikes.length === 0) return true;
    
    const graph = {};
    for (const [ one, two ] of dislikes) {
        if (graph[one] === undefined) graph[one] = [];
        if (graph[two] === undefined) graph[two] = [];
        graph[one].push(two);
        graph[two].push(one);
    }
    
    const NONE = -1;
    const RED = 0;
    const BLUE= 1;
    
    const colors = Array(N+1).fill(NONE);
    
    const bfs = (start) => {
        const queue = [ start ];

        colors[start] = RED;
        
        while (queue.length) {
            const len = queue.length;
            
            for (let i = 0; i < len; i += 1) {
                const cur = queue.shift();
                
                if (graph[cur] === undefined) continue;
                for (const next of graph[cur]) {
                    if (colors[cur] === colors[next]) return false;
                    
                    if (colors[next] === NONE) {
                        colors[next] = 1 - colors[cur];
                        queue.push(next);
                    }
                }
            }
        }
        return true;
    }    
    
    for (let i = 1; i < N + 1; i += 1) {
        if (colors[i] === NONE) {
            if (!bfs(i)) return false;
        }
    }
    return true;
};