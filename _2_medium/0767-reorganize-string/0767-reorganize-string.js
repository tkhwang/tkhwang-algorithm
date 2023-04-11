/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const freq = {};
    for (const ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    
    // [ key, count ]
    const maxHeap = new MaxPriorityQueue({ compare: (a,b) => b[1] - a[1] });
    for (const key in freq) {
        maxHeap.enqueue([ key, freq[key] ]);
    }
    
    let res = "";
    
    while (maxHeap.size()) {
        if (res.length === 0) {
            let [ ch, count ] = maxHeap.dequeue();
            res += ch;
            count -= 1;
            if (count > 0) maxHeap.enqueue([ ch, count ]);
        } else {
            const last = res.at(-1);
            const sames = [];
            while (maxHeap.size() && maxHeap.front()[0] === last) {
                sames.push(maxHeap.dequeue());
            }
            if (maxHeap.size() === 0) return "";
            let [ ch, count ] = maxHeap.dequeue();
            res += ch;
            count -= 1;
            if (count > 0) maxHeap.enqueue([ ch, count ]);
            for (const same of sames) maxHeap.enqueue(same);
        }
    }
    return res;
};