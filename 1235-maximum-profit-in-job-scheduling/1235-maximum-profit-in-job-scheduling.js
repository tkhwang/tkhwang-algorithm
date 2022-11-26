/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    const N = profit.length;
    
    const events = [];

    for (let i = 0; i < N; i += 1) {
        const start = startTime[i];
        const end = endTime[i];
        const pf = profit[i];
        
        events.push([ start, end, pf ]);
    }
    
    events.sort((a,b) => a[0] - b[0]);
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a[0] - b[0] });
    
    let curProfit = 0;
    let maxProfit = 0;
    
    for (const [ start, end, pf ] of events) {
        while (minHeap.size() > 0 && minHeap.front()[0] <= start) {
            const [ tempEnd, tempProfit ] = minHeap.dequeue();
            curProfit = Math.max(curProfit, tempProfit);
        }
        minHeap.enqueue([ end, curProfit + pf ])
        maxProfit = Math.max(maxProfit, curProfit + pf)
    }
    return maxProfit;
};