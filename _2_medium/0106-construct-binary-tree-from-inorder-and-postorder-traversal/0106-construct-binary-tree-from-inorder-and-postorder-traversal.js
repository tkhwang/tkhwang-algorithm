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
        if (inorder.length === 0 && postorder.length === 0) return null;
        
        const root = new TreeNode(postorder.at(-1));
        
        const mid = inorder.indexOf(postorder.at(-1));

        root.left = dfs(inorder.slice(0, mid), postorder.slice(0, mid));
        root.right = dfs(inorder.slice(mid + 1), postorder.slice(mid, postorder.length - 1))
        
        return root;
    }
    return dfs(inorder, postorder)
};