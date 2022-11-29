/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
    const N = differences.length;
    
    const hidden = Array(N+1).fill(0);
    hidden[0] = 0;
    
    for (let i = 0; i < N; i += 1) {
        hidden[i+1] = hidden[i] + differences[i];
    }
    
    const min = Math.min(...hidden);
    
    const updatedHidden = hidden.map((v) => lower - min + v);
    
    const max = Math.max(...updatedHidden);
    
    console.log(updatedHidden);
    
    return max > upper ? 0 : upper - max + 1;
};