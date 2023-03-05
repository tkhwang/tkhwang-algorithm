/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    const N = arr.length;
    
    const obj = {};
    for (const [ i, num ] of arr.entries()) {
        if (obj[num] === undefined) obj[num] = [];
        obj[num].push(i);
    }
    
    const isValid = (num) => !(num < 0 || num >= N);

    const seen = new Set();
    seen.add(0);

    const bfs = (start) => {
        const queue = [ [ start, 0 ] ];
        
        while (queue.length) {
            const len = queue.length;
            
            for (let i = 0; i < len; i += 1) {
                const [ cur, cost ] = queue.shift();
                
                if (cur === N - 1) return cost;
                
                for (const next of obj[arr[cur]] || []) {
                    if (seen.has(next)) continue;
                    seen.add(next);
                    queue.push([ next, cost + 1 ]);
                }
                for (const next of [ cur + 1, cur - 1 ]) {
                    if (!isValid(next)) continue;
                    if (seen.has(next)) continue;
                    
                    seen.add(next);
                    queue.push([ next, cost + 1 ]);
                }
                if (obj[arr[cur]] && obj[arr[cur]].length > 0) {
                    obj[arr[cur]].length = 0;
                }
            }
        }
        
        return -1;
    }
    
    return bfs(0);
};