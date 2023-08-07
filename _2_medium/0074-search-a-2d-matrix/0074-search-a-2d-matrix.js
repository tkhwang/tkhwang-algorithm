/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i += 1) {
        if (matrix[i][0] <= target && target <= matrix[i][matrix[0].length - 1]) {
            for (let j = 0; j < matrix[0].length; j += 1) {
                if (matrix[i][j] === target) return true;
                else if (matrix[i][j] > target) return false;
            }
        }
    }    
    return false;
};