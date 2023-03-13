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
    const N = lists.length;
    
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a[0] - b[0] });
    
    for (let i = 0; i < N; i += 1) {
        if (lists[i]) minHeap.enqueue([ lists[i].val, lists[i] ]);
    }

    let head = new ListNode();
    let node = head;
    
    while (minHeap.size()) {
        let  [ minVal, min ] = minHeap.dequeue();
        
        node.next = min;
        node = node.next;
        
        min = min.next;
        if (min) minHeap.enqueue([ min.val, min ]);
    }
    
    return head.next;
};