/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    const say = (str, index, cur, ch, count) => {
        if (index >= str.length + 1) return cur;
     
        if (index === 0) {
            return say(str, index + 1, cur, str[index], 1);
        } if (str[index-1] === str[index]) {
            return say(str, index + 1, cur, ch, count + 1);
        } else {
            return say(str, index + 1, cur + count + ch, str[index], 1);
        }
    }
    
    const dfs = (n) => {
        if (n === 1) return "1";
        
        const prv = dfs(n-1);
        
        return say(String(prv), 0, "", "", 0)
    }
    return dfs(n);
};