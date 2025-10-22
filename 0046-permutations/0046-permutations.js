/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const N = nums.lenght;

    const result = [];

    const backtrack = (paths, remain) => {
        if (remain.length === 0) {
            result.push(paths.slice());
            return;
        }

        for (const [ i, num ] of remain.entries()) {
            paths.push(num);

            backtrack(paths, [ ...remain.slice(0, i), ...remain.slice(i + 1) ]);

            paths.pop();

        }
    }

    backtrack([], nums);
    
    return result;
};