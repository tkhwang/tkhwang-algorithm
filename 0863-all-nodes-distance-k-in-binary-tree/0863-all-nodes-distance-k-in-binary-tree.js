/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    const graph = {};
    
    const dfs = (cur, parent) => {
        if (!cur) return;
        
        if (parent) {
            if (graph[cur.val] === undefined) graph[cur.val] = [];
            if (graph[parent.val] === undefined) graph[parent.val]= [];
            graph[cur.val].push(parent.val);
            graph[parent.val].push(cur.val);
        }
        
        dfs(cur.left, cur);
        dfs(cur.right, cur);
    }
    
    dfs(root, null);
    
    const res = [];
    
    const bfs = (start, seen) => {
        const queue = [ start ];
        let steps = 0;
        
        while (queue.length) {
            const len = queue.length;
            
            for (let i = 0; i < len; i += 1) {
                const cur = queue.shift();
                
                if (steps === k) {
                    res.push(cur);
                }
                if (steps > k) return;

                if (graph[cur] === undefined) continue;
                for (const next of graph[cur]) {
                    if (next === cur) continue;
                    if (seen.has(next)) continue;
                    
                    seen.add(next);
                    queue.push(next);
                }
            }
            
            steps += 1;
        }
    }
    
    const seen = new Set();
    seen.add(target.val);
    
    bfs(target.val, seen);
    
    return res;
};