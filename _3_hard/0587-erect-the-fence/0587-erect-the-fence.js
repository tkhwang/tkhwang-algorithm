/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function(trees) {
    trees.sort((a,b) => a[0] - b[0] || a[1] - b[1]);
    
    const up = [];
    const down = [];
    
    const compare = ([x1,y1], [x2,y2], [x3,y3]) => (y3-y2)*(x2-x1) - (y2-y1)*(x3-x2)
    
    for (const tree of trees) {
        while (down.length > 1 && compare(down.at(-2), down.at(-1), tree) > 0) down.pop();
        while (up.length > 1 && compare(up.at(-2), up.at(-1), tree) < 0) up.pop();
        down.push(tree);
        up.push(tree);
    }
    
    return [...new Set([...up, ...down])];
};