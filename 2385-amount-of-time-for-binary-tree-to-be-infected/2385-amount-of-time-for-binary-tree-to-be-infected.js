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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    
    const dfs = (node, parent) => {
        if (!node) return;
        
        node["parent"] = parent;
        dfs(node.left, node);
        dfs(node.right, node);
    }
    
    dfs(root, null)
    
    const graph = {};
    
    const constructGraph = (node) => {
        if (!node) return;

        if (graph[node.val] == undefined) graph[node.val] = [];
        if (node.left) graph[node.val].push(node.left.val);
        if (node.right) graph[node.val].push(node.right.val);
        if (node.parent) graph[node.val].push(node.parent.val);
        
        constructGraph(node.left);
        constructGraph(node.right);
    }
    
    constructGraph(root)
    const n = Object.keys(graph).length;
    
    const visited = new Set();
    visited.add(start);

    const queue = [ start ];
    visited.add(start);
    let times = 0;
    
    while (queue.length) {
        const len = queue.length; 
        
        for (let i = 0; i < len; i += 1) {
            const cur = queue.shift();
            console.log(cur)

            if (graph[cur] === undefined) continue;
            for (const next of graph[cur]) {
                if (visited.has(next)) continue;
                
                visited.add(next);
                queue.push(next);
            }
        }
        times += 1;
    }
    
    return times > 0 ? times - 1 : 0;
};