/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    const N = points.length;
    
    points.sort((a,b) => a[1] - b[1]);
    
    let arrows = 1;
    let end = points[0][1];
    
    for (const [ s, e ] of points) {
        if (end < s) {
            arrows += 1;
            end = e;
        }
    }
    return arrows;
};