/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    const binary = n.toString(2);
    
    console.log(binary);

    const dfs = (n) => {
        let x = 1;
        let y = 1;
        
        if (n <= 0) return 0;
        if (n === 1) return 1;
        
        while (x * 2 < n) x *= 2;
        
        y = 2 * x - n;
        x = n - x;
        
        const pick = dfs(x);
        const notPick = dfs(y);
        
        return Math.min(pick, notPick) + 1;
    }
    
    return dfs(n)    
};