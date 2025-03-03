/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const N = A.length;
    
    const setA = Array(N).fill(null).map((_) => new Set());
    const setB = Array(N).fill(null).map((_) => new Set());
    const res = Array(N).fill(0);
    
    for (let i = 0; i < N; i += 1) {
        for (let j = 0; j <= i; j += 1) {
            setA[i].add(A[j]);
            setB[i].add(B[j]);
        }
    }
    
    for (let i = 0; i < N; i += 1) {
        let count = 0;
        for (let j = 1; j <= N; j += 1) {
            if (setA[i].has(j) && setB[i].has(j)) count += 1;
        }
        res[i] = count;
    }
    
    return res;
};