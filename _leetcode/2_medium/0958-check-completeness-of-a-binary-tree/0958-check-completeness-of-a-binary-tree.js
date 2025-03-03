/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    const queue = [ root ];
    const res = [];
    
    let seenNull = false;
    while (queue.length) {
        const len = queue.length;
        
        for (let i = 0; i < len; i += 1) {
            const cur = queue.shift();
            
            if (!cur) {
                seenNull = true;
            } else {
                if (seenNull) return false;
                queue.push(cur.left);
                queue.push(cur.right);
            }
        }
    }
    
    return true;
};