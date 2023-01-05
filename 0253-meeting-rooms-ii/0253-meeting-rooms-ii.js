/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const N = intervals.length;
    
    intervals.sort((a,b) => a[0] - b[0]);
    console.log(intervals);
    
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a - b });
    minHeap.enqueue(intervals[0][1]);
    
    let max = -Infinity;
    let rooms = 1;
    for (let i = 1; i < N; i += 1) {
        const [ start, end ] = intervals[i];
        const earliestEnd = minHeap.front();
        
        if (earliestEnd <= start) {
            minHeap.dequeue();
        }
        minHeap.enqueue(end);
    }

    return minHeap.size();
};