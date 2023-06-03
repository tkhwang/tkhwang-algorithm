/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    const graph = {};
    for (const [ user, boss ] of manager.entries()) {
        if (boss === -1) continue;
        
        if (graph[boss] === undefined) graph[boss] = [];
        graph[boss].push(user);
    }    

    let max = 0;
    
    const bfs = (start) => {
        const queue = [ [ start, 0 ] ];
        
        while (queue.length) {
            const len = queue.length;
            
            for (let i = 0; i < len; i += 1) {
                const [ cur, time ] = queue.shift();
                
                if (graph[cur] === undefined) continue;
                
                for (const sub of graph[cur]) {
                    max = Math.max(max, time + informTime[cur]);
                    queue.push([ sub, time + informTime[cur] ])
                }
            }
        }
    }
    
    bfs(headID);
    
    return max;    
};