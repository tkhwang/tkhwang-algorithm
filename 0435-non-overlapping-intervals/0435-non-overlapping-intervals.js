/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    const N = intervals.length;
    
    intervals.sort((a,b) => a[0] - b[0] || a[1]- b[1]);
    
    console.log(intervals);
  
    let [ _, prvEnd ] = intervals[0];
    let count = 0;
    
    for (let i = 1; i < N; i += 1) {
        const [ curStart, curEnd ] = intervals[i];
        
        if (prvEnd <= curStart) {
            prvEnd = curEnd;
        } else {
            count += 1;
            prvEnd = Math.min(prvEnd, curEnd);
        }
    }
    
    return count;
};