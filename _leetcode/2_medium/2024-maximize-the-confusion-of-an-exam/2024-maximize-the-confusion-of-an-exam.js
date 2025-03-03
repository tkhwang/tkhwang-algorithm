/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    const N = answerKey.length;
    
    let max = -Infinity;
    
    const check = (arr, freq, target) => {
        let left = 0;
        for (let right = 0; right < N; right += 1) {
            const cur = answerKey[right];
            freq[cur] = (freq[cur] || 0) + 1;
            
            while (left <= right && freq[target] > k) {
                const leftNum = answerKey[left];
                freq[leftNum] -= 1;
                if (freq[leftNum] === 0) delete freq[leftNum];
                left += 1;
            }
            if (max < right - left + 1) max = right - left + 1;
        }
    }
    
    check(answerKey, { "T": 0, "F": 0 }, "T");
    check(answerKey, { "T": 0, "F": 0 }, "F");
    
    return max;
};