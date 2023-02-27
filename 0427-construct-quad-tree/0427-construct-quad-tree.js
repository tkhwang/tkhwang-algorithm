/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
    const N = grid.length;
    
    const dfs = (left, top, right, bottom) => {
        if (left === right) return new Node(grid[top][left], true, null, null, null, null);
        
        const midY = Math.floor((left + right) / 2);
        const midX = Math.floor((top + bottom) / 2);
        
        const topLeft = dfs(left, top, midY, midX);
        const topRight = dfs(midY + 1, top, right, midX);
        const bottomLeft = dfs(left, midX + 1, midY, bottom);
        const bottomRight = dfs(midY + 1, midX + 1, right, bottom);
        
        if (topLeft.val === topRight.val && topRight.val === bottomLeft.val &&
            bottomLeft.val === bottomRight.val && bottomRight.val === topLeft.val &&
            topLeft.isLeaf && topRight.isLeaf && bottomLeft.isLeaf && bottomRight.isLeaf
           ) {
            return new Node(topLeft.val, true, null, null, null, null);
        }
        
        return new Node(0, false, topLeft, topRight, bottomLeft, bottomRight);
    }
    
    return dfs(0, 0, N - 1, N - 1);
};