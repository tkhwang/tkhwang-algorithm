/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function(s) {
    const N = s.length;

    const freq = {};
    for (const ch of s) {
        freq[ch] = (freq[ch] ?? 0) + 1
    }

    const getNumber = (ch) => ch.charCodeAt(0) - 48;

    for (let i = 1; i < N; i += 1) {
        const prv = s[i-1];
        const cur = s[i];

        if (prv === cur) continue;
        if (freq[prv] === getNumber(prv) && freq[cur] === getNumber(cur)) return `${prv}${cur}`;
    }
    return "";
};