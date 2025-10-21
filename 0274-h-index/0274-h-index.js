/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const N = citations.length;
    citations.sort((a,b) => a - b);

    let left = 0;
    let right = Math.max(...citations);

    const isOK = (index) => {
        let count = 0;
        for (let i = 0; i < N; i += 1) {
            if (index <= citations[i]) count += 1;
        }
        return index <= count;
    }

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (isOK(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};