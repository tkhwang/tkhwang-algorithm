/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const board = Array(n).fill(null).map((_) => Array(n).fill("."));
    const res = [];
    
    const backtrack = (paths, row, cols, posDiags, negDiags) => {
        if (row >= n) {
            res.push([...paths.map((path) => path.join(""))]);
            return;
        }
        
        for (let c = 0; c < n; c += 1) {
            const posDiag = row + c;
            const negDiag = row - c;
            
            if (cols.has(c) ||
                posDiags.has(posDiag) ||
                negDiags.has(negDiag)) continue;
            
            paths[row][c] = "Q";
            cols.add(c);
            posDiags.add(posDiag);
            negDiags.add(negDiag);
            
            backtrack(paths, row + 1, cols, posDiags, negDiags);
            
            paths[row][c] = ".";
            cols.delete(c);
            posDiags.delete(posDiag);
            negDiags.delete(negDiag);
        }
    }
    
    backtrack(board, 0, new Set(), new Set(), new Set())
    
    return res;
};