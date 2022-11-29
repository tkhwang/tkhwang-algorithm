/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    const N = intervals.length;
    
    intervals.sort((a,b) => a[1] - b[1]);
    
    for (let i = 1; i < N; i += 1) {
        const [ prvStart, prvEnd ] = intervals[i-1];
        const [ curStart, curEnd ] = intervals[i];
        
        if (!(prvEnd <= curStart)) return false
    }
    
    return true;
};