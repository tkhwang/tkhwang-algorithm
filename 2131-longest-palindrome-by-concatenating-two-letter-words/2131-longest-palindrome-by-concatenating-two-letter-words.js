/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    const counts = Array(26).fill(null).map((_) => Array(26).fill(0));

    let sum = 0;

    for (const word of words) {
        const first = word[0].charCodeAt(0) - 'a'.charCodeAt(0);
        const second = word[1].charCodeAt(0) - 'a'.charCodeAt(0);

        if (counts[second][first] > 0) {
            sum += 4;
            counts[second][first] -= 1;
        } else {
            counts[first][second] += 1;
        }
    }

    for (let i = 0; i < 26; i += 1) {
        if (counts[i][i] > 0) {
            sum += 2;
            break;
        }
    }

    return sum;
};