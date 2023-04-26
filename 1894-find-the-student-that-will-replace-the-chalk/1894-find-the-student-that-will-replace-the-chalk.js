/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    const N = chalk.length;
    const sum = chalk.reduce((a,b) => a + b, 0);
    
    while (k >= sum) {
        k -= sum;
    }
    
    for (let i = 0; i < N; i += 1) {
        const cur = chalk[i];
        k -= cur;
        if (k < 0) return i;
    }
};