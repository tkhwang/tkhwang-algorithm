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
var reverseList = function(head) {
    let prv = null;
    let cur = head;
    
    while (cur) {
        const temp = cur.next;
        cur.next = prv;
        prv = cur;
        cur = temp;
    }
    
    return prv;
};