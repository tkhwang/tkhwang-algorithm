var minCostConnectPoints = function(points) {
    const n = points.length;
    const getDistance = ([x1, y1], [x2, y2]) => Math.abs(x2 - x1) + Math.abs(y2 - y1);

    const graph = {};
    for (let i = 0; i < n; i += 1) {
        for (let j = i + 1; j < n; j += 1) {
            if (graph[i] === undefined) graph[i] = [];
            if (graph[j] === undefined) graph[j] = [];
            graph[i].push(j);
            graph[j].push(i);
        }
    }
    
    let mpq = new MinPriorityQueue({compare: (a, b) => a[1] - b[1]});
    mpq.enqueue([0, 0]);

    const visited = new Set();
    let sum = 0;

    while (visited.size < n) {
        const [cur, weight] = mpq.dequeue();
        if (visited.has(cur)) continue;

        visited.add(cur);
        sum += weight;

        if (graph[cur] === undefined)  continue;
        for (const next of graph[cur]) {
            if (visited.has(next)) continue;
            
            mpq.enqueue([ next, getDistance(points[cur], points[next]) ])
        }    
    }
    return sum;
};