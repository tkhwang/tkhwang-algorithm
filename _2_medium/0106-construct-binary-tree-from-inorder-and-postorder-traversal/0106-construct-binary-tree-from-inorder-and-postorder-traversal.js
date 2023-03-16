/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const dfs = (inorder, postorder) => {
        if ((!inorder || inorder.length === 0) &&
            (!postorder || postorder.length === 0)) return null;

        const rootVal = postorder.at(-1);
        const node = new TreeNode(rootVal);
        const index = inorder.indexOf(rootVal);
        
        node.left = dfs(inorder.slice(0, index),
                        postorder.slice(0, index));
        node.right = dfs(inorder.slice(index + 1),
                         postorder.slice(index, postorder.length - 1));
        return node;
    }
    
    return dfs(inorder, postorder)
};