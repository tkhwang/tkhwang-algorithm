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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    
    const queue = [ root ];
    const res = [];
    
    while (queue.length) {
        const len = queue.length;
        
        for (let i = 0; i < len; i += 1) {
            const cur = queue.shift();
    
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
            
            if (i === len - 1) res.push(cur.val);
        }
    }
    
    return res;
};