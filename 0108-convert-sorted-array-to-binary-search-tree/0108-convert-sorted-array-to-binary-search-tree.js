/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const dfs = (array) => {
        if (!array || array.length === 0) return null;
        
        const mid = Math.floor(array.length / 2);
        
        const rootVal = array[mid];
        const node = new TreeNode(rootVal);
        node.left = dfs(array.slice(0, mid));
        node.right = dfs(array.slice(mid + 1));
        return node;
    }
    
    return dfs(nums)
};