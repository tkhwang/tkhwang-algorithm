/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    const n = s.length;
    const array = Array(n).fill(0);
    
    for (const [ start, end, direction ] of shifts) {
        for(let i = start; i <= end; i += 1) {
            if (direction === 1) array[i] += 1;
            else array[i] -= 1;
        }
    }
    
    let result = s.split("");
    
    for (let i = 0; i < n; i += 1) {
        if (array[i] === 0) continue;
        
        let changed = result[i].charCodeAt(0) + array[i];
        
        while (changed > 122) {
            changed -= 26;
        }
        while (changed < 97) {
            changed += 26;
        }
        
        result[i] = String.fromCharCode(changed)
    }
    
    return result.join("");    
};