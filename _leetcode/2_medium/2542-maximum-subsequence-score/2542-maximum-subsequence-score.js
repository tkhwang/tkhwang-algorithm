/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    const N = nums1.length;
    
    const merged = nums1.map((v,i) => [ nums1[i], nums2[i] ]);
    merged.sort((a,b) => b[1] - a[1]);
    
    const minHeap = new MinPriorityQueue({ compare: (a, b) => a[0] - b[0] });
    
    let max = -Infinity;
    let sums = 0;
    for (const [ i, [ sum, min ] ] of merged.entries()) {
        sums += sum;
        minHeap.enqueue([ sum, i ]);
        
        while (minHeap.size() > k) {
            const [ sum, minIndex ] = minHeap.dequeue();
            sums -= sum;
        }
        
        if (minHeap.size() === k) {
            if (max < sums * min) max = sums * min;
        }
    }
    return max;    
};