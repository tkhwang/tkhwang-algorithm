/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const N = s.length;
    const cache = {};
    
    const decode = (index) => {
        if (index >= N) return 1;
        if (s[index] === "0") return 0;
        if (cache[index] !== undefined) return cache[index];
        
        let result = 0;
        result += decode(index + 1);
        if (Number ("" + s[index] + s[index+1]) <= 26) result += decode(index + 2);
        cache[index] = result;
        return result;
    }
    
    return decode(0)
};