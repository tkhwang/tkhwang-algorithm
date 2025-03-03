/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(_num) {
    const num = String(_num).split("").map(Number);
    
    const N = String(num).length;
    
    for (let i = 0; i < N; i += 1) {
        if (num[i] === 6) {
            num[i] = 9;
            break;
        }
    }
    
    return num.join("");
};