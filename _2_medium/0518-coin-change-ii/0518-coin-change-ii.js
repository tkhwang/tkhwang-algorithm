/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const N = coins.length;
    const cache = {};
    const genKey = (index, money) => `${index}:${money}`;
    
    const dfs = (index, money) => {
        if (money === amount) return 1;
        if (money > amount) return 0;
        if (index >= N) return 0;
        if (cache[genKey(index, money)] !== undefined) return cache[genKey(index, money)];
        
        let res = 0;
        // use
        res += dfs(index, money + coins[index]);
        // not use
        res += dfs(index + 1, money)
            
        return cache[genKey(index, money)] = res;
    }
    
    return dfs(0, 0)
};