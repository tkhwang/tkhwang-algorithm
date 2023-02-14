/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];
    
    if (!root) return [];
    
    const bfs = (start) => {
        const queue = [ start ];
        
        while (queue.length) {
            const len = queue.length;
            
            const level = [];
            
            for (let i = 0; i < len; i += 1) {
                const cur = queue.shift();
                
                level.push(cur.val);
                
                for (const child of cur.children) {
                    queue.push(child);
                }
            }
            
            res.push(level);
        }
    }
    
    bfs(root);
    
    return res;
};