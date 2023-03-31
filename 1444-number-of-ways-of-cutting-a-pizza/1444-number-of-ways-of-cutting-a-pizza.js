/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function(pizza, k) {
    const [ ROWS, COLS ] = [ pizza.length, pizza[0].length ];
    const MOD = 7 + 10 ** 9;
    const appleCount = Array(ROWS + 1).fill(null).map((_) => Array(COLS + 1).fill(0));
    const memo = Array(ROWS).fill(null).map(() => Array(COLS).fill(null).map((_) => Array(k+1).fill(-1)));
    
    const dp = (r, c, k) => {
        if (k === 1) return appleCount[r][c] > 0 ? 1 : 0;
        if (appleCount[r][c] === 0) return 0;
        if (memo[r][c][k] !== -1) return memo[r][c][k];
        
        let ans = 0;
        for (let newR = r; newR < ROWS - 1; newR += 1) {
            if (appleCount[newR + 1][c] === appleCount[r][c]) continue;
            ans = (ans + dp(newR + 1, c, k - 1)) % MOD;
        }
        
        for (let newCol = c; newCol < COLS - 1; newCol += 1) {
            if (appleCount[r][newCol + 1] === appleCount[r][c]) continue;
            ans = (ans + dp(r, newCol + 1, k - 1)) % MOD;
        }
        
        return memo[r][c][k] = ans;
    }
    
    for (let r = ROWS - 1; r >= 0; r -= 1) {
        for (let c = COLS - 1; c >= 0; c -= 1) {
            const cur = pizza[r][c] === "A" ? 1 : 0;
        appleCount[r][c] = appleCount[r][c+1] + appleCount[r+1][c] - appleCount[r+1][c+1] + cur;
        }
    }
    
    return dp(0, 0, k)
};