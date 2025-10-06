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
var averageOfLevels = function(root) {
    const queue = [ root ];

    const result = [];

    while (queue.length) {
        const length = queue.length;
        
        const stage = [];
        for (let i = 0; i < length; i += 1) {
            const cur = queue.shift();
            stage.push(cur.val);

            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        const average = stage.reduce((a,b) => a + b, 0) / stage.length;
        result.push(average)
    }

    return result;
};