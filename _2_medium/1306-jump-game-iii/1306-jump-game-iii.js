/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const N = arr.length;
    const queue = [ start ];
    
    const isValid = (n) => 0 <= n && n < N;
    
    const seen = new Set();
    seen.add(start);
    
    while (queue.length) {
        const len = queue.length;
        
        for (let i = 0; i < len; i += 1) {
            const cur = queue.pop();

            console.log(cur);
            
            if (arr[cur] === 0) return true;
            
            for (const next of [ cur + arr[cur], cur - arr[cur] ]) {
                if (!isValid(next)) continue;
                if (seen.has(next)) continue;

                seen.add(next);
                
                queue.push(next);
                
                // seen.delete(next);
            }
        }
    }
    
    return false;
};