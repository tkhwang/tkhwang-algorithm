/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const N = s.length;
    
    let maxValue = [];
    let max = 0;
    
    
    const expandArroundCorner = (left, right) => {
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
        // odd
        const [ oddMax, oddMaxValue ] = expandArroundCorner(i, i);
        if (max < oddMax) {
            max = oddMax;
            maxValue = oddMaxValue;
        }
        
        // even
        const [ evenMax, evenMaxValue ] = expandArroundCorner(i, i + 1);
        if (max < evenMax) {
            max = evenMax;
            maxValue = evenMaxValue;
        }
    }
    
    return maxValue.length > 0 
            ? s.slice(maxValue[0], maxValue[1] + 1)
            : "";
};