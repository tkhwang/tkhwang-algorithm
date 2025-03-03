/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    const backtrack = (row, cols, posDiag, negDiag) => {
        if (row >= n) return 1;
        
        let solutions = 0;
        for (let col = 0; col < n; col += 1) {
            const posDiagCur = row + col;
            const negDiagCur = row - col;
            
            if (cols.has(col) ||
                posDiag.has(posDiagCur) ||
                negDiag.has(negDiagCur)) continue;
            
            cols.add(col);
            posDiag.add(posDiagCur);
            negDiag.add(negDiagCur);
        
            solutions += backtrack(row + 1, cols, posDiag, negDiag);
            
            cols.delete(col);
            posDiag.delete(posDiagCur);
            negDiag.delete(negDiagCur);
        }
        return solutions;
    }
    return backtrack(0, new Set(), new Set(), new Set());
};