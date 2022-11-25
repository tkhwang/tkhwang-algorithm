/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {

    const reverse = (str) => str.split("").reverse().join("");
    
    const recursive = (str) => {
        let N = str.length;
        let index = 0;
        
        for (let i = N - 1; i >= 0; i -= 1) {
            if (str[i] === s[index]) index += 1;
        }
        
        if (index === N) return str;

        //  [0 ... [index ... N-1 ]]
        
        let remain = str.slice(index);
        
        return reverse(remain) + recursive(str.slice(0, index)) + str.slice(index);
    }

    return recursive(s)
};