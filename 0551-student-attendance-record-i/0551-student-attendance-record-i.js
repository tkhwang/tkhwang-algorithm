/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    const N = s.length;
    const absents = [];
    
    for (const [ index, ch ] of s.split("").entries()) {
        if (ch === 'A') {
            absents.push(index);
        }
    }

    const hasAbsentOk = absents.length < 2;
    if (!hasAbsentOk) return false;

    for (let right = 0; right < N; right += 1) {
        const cur = s[right];
        if (cur !== "L") continue;

        let left = right;
        while (s[left] === 'L' && left < N) {
            left += 1;
        }
        if (left - right + 1 >= 3 + 1) return false;
    }

    return true;
};