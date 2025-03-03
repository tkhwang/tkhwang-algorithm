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
var generateTrees = function(N) {
    if (N === 0) return [];
    
    const dfs = (start, end) => {
        if (start > end) return [ null ];
        
        const allTrees = [];
        for (let i = start; i <= end; i += 1) {
            const left = dfs(start, i - 1);
            const right = dfs(i + 1, end);
            
            for (const l of left) {
                for (let r of right) {
                    const cur = new TreeNode(i);
                    cur.left = l;
                    cur.right = r;
                    allTrees.push(cur);
                }
            }
        }
        return allTrees;
    }
    
    return dfs(1, N);
};