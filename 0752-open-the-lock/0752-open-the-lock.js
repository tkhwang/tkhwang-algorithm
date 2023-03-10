/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const set = new Set(deadends);
    const seen = new Set();
    
    const change = (num) => {
        return [
            (+num + 1) % 10,
            (10 + +num - 1) % 10
        ]
    }
    
    const bfs = (start) => {
        const queue = [ start ];
        let steps = 0;
        seen.add(start);
        
        while (queue.length) {
            const len = queue.length;
            
            for (let i = 0; i < len; i += 1) {
                const cur = queue.shift();

                if (set.has(cur)) continue;
                if (cur === target) return steps;
                
                for (const [ i, num ] of cur.split("").entries()) {
                    for (const next of change(+num)) {
                        const nextNum = cur.slice(0, i) + String(next) + cur.slice(i + 1);
                        if (seen.has(nextNum)) continue;
                        // if (set.has(nextNum)) continue;

                        seen.add(nextNum);
                        queue.push(nextNum)                        
                    }
                }
            }            
            steps += 1;
        }        
        return -1;
    }
    
    return bfs("0000")
};