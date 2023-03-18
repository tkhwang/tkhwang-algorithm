/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if (!intervals || intervals.length === 0) return true;
    
    const N = intervals.length;
    
    intervals.sort((a,b) => a[0] - b[0]);
    
    let prv = intervals[0][1];
    
    for (let i = 1; i < N; i += 1) {
        const [ start, end ] = intervals[i];
        
        if (start < prv) return false;
        
        prv = end;
    }
    
    return true;
};