/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    const N = s.length;
    
    return new Set(s.split("")).size;        
};