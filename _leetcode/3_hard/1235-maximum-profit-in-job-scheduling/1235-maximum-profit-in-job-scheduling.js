/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    const jobs = startTime.map((v,i) => [ startTime[i], endTime[i], profit[i] ]);
    jobs.sort((a,b) => a[0] - b[0])

    const minHeap = new MinPriorityQueue({ compare: (a, b) => a[0] - b[0] });

    let curProfit = 0;
    let maxProfit = 0;
    
    for (const [ start, end, profit ] of jobs) {
        while (minHeap.size() && minHeap.front()[0] <= start) {
            const [ tempEnd, tempProfit ] = minHeap.dequeue();
            curProfit = Math.max(curProfit, tempProfit);
        }
        minHeap.enqueue([ end, curProfit + profit ]);
        maxProfit = Math.max(maxProfit, curProfit + profit)
    }
    return maxProfit;
};