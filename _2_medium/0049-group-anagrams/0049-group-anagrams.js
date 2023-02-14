/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const genKey = (str) => str.split("").sort().join("");
    const obj = {};
    
    for (const str of strs) {
        const key = genKey(str);
        if (obj[key] == undefined) obj[key] = [];
        obj[key].push(str);
    }
    
    return Object.values(obj);
};