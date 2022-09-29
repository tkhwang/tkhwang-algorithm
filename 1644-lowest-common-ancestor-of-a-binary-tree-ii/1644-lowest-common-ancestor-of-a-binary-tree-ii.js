/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const check = {};
    try {
        check[p.val] = false;
        check[q.val] = false;
    } catch (error) {
        return false;
    }
    
    const dfs = (node) => {
        if (!node) return;

        dfs(node.left);
        dfs(node.right);
        
        if (node.val === p.val) check[p.val] = true;
        if (node.val === q.val) check[q.val] = true;
    }
    
    dfs(root);
    
    console.log(check)

    if (Object.keys(check).some((node) => check[node] === false)) return false;
    
    const navigate = (node, p, q) => {
        if (!node) return node;
        
        if (node === p || node === q) return node;
        
        const left = navigate(node.left, p, q);
        const right = navigate(node.right, p, q) ;
        
        if (left && right) return node;
        return left || right;
    }
    
    return navigate(root, p, q)
    
};