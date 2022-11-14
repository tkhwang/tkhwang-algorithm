/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const obj = {
        "1": "a",
        "2": "b",
        "3": "c",
        "4": "d",
        "5": "e",
        "6": "f",
        "7": "g",
        "8": "h",
        "9": "i",
        "10#": "j",
        "11#": "k",
        "12#": "l",
        "13#": "m",
        "14#": "n",
        "15#": "o",
        "16#": "p",
        "17#": "q",
        "18#": "r",
        "19#": "s",
        "20#": "t",
        "21#": "u",
        "22#": "v",
        "23#": "w",
        "24#": "x",
        "25#": "y",
        "26#": "z"
    }
    
    const N = s.length;
    
    let res = "";
    
    const dfs = (remain, index) => {
        if (index < 0) {
            return "";
        }

        const ch = remain.slice(index);
        
        if (obj[ch] === undefined) {
            return dfs(remain, index - 1);
        } else {
            return dfs(remain.slice(0, index), index - 1) + obj[ch];
        }
    }
    
    return dfs(s, N-1);
};