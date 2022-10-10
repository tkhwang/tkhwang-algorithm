/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(_palindrome) {
    const N = _palindrome.length;
    if (N === 1) return "";
    
    const palindrome = _palindrome.split("");
    
    for (let i = 0; i < Math.floor(N/2); i += 1) {
        if (palindrome[i] !== 'a') {
            palindrome[i] = 'a';
            return palindrome.join("");
        }
    }
    palindrome[palindrome.length - 1] = "b";
    return palindrome.join("");
};