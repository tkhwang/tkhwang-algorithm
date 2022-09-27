/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    const n = dominoes.length;
    const RIGHT = 0;
    const LEFT = 1;
    const FINAL = 2;
    
    const dp = Array(3).fill(null).map((_) => Array(n).fill("."));
    dp[RIGHT][0] = dominoes[0];
    dp[LEFT][n-1] = dominoes[n-1];
    
    for (let i = 1; i < n; i += 1) {
        if (dominoes[i] === "R") dp[RIGHT][i] = "R";
        else if (dominoes[i] === "." && dp[RIGHT][i-1] === "R") dp[RIGHT][i] = "R"
    }
    
    for (let i = n-2; i >= 0; i -= 1) {
        if (dominoes[i] === "L") dp[LEFT][i] = "L";
        else if (dominoes[i] === "." && dp[LEFT][i+1] === "L") dp[LEFT][i] = "L"
    }
    
    for (let i = 0; i < n; i += 1) {
        if (dp[LEFT][i] === "." && dp[RIGHT][i] !== ".") dp[FINAL][i] = dp[RIGHT][i];
        else if (dp[LEFT][i] !== "." && dp[RIGHT][i] === ".") dp[FINAL][i] = dp[LEFT][i];
        else if (dp[LEFT][i] === dp[RIGHT][i]) dp[FINAL][i] = dp[LEFT][i];
    }
    
    let left = 0;
    while (left < n) {
        while (left < n && !(dp[RIGHT][left] === "R" && dp[LEFT][left] === "L")) {
            left += 1;
        }
        let right = left;
        while (right < n && dp[RIGHT][right] === "R" && dp[LEFT][right] === "L") {
            right += 1;
        }
        let again = right;
        right -= 1;

        const length = right - left + 1;
        if (length === 1) dp[FINAL][left] = "."
        else {
            while (left < right) {
                dp[FINAL][left] = "R";
                dp[FINAL][right] = "L";
                left += 1;
                right -= 1;
            }
        }
        left = again;
    }
    
    return dp[FINAL].join("")
};