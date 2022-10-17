/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const queue = [ [ "0000", 0 ] ];
    const visited = new Set();
    visited.add("0000");

    while (queue.length) {
        const len = queue.length;
        
        const change = (num) => {
            return [
                (+num + 1) % 10,
                (10 + +num - 1) % 10
            ]
        }
        
        for (let i = 0; i < len; i += 1) {
            const [ cur, count ] = queue.shift();
            
            if (cur === target) return count;
            
            if (deadends.includes(cur)) continue;
            
            for (let i = 0; i < cur.length; i += 1) {
                const [up,down] = change(cur[i]);
                
                for (const changed of [ up, down ]) {
                    const next = "" + cur.slice(0, i) + changed + cur.slice(i+1);
                    if (visited.has(next)) continue;
                    
                    visited.add(next);
                    queue.push([ next, count + 1 ]);
                }
            }
        }
    }
    
    return -1;
};