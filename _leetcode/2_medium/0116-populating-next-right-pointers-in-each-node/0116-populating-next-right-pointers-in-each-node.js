/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return null;
    
    const queue = [ root ];
    
    while (queue.length > 0) {
        const len = queue.length;

        const level = [];
        for (let i = 0; i < len; i += 1) {
            const cur = queue.shift();
            
            if (i < len - 1) {
                cur.next = queue.at(0);
            } else {
                cur.next = null;
            }
            
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
    }
    
    return root;
};