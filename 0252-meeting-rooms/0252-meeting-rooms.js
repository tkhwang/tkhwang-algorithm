/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    const N = intervals.length;
    if (!intervals || intervals.length === 0) return true;
    
    intervals.sort((a,b) => a[1] - b[1]);
    
    let [ , prvEnd ] = intervals[0];
    
    for (let i = 1; i < N; i += 1) {
        const [ start, end ] = intervals[i];
        
        if (start < prvEnd) return false;
        
        prvEnd = end;
    }
    
    return true;
};