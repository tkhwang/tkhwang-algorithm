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
var deleteMiddle = function(head) {
    let slow = head;
    let fast = head;
    let prv = null;
 
    if (!fast.next) return null;
    
    while (fast && fast.next) {
        prv = slow;
        slow = slow.next;
         fast = fast.next.next;
    }

    if (prv) {
        prv.next = prv.next.next;
    } 
    
    return head;
};