/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const lengths = strs.map((str) => str.length);
    const min = Math.min(...lengths);
    
    let common = "";
    for (let i = 0; i <= min; i += 1) {
        const prefix = strs[0].slice(0, i + 1);
        let isMatching = true;
        for (const str of strs) {
            if (!str.startsWith(prefix)) {
                isMatching = false;
                break;
            }
        }
        if (!isMatching) return common;
        common = prefix;
    }
    return common;
}