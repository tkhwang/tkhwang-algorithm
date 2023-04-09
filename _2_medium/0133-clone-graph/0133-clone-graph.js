/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(root) {
    const map = new Map();
    
    const dfs = (node) => {
        if (!node) return node;
        if (map.has(node)) return map.get(node);

        const newNode = new Node(node.val);
        map.set(node, newNode);
        
        for (const neighbor of node.neighbors) {
            newNode.neighbors.push(dfs(neighbor));
        }
        return newNode;
    }
    
    return dfs(root)
};