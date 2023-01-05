/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const events = [];
    
    const START = 1;
    const END = -1;
    
    for (const [ start, end ] of intervals) {
        events.push([ start, START ]);
        events.push([ end, END ]);
    }
    
    events.sort((a,b) => a[0] - b[0] || a[1] - b[1]);
    console.log(events);
    
    let max = 0;
    let rooms = 0;
    for (const [ time, event ] of events) {
        rooms += event;
        max = Math.max(max, rooms);
    }
    return max;
};