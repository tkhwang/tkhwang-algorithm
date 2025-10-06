/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    const dfs = (paren, openCount, closeCount) => {
        if (openCount === n && closeCount === n) {
            result.push(paren);
            return;
        }

        if (openCount < n) dfs(paren + "(", openCount + 1, closeCount);
        if (closeCount < openCount) dfs(paren + ")", openCount, closeCount + 1);
    }

    dfs("", 0, 0);

    return result;
};