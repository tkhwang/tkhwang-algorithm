/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const N = s.length;

    if (numRows === 1) return s;
    
    const arr = Array(numRows).fill(null).map((_) => []);
    
    let delta = -1;
    let i = 0;
    let j = 0;
    
    const increment = (index) => {
        if (index % numRows === numRows - 1) {
            delta *= -1;
        } else if (index % numRows === 0) {
            delta *= -1;
        }
        
        index += delta;
        return index;
    }
    
    while (i < N) {
        arr[j].push(s[i]);
        
        i += 1;
        j = increment(j, delta)
    }
    
    return arr.map((v) => v.join('')).join("");
};