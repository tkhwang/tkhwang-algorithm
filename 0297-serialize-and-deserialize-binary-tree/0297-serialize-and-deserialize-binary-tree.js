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
    console.log(data);
    
    const vals = data.split(",")
    let i = 0;
    
    const dfs = () => {
        if (vals[i] === NULL) {
            i += 1;
            return null;
        }
        
        const node = new TreeNode(vals[i]);
        i += 1;
        node.left = dfs();
        node.right = dfs();
        return node;
    }
    
    return dfs()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */