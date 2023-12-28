/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {

    let sum = 0;
    
    for (const ch of s) {
        sum ^= (ch.charCodeAt(0) - 'a'.charCodeAt(0))
    }
    
    for (const ch of t) {
        sum ^= (ch.charCodeAt(0) - 'a'.charCodeAt(0))
    }
    
    return String.fromCharCode(sum + 'a'.charCodeAt(0))
};