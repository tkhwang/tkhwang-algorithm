/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const shown = {};
    for (const [ i, ch ] of s.split("").entries()) {
        shown[ch] = i;
    }
    
    const freq = {};
    for (const ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    
    const stack = [];
    const seen = {};
    for (const [i, ch] of s.split("").entries()) {
        if (seen[ch]) {
            freq[ch] -= 1;
            continue;
        }
        
        // 뺄때 
        while (stack.length && stack.at(-1) > ch && freq[stack.at(-1)] > 0) {
            const pop = stack.pop();
            seen[pop] = false;
        }
        // 넣을 때
        stack.push(ch);
        seen[ch] = true;
        freq[ch] -= 1;
    }
    
    return stack.join("");
};