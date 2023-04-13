/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    const dfs = (arr, n) => {
        if (n === 0) return arr;
        n -= 1;

        const local = [];
        for (const item of arr) {
            if (Array.isArray(item)) {
                const items = dfs(item, n);
                local.push(...items);
            } else {
                local.push(item)
            }
        }        
        return local;
    }
    
    return dfs(arr, n)
};