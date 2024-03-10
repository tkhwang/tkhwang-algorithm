/**
 * @param {string[]} arr
 * @return {string[]}
 */
var shortestSubstrings = function(arr) {
    const getAllSubstrings = (str) => {
      var i, j, result = [ "" ];

      for (i = 0; i < str.length; i++) {
          for (j = i + 1; j < str.length + 1; j++) {
              result.push(str.slice(i, j));
          }
      }
      return result;
    }
    
    const getAllSubstringsExcept = (exceptStr, obj) => {
        const res = [];
        for (const key in obj) {
            if (key === exceptStr) continue;
            res.push(...obj[key]);
        }
        return res;
    }
    
    const getOthersExcept = (index, arr) => {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
    }
    
    const allSubstrings = new Set();
    const obj = {};
    
    for (const str of arr) {
        obj[str] = [];
        const substrings = getAllSubstrings(str);
        for (const substring of substrings) {
            if (!obj[str].includes(substring)) {
                obj[str].push(substring);
            }
        }
    }

    const res = [];
    
    for (const [index, str] of arr.entries()) {
        const substrings = getAllSubstrings(str);
        const allSubstringExceptThis = getAllSubstringsExcept(str, obj);

        // console.log(str, allSubstringExceptThis)
        
        const local = [];
        for (const substring of substrings) {
            const otherArr = getOthersExcept(index, arr);
            if (!otherArr.includes(substring) &&
                !allSubstringExceptThis.includes(substring)) {
                local.push(substring);
            }
        }
        
        local.sort((a,b) => a.length - b.length || a.localeCompare(b));
        
        if (local.length === 0) res.push("");
        else res.push(local.at(0));
    }
    return res;
};