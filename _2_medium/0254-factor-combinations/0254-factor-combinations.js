/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n) {
    const res = [];
   
    if (n === 1) return res;
    
    const backtrack = (start, num, arr) => {
        if (num === 1) {
            res.push([...arr]);
            return;
        }
        
        for (let i = start; i >= 2; i -= 1) {
            const rem = num % i;
            
            if (rem === 0) {
                arr.push(i);
                backtrack(i, num / i, arr);
                arr.pop();
            }
        }
    }
    
    backtrack(Math.floor(n / 2), n, []);
    
    return res;
};