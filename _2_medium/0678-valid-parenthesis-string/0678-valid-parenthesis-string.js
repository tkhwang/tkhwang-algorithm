/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    const N = s.length;
    
    const opens = [];
    const stars = [];
    
    for (const [ i, ch ] of s.split("").entries()) {
        if (ch === "*") {
            stars.push(i);
        } else if (ch === "(") {
            opens.push(i);
        } else if (ch === ")") {
            if (opens.length > 0) opens.pop();
            else if (stars.length > 0) stars.pop();
            else return false;
        }
    }
  
    while (opens.length > 0) {
        if (stars.length === 0) return false;
        else {
            if (opens.at(-1) < stars.at(-1)) {
                opens.pop();
                stars.pop();
            } else {
                return false;
            }
        }
    }
    
    return true;    
};