/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function(_s) {
    const N = _s.length;
    const s = _s.split("");

    const suffixMin = Array(N).fill(0);
    suffixMin[N-1] = s[N-1]
    for (let i = N-2; i >= 0; i -= 1) {
        const latest = suffixMin[i+1];
        const cur = s[i];
        
        suffixMin[i] = cur < latest ? cur : suffixMin[i+1];
    }

    const t = [];
    let res = "";

    for (const [ i, ch ] of s.entries()) {
        while (t.length && t[t.length - 1] <= suffixMin[i]) res += t.pop();
        t.push(ch);
    }
    
    while (t.length) {
        res += t.pop();
    }
    
    return res;
};