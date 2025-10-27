/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);

    const stack = [];

    for (const interval of intervals) {
        if (stack.length === 0 || stack.at(-1)[1] < interval[0]) {
            stack.push(interval)
        } else {
            stack.at(-1)[1] = Math.max(
                stack.at(-1)[1],
                interval[1]
            )
        }
    }
    return stack;
};