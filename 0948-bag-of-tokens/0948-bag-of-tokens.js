/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a,b) => a - b);
    let score = 0;
    let max = -Infinity;
    
    const first = (array) => array[0];
    const last =  (array) => array[array.length - 1];
    
    while (tokens.length && (power >= first(tokens) || score) ) {
        while (tokens.length && power >= first(tokens)) {
            power -= tokens.shift();
            score += 1;
        }
        
        if (max < score) max = score;
        
        if (tokens.length && score) {
            power += tokens.pop();
            score -= 1;
        }
    }
    
    return max === -Infinity ? 0 : max;
};