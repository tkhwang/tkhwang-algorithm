/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
    const N = edges.length;
    
    const graph = {};

    for (let i = 0; i < N; i += 1) {
        const cur = edges[i];
        
        if (cur === -1) continue;
        if (graph[i] === undefined) graph[i] = [];
        graph[i].push(cur);
    }
    
    console.log(graph);
    
    const dist1 = {};
    const dist2 = {};
 
    const bfs = (start, obj) => {
        const queue = [ [ start, 0 ]];
        obj[start] = 0;
        
        while (queue.length) {
            const len = queue.length;
            
            for (let i = 0; i < len; i += 1) {
                const [ cur, steps ] = queue.shift();

                if (graph[cur] === undefined) continue;
                
                for (const next of graph[cur]) {
                    if (obj[next] !== undefined) continue;
                    
                    queue.push([ next, steps + 1 ]);
                    obj[next] = steps + 1;
                }
            }
        }
    }
    
    bfs(node1, dist1);
    bfs(node2, dist2);
    
    let res = -1;
    let resDist = Infinity;
    
    for (let i = 0; i < N; i += 1) {
        if (dist1[i] === undefined || dist2[i] === undefined) continue;
        
        const local = Math.max(dist1[i], dist2[i]);
        if (local < resDist) {
            res = i;
            resDist = local;
        }
    }
    
    return res;
}; 