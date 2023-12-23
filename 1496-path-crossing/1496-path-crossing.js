/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let x = 0, y = 0;
    let visited = new Set();
    visited.add("0,0");

    for (let direction of path) {
        if (direction === 'E') {
            x++;
        } else if (direction === 'W') {
            x--;
        } else if (direction === 'N') {
            y++;
        } else if (direction === 'S') {
            y--;
        }

        let currentPos = `${x},${y}`;
        if (visited.has(currentPos)) {
            return true;
        }

        visited.add(currentPos);
    }

    return false;    
};