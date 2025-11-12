/**
 * @param {string} s
 * @return {boolean}
 */
var scoreBalance = function(s) {
    const N = s.length;

    const getScore = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

    const prefixSum = Array(N).fill(0);
    prefixSum[0] = getScore(s[0]);

    for (let i = 1; i < N; i += 1) {
        prefixSum[i] = prefixSum[i-1] + getScore(s[i]);
    }

    console.log(prefixSum);

    for (let i = 0; i < N; i += 1) {
        // left:  [0, i]
        // right: [i+1, N-1];
        const left = prefixSum[i];
        const right = prefixSum[N-1] - prefixSum[i];
        if (left === right) return true;
    }
    return false;
};