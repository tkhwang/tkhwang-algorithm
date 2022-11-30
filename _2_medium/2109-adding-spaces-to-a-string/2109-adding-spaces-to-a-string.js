/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(_s, spaces) {
    const s = _s.split("");
    
    const res = [ s.slice(0, spaces[0]).join("") ];
    
    for (let i = 1; i < spaces.length; i += 1) {
        const prv = spaces[i-1];
        const cur = spaces[i];
        
        res.push(s.slice(prv, cur).join(''));
    }
    
    res.push(s.slice(spaces.at(-1)).join(""));
    
    return res.join(" ");
};