/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let node = head;
    let sum = "";
    
    while (node) {
        sum += "" + node.val;
        node = node.next;
    }
    
    return parseInt(sum, 2);
};