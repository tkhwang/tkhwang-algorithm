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
var pseudoPalindromicPaths  = function(root) {

    const isPalindrome = (freq) => {
        let count = 0;
        for (const key of Object.keys(freq)) {
            if (freq[key] % 2 === 1) count += 1;
        }
        // console.log(freq, count);
        return count <= 1;
    }
    
    let result = 0;
    const dfs = (node, freq) => {
        // console.log(node, freq);
        
        if (!node) return;
        
        freq[node.val] = (freq[node.val] || 0) + 1;
        
        if (node.left) dfs(node.left, freq);
        if (node.right) dfs(node.right, freq);
        if (!node.left && !node.right) {
            if (isPalindrome(freq)) result += 1;
        }
        
        freq[node.val] -= 1;
    }
    
    dfs(root, {});
    
    return result;
};