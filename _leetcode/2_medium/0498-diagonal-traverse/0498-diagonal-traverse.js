/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    if (!mat || !mat[0]) return [];
    
    const [ ROWS, COLS ] = [ mat.length, mat[0].length ];
    
    const res = [];
    
    for (let i = 0; i < ROWS + COLS - 1; i += 1) {
        const local = [];
        let r = i < COLS ? 0 : i - COLS + 1;
        let c = i < COLS ? i : COLS - 1;
        
        while (r < ROWS && c > -1) {
            local.push(mat[r][c]);
            r += 1;
            c -= 1;
        }
        
        if (i % 2 === 0) res.push(...local.reverse());
        else res.push(...local);
    }
    
    return res;
};