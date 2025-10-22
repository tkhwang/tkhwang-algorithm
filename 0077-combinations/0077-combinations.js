/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(N, k) {
    const result = [];

    const backtrack = (paths, index) => {
        if (paths.length === k) {
            result.push([...paths]);
            return;
        }
        if (index > N) return;

        for (let i = index; i <= N; i += 1) {
            paths.push(i);

            backtrack(paths, i + 1);

            paths.pop();
        }
    }

    backtrack([], 1);

    return result;
};