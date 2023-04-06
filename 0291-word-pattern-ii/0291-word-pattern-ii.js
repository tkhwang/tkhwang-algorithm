/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPatternMatch = function(pattern, s) {

    const NP = pattern.length;
    const NS = s.length;
    
    const map = new Map();
    const set = new Set();
    
    const backtrack = (ip, is) => {
        if (ip === NP) return is === NS;
        if (is === NS) return ip === NP;
        
        const pat = pattern.charAt(ip);
        
        if (map.has(pat)) {
            const word = map.get(pat);
            const check = s.slice(is, is + word.length);

            if (word !== check) return false;
            return backtrack(ip + 1, is + word.length);
        }
        
        let str = "";
        
        for (let i = is; i < NS; i += 1) {
            const char = s.charAt(i);
            str += char;
            
            if (!set.has(str)) {
                map.set(pat, str);
                set.add(str);
                
                if (backtrack(ip + 1, i + 1)) return true;
                
                map.delete(pat);
                set.delete(str);
            }
        }
        return false;
    }
    
    return backtrack(0, 0)
};