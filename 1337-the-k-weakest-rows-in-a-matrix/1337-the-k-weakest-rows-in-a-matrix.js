/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const getSoldersNumbers = (row) => mat[row].filter((i) => i === 1).length;
    const comp = (r1, r2) => (getSoldersNumbers(r1) - getSoldersNumbers(r2)) || (r1 - r2)

    const mpq = new MinPriorityQueue({ compare: (a, b) => comp(a, b) });
    
    for (const row of Object.keys(mat)) {
        mpq.enqueue(row);
    }

    const result = [];
    while (result.length < k) {
        result.push(mpq.dequeue());
    }
    
    return result;
};