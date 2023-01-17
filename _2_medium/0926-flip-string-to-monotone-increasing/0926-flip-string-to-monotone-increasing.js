/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let numOnes = 0;
    let numFlips = 0;
    
    for (const n of s) {
        if (n === "1") {
            numOnes += 1;
        } else if (numOnes > 0) {
            numFlips += 1;
            numOnes -= 1;
        }
    }
    
    return numFlips;
};