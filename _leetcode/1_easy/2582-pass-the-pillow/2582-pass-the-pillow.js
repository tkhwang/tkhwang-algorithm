/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(N, time) {
    let position = 1;
    
    const RIGHT = 1;
    const LEFT = -1;

    let direction = RIGHT;

    for (let i = 1; i <= time; i += 1) {
        if (position === N) {
            direction = LEFT;
        } else if (position === 1) {
            direction = RIGHT;
        }

        position += direction;
    }
    
    return position;
};