/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(N, edges) {
    const indegrees = Array(N).fill(0);
    const res = [];
    
    for (const [ u, v ] of edges) {
        indegrees[v] += 1;
    }
    
    for (let i = 0; i < N; i += 1) {
        if (indegrees[i] === 0) res.push(i);
    }
    
    return res;
};