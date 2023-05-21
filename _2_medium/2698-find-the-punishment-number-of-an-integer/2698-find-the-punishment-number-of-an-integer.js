/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(N) {
    let res = 0;

    const dfs = (target, remain, index) => {
        if (index >= target.length) {
            return remain === 0;
        }
        
        let res = false;
        for (let i = index; i < target.length; i += 1) {
            const cur = Number(target.slice(index, i + 1));
            if (remain - cur < 0) continue;
            res += dfs(target, remain - cur, i + 1);
        }
        return res;
    }
    
    for (let i = 1; i <= N; i += 1) {
        const cur = i * i;
        const strNum = String(cur);
        
        if (dfs(strNum, i, 0)) res += cur;
    }
    return res;
};