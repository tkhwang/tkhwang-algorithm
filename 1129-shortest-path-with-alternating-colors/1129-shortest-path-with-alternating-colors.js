/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(N, redEdges, blueEdges) {
    const graph = {};
    
    const red = new Set();
    const blue = new Set();
    
    const genKey = (u, v) => `${u}:${v}`;
    
    for (const [ u, v ] of redEdges) {
        if (graph[u] === undefined) graph[u] = new Set();
        graph[u].add(v);
        red.add(genKey(u, v));
    }
    
    for (const [ u, v ] of blueEdges) {
        if (graph[u] === undefined) graph[u] = new Set();
        graph[u].add(v);
        blue.add(genKey(u, v))
    }
    
    console.log(graph, red, blue);
    
    const res = Array(N).fill(null).map((_) => Array(2).fill(Infinity));
    const RED = 0;
    const BLUE= 1;

    
    const getColor = (isRed, isBlue) => {
        return isRed ? RED: BLUE;
    }
    
    const bfs = (start) => {
        const queue = [ [ start, 0, -1 ] ];

        while (queue.length) {
            const len = queue.length;
            
            for (let i = 0; i < len; i += 1) {
                const [ cur, steps, color ] = queue.shift();
                
                if (graph[cur] === undefined) continue;
                
                for (const next of graph[cur]) {
                    const isRed = red.has(genKey(cur, next));
                    const isBlue = blue.has(genKey(cur, next));
                    
                    if (color === -1) {
                        if (isRed) {
                            res[next][RED] = steps + 1;
                            queue.push([ next, steps + 1, RED ]);
                        }
                        if (isBlue) {
                            res[next][BLUE] = steps + 1;
                            queue.push([ next, steps + 1, BLUE ]);
                        }
                    } else {
                        // 현재 RED
                        if (color === RED && isBlue) {
                            if (res[next][BLUE] < Infinity) continue;
                            res[next][BLUE] = steps + 1;
                            queue.push([ next, steps + 1, BLUE ]);
                        // 현재 BLUE
                        } else if (color === BLUE && isRed) {
                            if (res[next][RED] < Infinity) continue;
                            res[next][RED] = steps + 1;
                            queue.push([ next, steps + 1, RED ]);
                        }
                    }
                }
            }
        }
    }
    
    bfs(0);
    
    for (let i = 1; i < N; i += 1) {
        if (res[i] === Infinity) res[i] = -1;
    }
    
    res[0][RED] = 0;
    res[0][BLUE] = 0;
    
    return res.map((v) => Math.min(...v)).map((v) => v === Infinity ? -1 : v)
};