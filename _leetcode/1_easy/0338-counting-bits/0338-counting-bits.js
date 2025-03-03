/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(N) {
    const array = Array(N + 1).fill(0);
    
    const popCount = (x) => {
        let count = 0;

        while (x) {
            count += 1;
            x = x & (x - 1);
        }

        return count;
    }
    
    for (let i = 1; i < N + 1; i += 1) {
        array[i] = popCount(i);
    }
    
    return array;
};