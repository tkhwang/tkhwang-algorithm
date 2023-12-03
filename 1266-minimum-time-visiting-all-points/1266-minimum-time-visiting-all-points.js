/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {

    var toTime = function(from, to) {
        var xDiff = Math.abs(from[0] - to[0]);
        var yDiff = Math.abs(from[1] - to[1]);

        return Math.max(xDiff, yDiff);
    };
    
    var time = 0;

    for (var i = 1; i < points.length; i++) {
        time += toTime(points[i - 1], points[i]);
    }

    return time;
};