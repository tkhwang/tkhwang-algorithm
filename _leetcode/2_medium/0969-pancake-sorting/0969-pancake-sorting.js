/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
    const N = arr.length;
    const res = [];
    
    const revert = (array, i, j) => {
        while (i < j) {
            ([ array[i], array[j] ] = [ array[j], array[i] ]);
            i += 1;
            j -= 1;
        }
    }
    
    const sort = (array, n) => {
        if (n === 1) {
            return;    
        }
        
        // find max i
        let max = -Infinity;
        let maxIndex;
        for (let i = 0; i < n; i += 1) {
            if (max < array[i]) {
                max = array[i];
                maxIndex = i;
            }
        }
        
        
        
        // revert [0...i]
        revert(array, 0, maxIndex);
        res.push(maxIndex + 1);
        
        // revert [0...N-1]
        revert(array, 0, n-1)
        res.push(n)
        
        sort(array, n-1);
    }
    
    sort(arr, N);
    
    return res;
};