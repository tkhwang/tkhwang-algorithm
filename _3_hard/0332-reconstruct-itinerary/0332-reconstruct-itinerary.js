/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const graph = {};
    
    for (const [ u, v ] of tickets) {
        if (graph[u] === undefined) graph[u] = [];
        graph[u].push(v);
    }
    
    for (const key in graph) {
        graph[key].sort().reverse();
    }
    
    const itinerary = [];
    
    function dfs(airport) {
        while (graph[airport] && graph[airport].length > 0) {
            dfs(graph[airport].pop());
        }
        itinerary.push(airport);
    }
    
    dfs("JFK");
    
    return itinerary.reverse();    
    
};