/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.toLowerCase().replace(/[^0-9a-z]/g, "");
    
    return str === str.split("").reverse().join("");
};