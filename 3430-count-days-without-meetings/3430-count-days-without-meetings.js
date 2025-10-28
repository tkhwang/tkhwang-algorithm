/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    const N = meetings.length;

    // merge interval
    meetings.sort((a,b) => a[0] - b[0]);

    const merged = [];

    for (const meeting of meetings) {
        if (merged.length === 0) {
            merged.push(meeting);
            continue;
        }

        const [ begin, end ] = meeting;
        const [ prvBegin, prvEnd ] = merged.at(-1);

        if (prvEnd < begin) {
            merged.push(meeting);
        } else {
            merged.at(-1)[1] = Math.max(end, prvEnd);
        }
    }

    let meetingDays = 0;
    for (const [ begin, end ] of merged) {
        meetingDays += end - begin + 1;
    }

    return days - meetingDays;
};