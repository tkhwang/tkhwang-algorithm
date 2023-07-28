/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N) {
    
    const solve = (n, dp) => {
        if (n % 2 === 0) return dp[n] = [];
        if (dp[n] !== -1) return dp[n];
        if (n === 1) return dp[n] = [ new TreeNode(0) ];
        
        const res = [];
        n -= 1;
        
        for (let i = 1; i < n; i += 1) {
            const left = solve(i, dp);
            const right = solve(n - i, dp);
            
            for (let row = 0; row < left.length; row += 1) {
                for (let col = 0; col < right.length; col += 1) {
                    const node = new TreeNode(0);
                    
                    node.left = left[row];
                    node.right = right[col];
                    
                    res.push(node);
                }
            }
        }
        return dp[n] = res;
    }
    
    const dp = Array(N+1).fill(-1);
    return solve(N, dp)
};