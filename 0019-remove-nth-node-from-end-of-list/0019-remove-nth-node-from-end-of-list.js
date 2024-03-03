/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head);
    
    let slow = dummy;
    let fast = head;
    
    let i = n;
    while (i > 0) {
        fast = fast.next;
        i -= 1;
    }
    
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    
    return dummy.next;
};