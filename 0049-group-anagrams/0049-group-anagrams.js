/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const obj = {};
    for (const str of strs) {
        const key = str.split("").sort().join("");
        if (obj[key] === undefined) obj[key] = [];
        obj[key].push(str);
    }
    return Object.values(obj);
};