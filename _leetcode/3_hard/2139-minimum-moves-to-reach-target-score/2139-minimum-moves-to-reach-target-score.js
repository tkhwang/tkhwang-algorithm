/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function(target, maxDoubles) {
    let min = Infinity;
    
    const dfs = (remain, double, steps) => {
        if (remain === 0) {
            if (min > steps) min = steps - 1;
            return;
        }
        
        if (remain < 0 || double < 0) return;

        if (double > 0) {
            if (remain % 2 === 0) {
                dfs(Math.floor(remain/2), double - 1, steps + 1);
            } else {
                dfs(remain - 1, double, steps + 1);
            }
        } else {
            dfs(0, double, steps + remain);
        }
    }
    
    dfs(target, maxDoubles, 0);
    
    return min;
};