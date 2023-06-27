/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    // [ i, j, i+j ]
    const mpq = new MaxPriorityQueue({ compare: (a,b) => b[2] - a[2] });
    
    for (let i = 0; i < nums1.length; i += 1) {
        for (let j = 0; j < nums2.length; j += 1) {
            if (mpq.size() < k) {
                mpq.enqueue([ nums1[i], nums2[j], nums1[i] + nums2[j] ]);
            // when mpq is full
            } else if (mpq.front()[2] > nums1[i] + nums2[j]) {
                mpq.enqueue([ nums1[i], nums2[j], nums1[i] + nums2[j] ]);
                mpq.dequeue();
            } else {
                break;
            }
        }
    }
    
    return mpq.toArray().map(([i, j, ]) => [i, j]);
};