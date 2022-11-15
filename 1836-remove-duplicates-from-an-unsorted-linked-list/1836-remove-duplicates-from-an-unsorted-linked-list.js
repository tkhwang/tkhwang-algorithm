/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicatesUnsorted = function(head) {
    let node = head;
    const freq = {};
    while (node) {
        const cur = node.val;
        freq[cur] = (freq[cur] || 0) + 1;
        node = node.next;
    }
    
    const dummy = new ListNode(null, head);

    let prv = dummy;
    node = head;

    /*
         prv cur nxt
              /\
     */
    while (node) {
        const cur = node.val;
        if (freq[cur] > 1) {
            prv.next = node.next;
            node.next = null;
            node = prv;
        } 
        prv = node;
        node = node.next;
    }
    
    return dummy.next;
};