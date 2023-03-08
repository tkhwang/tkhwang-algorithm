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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const map = new Map();

    let isFound = false;
    
    const dfsBuild = (node) => {
        if (!node) return "X";

        const left = dfsBuild(node.left);
        const right = dfsBuild(node.right);
    
        const key = `${node.val}:${left}:${right}`;
        map.clear();
        map.set(key, 1);
        
        return key;
    }
    
    const dfs = (node) => {
        if (!node) return "X";
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        const key = `${node.val}:${left}:${right}`;
        map.set(key, (map.get(key) || 0) + 1);        
        
        if (map.get(key) === 2) isFound = true;
        return key;
    }
    
    dfsBuild(subRoot)
    dfs(root)
    
    return isFound;
};