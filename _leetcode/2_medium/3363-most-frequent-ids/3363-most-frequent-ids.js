/**
 * @param {number[]} nums
 * @param {number[]} freq
 * @return {number[]}
 */
var mostFrequentIDs = function(nums, freq) {
    const N = nums.length;
    
    const counts = {};
    const res = Array(N).fill(0);

    // [ num, counts[num] ]
    const maxHeap = new MaxPriorityQueue({ compare: (a,b) => b[1] - a[1] })
    
    for (const [ i, num ] of nums.entries()) {
        if (counts[num] === undefined) counts[num] = 0;
        counts[num] += freq[i];
        maxHeap.enqueue([ num, counts[num] ]);

        if (maxHeap.size() === 1) {
            res[i] = counts[num];
            continue;
        }

        while (maxHeap.front()[1] !== counts[maxHeap.front()[0]]) {
            maxHeap.dequeue();
        }

        const [ maxNum, maxNumFreq ] = maxHeap.front();
        res[i] = maxNumFreq;
    }
    
    return res;    
};