/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    const genes = [ "A", "C", "G", "T" ];
    
    const queue = [ start ];
    const set = new Set(bank);
    const seen = new Set();
    // seen.add(start);
    
    let steps = 0;
    
    while (queue.length) {
        const len = queue.length;
        
        for (let i = 0; i < len; i += 1) {
            const cur = queue.shift();
            
            if (cur === end) return steps;

            for (let j = 0; j < cur.length; j += 1) {
                for (const gene of genes) {
                    const next = cur.substring(0, j) + gene + cur.substring(j+1);
                    
                    if (set.has(next) && !seen.has(next)) {
                        seen.add(next);
                        queue.push(next);
                    }
                }
            }
        }
        
        steps += 1;
    }
    
    return -1;
};