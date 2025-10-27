/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const N = intervals.length;

    intervals.sort((a,b) => a[0] - b[0]);

    const minHeap = new MinPriorityQueue({ compare: (a,b) => a - b });
    minHeap.enqueue(intervals[0][1]);

    for (let i = 1; i < N; i += 1) {
        const prvEnd = minHeap.front();

        const [ begin, end ] = intervals[i];
        
        if (prvEnd <= begin) minHeap.dequeue();
        minHeap.enqueue(end);
    }

    return minHeap.size();
};