/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) {
    const [ ROWS, COLS ] = [ mat.length, mat[0].length ];
    
    const bisect = (array, target) => {
        let left = 0;
        let right = array.length - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (array[mid] === target) return mid;
            else if (array[mid] < target) {
                left = mid + 1;
            } else if (array[mid] > target) {
                right = mid - 1;
            }
        }
        return -1;
    }
    
    for (const num of mat[0]) {
        let isMatched = true;
        for (const array of mat.slice(1)) {
            const index = bisect(array, num);
            if (index === -1) {
                isMatched = false;
                break;
            }
        }
        if (isMatched) return num;
    }
    return -1;
};