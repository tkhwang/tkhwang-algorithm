/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    const N = chalk.length;
    
    const sum = chalk.reduce((a,b) => a + b, 0);
    
    while (k > 0) {
        k -= sum;
    }
    
    console.log(k);
    
    if (k === 0) return 0;
    
    k += sum;

    for (let i = 0; i < N; i += 1) {
        if (k < chalk[i]) return i;
        k -= chalk[i];
    }
};