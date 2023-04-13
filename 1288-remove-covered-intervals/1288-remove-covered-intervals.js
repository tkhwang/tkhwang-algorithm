/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    const N = intervals.length;

    intervals.sort((a,b) => a[0] - b[0] || b[1] - a[1]);
    
    let count = 0;
    let prvEnd = 0;
    
    for (let i = 0; i < N; i += 1) {
        const [ curStart, curEnd ] = intervals[i];
        
        if (prvEnd < curEnd) {
            count += 1;
            prvEnd = curEnd;
        }
    }
    
    return count;
};