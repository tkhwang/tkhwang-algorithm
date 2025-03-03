/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(_s) {
    const N = _s.length;
    const s = _s.split("");
    let right = N - 1;
    
    const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    
    for (let left = 0; left < right; left += 1) {
        if (!set.has(s[left])) continue;
        
        while (left < right && !set.has(s[right])) { 
            right -= 1;
        }
        
        ([ s[left], s[right] ] = [ s[right], s[left] ]);
        right -= 1;
    }

    return s.join("");
};