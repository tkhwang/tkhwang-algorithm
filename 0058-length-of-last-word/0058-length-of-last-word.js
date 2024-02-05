/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const N = s.length;
    
    // find start
    let left = 0;
    while (left < N && s[left] === " ") left += 1;
           
    // find end
    let right = N - 1;
    while (0 <= right && s[right] === " ") right -= 1;
    

    const valid = s.slice(left, right + 1);
    
    const words = valid.split(" ");
    
    return words.at(-1).length;
};