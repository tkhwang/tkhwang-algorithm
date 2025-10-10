/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];

    const dfs = (paths, start) => {
        if (paths.length === k) {
            res.push([...paths]);
            return;
        }

        if (start > n) return;

        for (let i = start; i <= n; i += 1) {
            paths.push(i);
            dfs(paths, i + 1)
            paths.pop();
        }
    }

    dfs([], 1);

    return res;
};