/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const SEP = ",";
const NULL = "N";

var serialize = function(root) {

    
    const dfs = (node) => {
        if (!node) return NULL;
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        return node.val + SEP + left + SEP + right;
    }
    
    return dfs(root)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const vals = data.split(",")

    const dfs = (vals) => {
        const cur = vals.shift();
        if (cur === NULL) return null;

        const node = new TreeNode(cur);
        node.left = dfs(vals);
        node.right = dfs(vals);
        return node;
    }
    
    return dfs(vals)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */