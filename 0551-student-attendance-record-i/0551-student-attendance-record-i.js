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

    const hasWrongLate = s.indexOf("LLL") > -1;
    return !hasWrongLate;
};