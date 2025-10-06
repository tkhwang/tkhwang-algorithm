/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const N = candidates.length;

    const result = [];

    const backtrack = (paths, index, remain) => {
        if (remain === 0) result.push([...paths]);
        
        if (index > N - 1) return;

        for (let i = index; i < N; i += 1) {
            const cur = candidates[i];
            if (remain - cur < 0) continue;

            paths.push(cur);
            backtrack(paths, i, remain - cur);
            paths.pop();
        }
    }

    backtrack([], 0, target);

    return result;
};