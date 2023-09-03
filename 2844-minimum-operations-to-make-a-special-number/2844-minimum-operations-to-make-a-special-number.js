/**
 * @param {string} num
 * @return {number}
 */
var minimumOperations = function(num) {
    const N = num.length;
    let min = N;
    
    for (let i = N - 1; i >= 0; i -= 1) {
        for (let j = i - 1; j >= 0; j -= 1) {
            const cur = Number(num[j]) * 10 + Number(num[i]);
            if (Number(cur) % 25 === 0) {
                const length = N - j - 2;
                if (min > length) {
                    min = length;
                    break;
                }
            }
        }
        if (num[i] === '0') min = Math.min(min, N - 1);
    }
    
    return min;
};