/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const graph = {};
    const indegrees = {};
    
    for(const [ start, end ] of edges) {
        if (graph[start] === undefined) graph[start] = [];
        graph[start].push(end);
        if (indegrees[start] === undefined) indegrees[start] = 0;
        if (indegrees[end] === undefined) indegrees[end] = 0;
        indegrees[end] += 1;
    }

    return Object.keys(indegrees).filter((key) => indegrees[key] === 0)
};