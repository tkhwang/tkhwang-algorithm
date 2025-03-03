/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    const total = [ ...cardPoints, ...cardPoints ];
    const N = cardPoints.length;
    
    let max = -Infinity;
    let sum = 0;
    let left = 0;
    for (let right = 0; right < 2 * N; right += 1) {
        sum += total[right];
        if (right - left + 1 > k) {
            sum -= total[left];
            left += 1;
        }
        if (left >= N - k && left <= N) {
            max = Math.max(max, sum);
        }
    }
    
    return max;
};