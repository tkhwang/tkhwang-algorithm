/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    
    const array = s.split("");
    const N = array.length;

    let left = 0;
    let right = N - 1;

    while (left < right) {
        while (left < right && !vowels.has(array[left])) left += 1;
        while (left < right && !vowels.has(array[right])) right -= 1;

        [ array[left], array[right] ] = [ array[right], array[left] ];
        left += 1;
        right -= 1;
    }

    return array.join("");
}