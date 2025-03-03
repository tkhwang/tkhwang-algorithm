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
var isEvenOddTree = function(root) {
    const res = [];
    
    const bfs = (node) => {
        const queue = [ node ];
        let level = 0;
        
        while (queue.length) {
            const len = queue.length;
            let prv = level % 2 === 0 ? -Infinity : Infinity;
            
            for (let i = 0; i < len; i += 1) {
                const cur = queue.shift();

                if ((level % 2 === 0 && (cur.val % 2 === 0 || cur.val <= prv)) ||
                    (level % 2 === 1 && (cur.val % 2 === 1 || cur.val >= prv))) {
                    return false;
                }
                
                if (cur.left) queue.push(cur.left);
                if (cur.right) queue.push(cur.right);
                
                prv = cur.val;
            }
            level += 1;
        }
        
        return true;
    }
    
    return bfs(root);
};