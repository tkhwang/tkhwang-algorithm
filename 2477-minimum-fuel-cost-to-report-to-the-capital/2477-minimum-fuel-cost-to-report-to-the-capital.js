/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function(roads, seats) {
    const graph = {};
    for (const [ begin, end ] of roads) {
        if (graph[begin] === undefined) graph[begin] = [];
        if (graph[end] === undefined) graph[end] = [];
        graph[begin].push(end);
        graph[end].push(begin);
    }
    
    let fuel = 0;
    
    const dfs = (cur, parent) => {
        if (cur === null) return 0;
        
        let persons = 0;
        
        if (graph[cur] === undefined) return;
        
        for (const next of graph[cur]) {
            if (next === parent) continue;
            
            const person = dfs(next, cur);
            persons += person;
            fuel += Math.ceil(person / seats);
        }
            
        return persons + 1;
    }

    dfs(0, -1);
    
    return fuel;
};