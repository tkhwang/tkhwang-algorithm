/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const converted = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
    
    return converted === converted.split("").reverse().join("");
};