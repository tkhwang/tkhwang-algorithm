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
var findMode = function(root) {
    let curVal = null;
    let curCount = 0;
    let maxCount = 0;
    let modes = [];
    
    const dfs = (cur) => {
        if (!cur) return;
        
        dfs(cur.left);
        
        curCount = (cur.val === curVal) ? curCount + 1 : 1;
        if (curCount === maxCount) {
            modes.push(cur.val);
        } else if (curCount > maxCount) {
            maxCount = curCount;
            modes = [cur.val];
        }
        curVal = cur.val;
        
        dfs(cur.right);
    }
    
    dfs(root)
    
    return modes;
};