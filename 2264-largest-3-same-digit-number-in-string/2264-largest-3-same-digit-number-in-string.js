/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    const N = num.length;
    
    let maxStr = ""
    let max = -Infinity;
    for (let i = 1; i < N - 1; i += 1) {
        console.log(i, maxStr);
        
        const prv = num[i-1];
        const cur = num[i];
        const nxt = num[i+1];
        
        if (prv === cur && cur === nxt) {
            if (max < Number(prv + cur + nxt)) {
                maxStr = prv + cur + nxt;
                max = Number(prv + cur + nxt);
            }
        }
    }
    
    return maxStr;
};