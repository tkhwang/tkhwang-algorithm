/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    const N = colors.length;
    
    let alice = 0;
    let bob = 0;
    
    for (let i = 1; i < N - 1; i += 1) {
        if (colors[i-1] === colors[i] && colors[i] === colors[i+1]) {
            if (colors[i] === 'A') alice += 1;
            else bob += 1;
        }
    }
    
    return alice - bob >= 1;
};