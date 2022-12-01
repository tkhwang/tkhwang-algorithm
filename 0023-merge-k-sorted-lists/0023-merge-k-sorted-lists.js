/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists) return null;
    
    const N = lists.length;
    
    if (N === 0) return null;
    
    const arr = Array(N);
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a[0] - b[0] });
    
    for (let i = 0; i < N; i += 1) {
        if (lists[i]) {
            arr[i] = lists[i];
            minHeap.enqueue([ lists[i].val, i, lists[i] ]);
        }
    }

    const dummy = new ListNode();
    let node = dummy;
    
    while (minHeap.size()) {
        const [  val, index, minNode ] = minHeap.dequeue();
        
        node.next = minNode;
        const minNext = minNode.next;
        if (minNode.next) {
            minHeap.enqueue([ minNext.val, index, minNext  ]);
            arr[index] = minNext;
        }
        node = node.next;
    }
    
    return dummy.next;
};