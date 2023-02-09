/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    const N = chalk.length;
    const all = chalk.reduce((a,b) => a + b, 0);
    
    let n = k;
    let i = 0;
    
    while (n > 0) {
        while (n - all > 0) n -= all;
        
        if (n - chalk[i] < 0) return i;
        
        n -= chalk[i];
        i = (i + 1) % N;
    }
    
    return i;
};