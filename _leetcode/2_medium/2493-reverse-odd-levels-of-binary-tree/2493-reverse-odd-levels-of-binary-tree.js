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
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
    const dfs = (left, right, level) => {
        if (!left || !right) return null;

        if (level % 2 === 0) {
            temp = left.val;
            left.val = right.val
            right.val = temp;
        }

        dfs(left.left, right.right, level + 1)
        dfs(left.right, right.left, level + 1)
    }

    dfs(root.left, root.right, 0)

    return root;    
};