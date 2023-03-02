/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    const N = chars.length;
    
    let prv = -1;
    let prvIndex = -1;
    let count = 0;
    
    for (let i = 0; i < N + 1; i += 1) {
        const cur = chars[i];
        
        if (prv === cur) {
            count += 1;
        } else {
            if (prv !== -1) {
                chars.splice(prvIndex + 1, (i-1) - (prvIndex + 1) + 1);
                if (count > 1) {
                    const willAdd = String(count).split("");
                    chars.splice(prvIndex + 1, 0, ...willAdd);
                    i = prvIndex + 1 + willAdd.length;
                }
            }
            count = 1;
            prvIndex = i;
        }
        prv = cur;
    }
    return chars.length;
};