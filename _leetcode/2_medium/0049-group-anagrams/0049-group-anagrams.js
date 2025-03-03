/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const obj = {};
    
    for (const str of strs) {
        const sortedStr = str.split("").sort().join("");
        if (obj[sortedStr] === undefined) obj[sortedStr] = [];
        obj[sortedStr].push(str);
    }    
    
    return Object.values(obj);
};