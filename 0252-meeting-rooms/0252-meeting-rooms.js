/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    const N = intervals.length;
    if (N === 0) return true;

    intervals.sort((a,b) => a[0] - b[0]);

    let prvBegin = intervals[0][0];
    let prvEnd = intervals[0][1];

    for (let i = 1; i < N; i += 1) {
        const [ begin, end ] = intervals[i];

        if (prvEnd > begin) return false;

        prvBegin = begin;
        prvEnd = end;
    }

    return true;
};