/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbages, travel) {
    const n = garbages.length;
    const targets = [ "P", "G", "M" ];
    const founds = Array(3).fill(null).map((_) => Array(n).fill(-1));
    const maxs = Array(3).fill(-1);
    
    travel.unshift(0);
    const totalTravel = travel.reduce((a,b) => a + b, 0);
    
    let prefixSum = [];
    prefixSum.push(0);
    
    for (const [i, target] of targets.entries()) {
        let max = -1;
        for (const [j, garbage] of garbages.entries()) {
            const regExr = new RegExp(target, "g");
            const count = (garbage.match(regExr) ?? []).length;
            
            founds[i][j] = count;
            if (count) {
                if (max < j) max = j;
            }
            if (max !== -1) maxs[i] = max;
        }
    }
    
    let sum = 0;
    const [ ROWS, COLS ] = [ founds.length, founds[0].length ];
    for (let r = 0; r < ROWS; r += 1) {
        const rowSum = founds[r].reduce((a,b) => a + b, 0);
        if (rowSum === 0) continue;
        
        let i = 0;
        while (i <= maxs[r]) {
            sum += travel[i];
            sum += founds[r][i];
            i += 1;
        }
    }
    
    return sum;
};