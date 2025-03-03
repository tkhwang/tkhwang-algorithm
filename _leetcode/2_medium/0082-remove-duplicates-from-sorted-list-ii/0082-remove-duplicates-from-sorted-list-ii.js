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
var deleteDuplicates = function(head) {
    const dummy = new ListNode(null);
    dummy.next = head;
    
    let prv = dummy;
    let cur = head;
    
    while (cur) {
        if (cur.next && cur.val === cur.next.val) {
            while (cur.next && cur.val === cur.next.val) {
                cur = cur.next;
            }
            prv.next = cur.next;
        } else {
            prv = prv.next;
        }
        cur = cur.next;
    }
    
    return dummy.next;
};