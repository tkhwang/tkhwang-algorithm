/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function(picture) {
    const [ ROWS, COLS ] = [ picture.length, picture[0].length ];

    const rowCount = Array(ROWS).fill(0);
    const colCount = Array(COLS).fill(0);
    
    for (let r = 0; r < ROWS; r += 1) {
        let count = 0;
        for (let c = 0; c < COLS; c += 1) {
            if (picture[r][c] === "B") count += 1;
        }
        rowCount[r] = count;
    }
    
    for (let c = 0; c < COLS; c += 1) {
        let count = 0;
        for (let r = 0; r < ROWS; r += 1) {
            if (picture[r][c] === "B") count += 1;
        }
        colCount[c] = count;
    }

    let result = 0;
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (picture[r][c] === "B" && rowCount[r] === 1 && colCount[c] === 1) result += 1;
        }
    }
    
    return result;
};