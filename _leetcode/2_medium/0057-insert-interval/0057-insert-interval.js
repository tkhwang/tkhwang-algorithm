/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const N = intervals.length;
    
    let [ start, end ] = newInterval;
    const left = [];
    const right = [];
    
    for (const interval of intervals) {
        const [ first, last ] = interval;
        
        if (last < start) left.push(interval);
        else if (first > end) right.push(interval);
        else {
            start = Math.min(start, first);
            end = Math.max(end, last);
        }
    }
    
    return [ ...left, [ start, end ], ...right ];
};