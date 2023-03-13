/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    const findMid = (head) => {
        let prv = null;
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            prv = slow;
            slow = slow.next;
            fast = fast.next.next;
        }        
        
        if (prv) prv.next = null;
        
        return slow;
    }
    
    
    const dfs = (head) => {
        if (!head) return null;
        
        const mid = findMid(head);        
        const node = new TreeNode(mid.val);
        if (head === mid) return node;
        
        node.left = dfs(head);
        node.right = dfs(mid.next);        
        return node;
    }
    
    return dfs(head);
};