/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {

    const dfs = (cur, seen) => {
        if (arr[cur] === 0) return true;
        
        let res = false;
        let next = cur + arr[cur];
        if (!seen.has(next)) {
            seen.add(next);
            res = res || dfs(next, seen);
            seen.delete(next);
        }
        next = cur - arr[cur];
        if (!seen.has(next)) {
            seen.add(next);
            res = res || dfs(next, seen);
            seen.delete(next);
        }
        return res;
    }

    const seen = new Set();
    seen.add(start)
    
    return dfs(start, seen);
};