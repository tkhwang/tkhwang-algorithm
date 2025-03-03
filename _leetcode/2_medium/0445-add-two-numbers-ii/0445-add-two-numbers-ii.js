/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const s1 = [];
    const s2 = [];
    
    while (l1) {
        s1.push(l1.val);
        l1 = l1.next;
    }
    
    while (l2) {
        s2.push(l2.val);
        l2 = l2.next;
    }
    
    let l3 = new ListNode(0);
    
    while (s1.length || s2.length) {
        let sum = 0;
        
        if (s1.length) sum += s1.pop();
        if (s2.length) sum += s2.pop();
        sum += l3.val;
        l3.val = sum % 10;
        let head = new ListNode(Math.floor(sum / 10));
        head.next = l3;
        l3 = head;
    }
    
    return l3.val === 0 ? l3.next : l3;
};