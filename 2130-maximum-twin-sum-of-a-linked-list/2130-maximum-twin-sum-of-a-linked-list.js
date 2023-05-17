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
var pairSum = function(head) {
    const arr = [];
    
    let cur = head;
    
    while (cur) {
        arr.push(cur.val);
        cur = cur.next;
    }
    
    const N = arr.length;
    
    let left = 0;
    let right = N - 1;
    
    let max = -Infinity;
    
    while (left < right) {
        const local = arr[left] + arr[right];
        if (max < local) max = local;
        left += 1;
        right -= 1;
    }
    
    return max;
};