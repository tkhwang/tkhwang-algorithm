/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const N = s.length;
    let max = 0;
    let maxValue = "";

    const expandAroundCorner = (left, right) => {
        let max = 0;
        let maxValue = [];
        while (0 <= left && right < N && s[left] === s[right]) {
            if (max < right - left + 1) {
                max = right - left + 1;
                maxValue = [ left, right ];
            }
            left -= 1;
            right += 1;
        }
        return [ max, maxValue ];
    }

    for (let i = 0; i < N; i += 1) {
        const [ oddMax, oddMaxValue] = expandAroundCorner(i, i);
        if (max < oddMax) {
            ([ max, maxValue ] = [ oddMax, oddMaxValue ]);
        }

        const [evenMax, evenMaxValue ] = expandAroundCorner(i, i + 1);
        if (max < evenMax) {
            ([ max, maxValue ] = [ evenMax, evenMaxValue ]);
        }
    }

    return maxValue.length > 0 ? s.slice(maxValue[0], maxValue[1] + 1) : "";
};