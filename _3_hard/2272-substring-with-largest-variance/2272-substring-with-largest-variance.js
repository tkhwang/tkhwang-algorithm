/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function(s) {
    const chars = new Set(s.split(''));
    let maxDiff = 0;
    
    for (const l of chars) {
        for (const r of chars) {
            if (l === r) continue;
            
            let lCount = 0;
            let rCount = 0;
            let hasRight = false;
            
            for (const char of s) {
                lCount += char === l ? 1 : 0;
                rCount += char === r ? 1 : 0;
                
                if (rCount > 0 && lCount > rCount) maxDiff = Math.max(maxDiff, lCount - rCount)
                if (lCount > rCount && hasRight) maxDiff = Math.max(maxDiff, lCount - rCount - 1);
                if (lCount < rCount) {
                    lCount = 0;
                    rCount = 0;
                    hasRight = true;
                }
            }
        }    
    }
    
    return maxDiff;
};