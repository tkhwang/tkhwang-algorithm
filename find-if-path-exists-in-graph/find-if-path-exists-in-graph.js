/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const graph = {};
    for (const [ begin, end ] of edges) {
        if (graph[begin] === undefined) graph[begin] = [];
        if (graph[end] === undefined) graph[end] = [];
        graph[begin].push(end);
        graph[end].push(begin);
    }
    

    const queue = [ source ];
    const seen = new Set();
    seen.add(source);
    
    while (queue.length) {
        const len = queue.length;
        
        for (let i = 0 ; i < len; i += 1) {
            const cur = queue.shift();
            
            if (cur === destination) return true;

            if (graph[cur] === undefined) return false;
            for (const next of graph[cur]) {
                if (seen.has(next)) continue;
                
                seen.add(next);
                queue.push(next);
            }
        }
    }
    return false;
};