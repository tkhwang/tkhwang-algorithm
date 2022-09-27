/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    const n = dominoes.length;
    
    const closest = (dominoes, direction) => {
        const res = Array(n).fill(Infinity);
        
        for (let i = 0; i < n; i += 1) {
            if (dominoes[i] === direction) {
                res[i] = 0
            } else if (dominoes[i] === ".") {
                if (i > 0) res[i] = Math.min(res[i-1] + 1, Infinity);
            } else {
                res[i] = Infinity;
            }
        }
        return res;
    }
    
    
    const right = closest(dominoes, "R")
    const left = closest(dominoes.split("").reverse().join(""), "L").reverse();
    
    const res = Array(n);
    for (let i = 0; i < n; i += 1) {
        if (left[i] < right[i]) res[i] = "L"
        else if (left[i] > right[i]) res[i] = "R"
        else res[i] = "."
    } 
    
    return res.join("")
};