/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const bfs = (_cur, _times) => {
        const queue = [ [ _cur, _times ] ];
        const visited = new Set();
        visited.add(_cur);

        while (queue.length) {
            const len = queue.length;
            
            for (let i = 0; i < len; i += 1) {
                const [ cur, times ] = queue.shift();
                
                if (cur === target) return times;
                
                for (let i = 0; i < 4; i += 1) {
                    const up = (10 + +cur[i] + 1) % 10;
                    const down = (10 + +cur[i] - 1) % 10;

                    const prv =  `${cur.slice(0, i)}${up}${cur.slice(i+1)}`;
                    const next = `${cur.slice(0, i)}${down}${cur.slice(i+1)}`;
                    
                    if (!visited.has(prv) && !deadends.includes(prv)) {
                        visited.add(prv);
                        queue.push([ prv, times + 1 ])
                    }
                    
                    if (!visited.has(next) && !deadends.includes(next)) {
                        visited.add(next);
                        queue.push([ next, times + 1])
                    }
                }
            }
        }
        return -1
    }
    
    if (deadends.includes("0000")) return -1;
    
    return bfs("0000", 0, 0)
};