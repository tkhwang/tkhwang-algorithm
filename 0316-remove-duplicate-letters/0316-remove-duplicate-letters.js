/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const shown = {};
    for (const [ i, ch ] of s.split("").entries()) {
        shown[ch] = i;
    }
    
    const stack = [];
    const seen = {};
    for (const [i, ch] of s.split("").entries()) {
        if (seen[ch]) continue;
        
        // 뺄때 
        while (stack.length && stack.at(-1) > ch && shown[stack.at(-1)] > i) {
            const pop = stack.pop();
            seen[pop] = false;
        }
        // 넣을 때
        stack.push(ch);
        seen[ch] = true;
    }
    
    return stack.join("");
};