/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    const rev = (num) => {
        return Number(String(num).split("").reverse().join(""));
    }
    
    const obj = {};
    const MOD = 7 + 10 ** 9;
    
    for (const [ i, num ] of nums.entries()) {
        const revNum = rev(num);
        const diff = num - revNum;
        
        if (obj[diff] === undefined) obj[diff] = [];
        obj[diff].push(i);
    }

    const keys = Object.keys(obj);
    keys.filter((key) => obj[key].length > 1);
    
    let res = 0;
    keys.forEach((key) => {
        const len = obj[key].length;
        res += len * (len - 1) / 2;
        res %= MOD;
    })
    
    return res % MOD;    
};