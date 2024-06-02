/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    const N = intervals.length;

    intervals.sort((a,b) => a[0] - b[0] || a[1] - b[1]);

    if (intervals.length === 0) return true;
    let prvEnd = intervals[0][1];

    for (let i = 1; i < N; i += 1) {
        const [ start, end ] = intervals[i];
        if (prvEnd > start) return false;
        prvEnd = end;
    }

    return true;
};