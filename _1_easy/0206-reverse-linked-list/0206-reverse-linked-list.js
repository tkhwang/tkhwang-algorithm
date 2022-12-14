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
    const reverse = (node) => {
        if (!node || node.next === null) return node;
        
        const last = reverse(node.next);
        
        node.next.next = node;
        node.next = null;
        
        return last;
    }
    
    return reverse(head)
};