/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    const ch2index = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0);

    const filtered = letters.filter((ch) => ch2index(ch) - ch2index(target) > 0);
    
    filtered.sort((a,b) => (ch2index(a) - ch2index(target)) - (ch2index(b) - ch2index(target)))


    return filtered[0] ?? letters[0];
};