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
var averageOfSubtree = function(root) {
    let res = 0;
    
    const dfs = (cur) => {
        if (!cur) return [0, 0];
        
        const [leftSum, leftCount] = dfs(cur.left);
        const [rightSum, rightCount] = dfs(cur.right);
        
        const curSum = cur.val + leftSum + rightSum;
        const curCount = 1 + leftCount + rightCount;
        
        if (Math.floor(curSum / curCount) === cur.val) res += 1;
        
        return [curSum, curCount];
    }
    
    dfs(root);
    
    return res;
};