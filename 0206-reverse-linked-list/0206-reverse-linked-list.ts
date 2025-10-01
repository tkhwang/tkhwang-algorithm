/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
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