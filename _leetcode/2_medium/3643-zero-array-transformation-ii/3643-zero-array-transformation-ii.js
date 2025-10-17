/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function(nums, queries) {
    const N = nums.length;

    // number of query
    let left = 0;
    let right = queries.length;

    const isOK = (numberOfQuery) => {
        const diff = Array(N + 1).fill(0);
    
        for (let i = 0; i < numberOfQuery; i += 1) {
            const [ left, right, value ] = queries[i];

            diff[left] += value;
            diff[right + 1] -= value;
        }

        let pendingDecrements = 0;
        for (let i = 0; i < N; i += 1) {
            pendingDecrements += diff[i];
            if (pendingDecrements < nums[i]) return false;
        }
        return true;
    }

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // find minimum
        if (isOK(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left > queries.length ? -1 : left; 
};