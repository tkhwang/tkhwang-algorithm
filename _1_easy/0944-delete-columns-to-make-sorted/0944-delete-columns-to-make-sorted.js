/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    const M = strs.length;
    const N = strs[0].length;

    let count = 0;

    for (let i = 0; i < N; i += 1) {
        let prv = strs[0][i];
        for (let j = 1; j < M; j += 1) {
            const cur = strs[j][i];
            
            if (prv <= cur) {
                prv = cur;
                continue;
            }
            
            count += 1;
            break;
        }
    }
    
    return count;
};