/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    const N = arr.length;
    
    const graph = {};
    for (const [ i, num ] of arr.entries()) {
        if (graph[num] === undefined) graph[num] = [];
        graph[num].push(i);
    }

    const queue = [ 0 ];
    const seen = new Set();
    seen.add(0);

    let steps = 0;
    
    while (queue.length) {
        const len = queue.length;
        
        for (let i = 0; i < len; i += 1) {
            const cur = queue.shift();
            
            if (cur === N - 1) return steps;
            
            for (const next of graph[arr[cur]]) {
                if (seen.has(next)) continue;
                
                seen.add(next);
                queue.push(next);
            }
            
            if (cur + 1 < N && !seen.has(cur + 1)) {
                seen.add(cur+1);
                queue.push(cur + 1);
            }
            
            if (0 <= cur - 1 && !seen.has(cur - 1)) {
                seen.add(cur - 1);
                queue.push(cur - 1);
            }
            
            graph[arr[cur]].length = 0;
        }
        
        steps += 1;
    }
    
    return -1;
};