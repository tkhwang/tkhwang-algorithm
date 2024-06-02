/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let count = 0;

    let max = -Infinity;
    
    for (const event of s) {
        if (event === 'E') {
            count += 1;
        } else if (event === 'L') {
            count -= 1;
        }

        max = Math.max(max, count);
    }
    
    return max;
};