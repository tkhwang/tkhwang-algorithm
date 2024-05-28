/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    function getDiff(index) {
        return Math.abs(s[index].charCodeAt(0) - t[index].charCodeAt(0));
    }

    const N = s.length;

    let max = -Infinity;

    let cost = 0;
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        cost += getDiff(right);
        while (cost > maxCost && left <= right) {
            cost -= getDiff(left);
            left += 1;
        }
        if (max < right - left + 1) max = right - left + 1;
    }

    return max;
};