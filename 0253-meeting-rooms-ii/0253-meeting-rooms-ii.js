/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const N = intervals.length;

    const starts = intervals.slice().sort((a,b) => a[0] - b[0]);
    const ends = intervals.slice().sort((a,b) => a[1] - b[1]);

    console.log(starts, ends);

    let rooms = 0;
    let end = 0;

    for (let i = 0; i < N; i += 1) {
        if (starts[i][0] < ends[end][1]) {
            rooms += 1;
        } else {
            end += 1;
        }
    }
    return rooms;
};