/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function(plantTime, growTime) {
    const N = plantTime.length;
    
    // [ plantTime, index ]
    const minGrowTimeHeap = new MinPriorityQueue({ compare: (a, b) => a[0] - b[0] });
    for (const [ i, gTime ] of growTime.entries()) {
        minGrowTimeHeap.enqueue([ gTime, i ]);
    }
    
    const [ prvGrowTime, prvGrowTimeIndex ] = minGrowTimeHeap.dequeue();
    
    let time = 0 + prvGrowTime + plantTime[prvGrowTimeIndex];
    
    for (let i = 1; i < N; i += 1) {
        const [ growTime, growTimeIndex ] = minGrowTimeHeap.dequeue();
        time = Math.max(time, growTime) + plantTime[growTimeIndex];
    }
    
    return time;
};