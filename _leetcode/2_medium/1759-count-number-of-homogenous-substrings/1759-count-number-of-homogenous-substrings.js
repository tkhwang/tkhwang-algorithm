/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    const N = s.length;
    const MOD = 7 + 10 ** 9;

    let res = 0;
    const obj = {};
    
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = s[right];
        obj[cur] = (obj[cur] || 0) + 1;
        while (s[left] !== s[right]) {
            const leftCh = s[left];
            obj[leftCh] -= 1;
            if (obj[leftCh] === 0) delete obj[leftCh];
            left += 1;
        }
        res += obj[cur];
        res %= MOD;
    }
    return res % MOD;
};