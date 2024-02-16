/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const freqMap = new Map();
    arr.forEach(num => {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    });

    const sortedFreq = [...freqMap.entries()].sort((a, b) => a[1] - b[1]);

    let uniqueIntegers = sortedFreq.length;
    for (const [num, freq] of sortedFreq) {
        if (k >= freq) {
            k -= freq;
            uniqueIntegers--;
        } else {
            break;
        }
    }

    return uniqueIntegers;
};