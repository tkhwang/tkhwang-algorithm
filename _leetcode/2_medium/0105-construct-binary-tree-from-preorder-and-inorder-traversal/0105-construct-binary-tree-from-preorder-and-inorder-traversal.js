/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    const dfs = (preorder, inorder) => {
        if ((!preorder || preorder.length === 0) && (!inorder || inorder.length === 0)) return null;
        
        const rootVal = preorder[0];
        const node = new TreeNode(rootVal);
        const mid = inorder.indexOf(rootVal)
        
        node.left = dfs(preorder.slice(1, 1 + mid), inorder.slice(0, mid))
        node.right = dfs(preorder.slice(1 + mid), inorder.slice(mid + 1))
        return node;
    }
    
    return dfs(preorder, inorder)
};