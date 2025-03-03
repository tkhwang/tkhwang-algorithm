/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function(intervals, _queries) {
    const N = intervals.length;
    
    intervals.sort((a,b) => a[0] - b[0]);
    
    const queries = _queries.map((v,i) => [ v, i]);
    queries.sort((a,b) => a[0] - b[0]);
    
    // [ end, length ]
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a[1] - b[1] });
    
    const res = Array(queries.length).fill(-1);
    let i = 0;
    
    for (const [ query, j ] of queries) {
        // add started
        while (i < N && intervals[i][0] <= query) {
            minHeap.enqueue([ intervals[i][1], intervals[i][1] - intervals[i][0] + 1 ]);
            i += 1;
        }
        
        // delete past
        while (minHeap.size() && minHeap.front()[0] < query) {
            minHeap.dequeue();
        }
        
        if (minHeap.size()) {
            res[j] = minHeap.front()[1];
        } 
    }

    return res;
};