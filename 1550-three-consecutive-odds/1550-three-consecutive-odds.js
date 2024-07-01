/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    const N = arr.length;

    const isOdd = (num) => num % 2 === 1;

    let consecutiveOdds = 0;

    for (let i = 0; i < N; i += 1) {
        const cur = arr[i];

        if (!isOdd(cur)) {
            consecutiveOdds = 0;
            continue;
        }

        consecutiveOdds += 1;

        if (consecutiveOdds === 3) return true;
    }

    return false;
};