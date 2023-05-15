/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    const array = [];
    
    let cur = head;
    
    while (cur) {
        array.push(cur.val);
        cur = cur.next;
    }
    
    const N = array.length;
    
    [ array[k-1], array[N - k] ] = [ array[N-k], array[k-1] ];
    
    let dummy = new ListNode(null);
    let prv = dummy;
    
    let i = 0;
    while (i < N) {
        let cur = new ListNode(array[i]);
        i += 1;
        prv.next = cur;
        prv = cur;
    }
    
    return dummy.next;
};