/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    const N = letters.length;

    let left = 0;
    let right = N - 1;

    const isOK = (index) => target < letters[index];

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (isOK (mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return letters[left % N];
};