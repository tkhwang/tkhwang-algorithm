/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const firstNums = version1.split(".");
    const secondNums = version2.split(".");
    
    const trim = (str) => {
        if (!str) return "0";
        
        const N = str.length;
        let i = 0;
        while (i < N && str[i] === "0") i += 1;
        return str.slice(i) || "0";
    }
    
    const comp = (first, second) => {
        if (+first > +second) return 1;
        if (+first < +second) return -1;
    }    
    
    let i = 0;
    
    while (true) {
        const [ first, second] = [ firstNums[i], secondNums[i] ];
        
        if (first === undefined && second === undefined) return 0;
        
        const result = comp(trim(first), trim(second));
        if (result === 1 || result === -1) return result;
        
        i += 1;
    }    
};