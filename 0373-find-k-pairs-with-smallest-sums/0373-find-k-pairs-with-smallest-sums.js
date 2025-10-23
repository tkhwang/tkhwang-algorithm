/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    // [ num1, num2 ], sum
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a[1] - b[1] })

    const N1 = nums1.length;
    const N2 = nums2.length;

    for (let i = 0; i < N1; i += 1) {
        for (let j = 0; j < N2; j += 1) {
            minHeap.enqueue([ [ nums1[i], nums2[j] ], nums1[i] + nums2[j] ]);
        }
    }

    const result = [];

    while (k > 0) {
        const [ pair, sum ] = minHeap.dequeue();
        result.push(pair);
        k -= 1;
    }

    return result;
};