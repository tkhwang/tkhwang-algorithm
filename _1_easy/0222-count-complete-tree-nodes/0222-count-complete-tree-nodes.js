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
var countNodes = function(root) {
    if (!root) return 0;

    let leftLevel = 1;
    let node = root.left;
    while (node) {
        leftLevel += 1;
        node = node.left;
    }
    
    let rightLevel = 1;
    node = root.right;
    
    while (node) {
        rightLevel += 1;
        node = node.right;
    }

    if (leftLevel === rightLevel) return 2 ** leftLevel - 1;
    
    return 1 + countNodes(root.left) + countNodes(root.right);
};