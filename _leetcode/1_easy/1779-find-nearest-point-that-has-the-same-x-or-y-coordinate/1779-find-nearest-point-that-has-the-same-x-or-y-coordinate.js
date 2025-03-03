/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let min = Infinity;
    let minIndex;
    
    for (const [ i, [ curX, curY ] ] of points.entries()) {
        if ((curX !== x  && curY !== y)) continue;
        
        const dist = curX === x ? Math.abs(y - curY) :
                     curY === y ? Math.abs(x - curX) :
                     0;
        if (min > dist) {
            min = dist;
            minIndex = i;
        }
    }
    
    return min == Infinity ? -1 : minIndex;
};