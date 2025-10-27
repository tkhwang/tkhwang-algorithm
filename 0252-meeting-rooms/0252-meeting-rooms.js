/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    const N = intervals.length;
    if (N === 0) return true;

    intervals.sort((a,b) => a[0] - b[0]);

    for (let i = 1; i < N; i += 1) {
        const [ prvBegin, prvEnd ] = intervals[i-1];
        const [ begin, end ] = intervals[i];

        if (begin < prvEnd) return false;
    }

    return true;
};