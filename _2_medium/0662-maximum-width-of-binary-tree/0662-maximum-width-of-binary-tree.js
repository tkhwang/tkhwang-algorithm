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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    if (!root) return 0;
    
    const queue = [ [ root, 0 ] ];
    let max = BigInt(0);
    
    while (queue.length) { 
        let len = queue.length;
        
        const [ _, levelIndex ] = queue.at(0);
        let index = -1;
        let cur;
        
        for (let i = 0; i < len; i += 1) {
            [ cur, index ] = queue.shift();

            if (cur.left) queue.push([ cur.left, BigInt(2) * BigInt(index) ]);
            if (cur.right) queue.push([ cur.right, BigInt(2) * BigInt(index) + BigInt(1 )]);
        }
        
        if (max < BigInt(index) - BigInt(levelIndex) + BigInt(1)) max = BigInt(index) - BigInt(levelIndex) + BigInt(1);
    }
    return max;
};