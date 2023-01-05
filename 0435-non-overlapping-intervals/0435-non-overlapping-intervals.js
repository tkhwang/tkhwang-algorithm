/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    const N = intervals.length;
    
    intervals.sort((a,b) => a[0] - b[0]);
    console.log(intervals);
    
    let [ prvStart, prvEnd ] = intervals[0];
    let count = 0;
    
    for (let i = 1; i < N; i += 1) {
        const [ start, end ] = intervals[i];
        
        // [ prvStart, prvEnd ] [ start, end ]
        if (prvEnd <= start) {
            prvEnd = end;
        //  [ start  ... prvEnd ]
        } else {
            count += 1;
            prvEnd = Math.min(prvEnd, end);
        }
    }
    return count;
 };