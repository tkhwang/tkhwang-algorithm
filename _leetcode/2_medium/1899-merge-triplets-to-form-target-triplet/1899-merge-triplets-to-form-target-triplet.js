/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
    const [ tx, ty, tz ] = target;
    
    const merged = [ -Infinity, -Infinity, -Infinity ];
    
    for (let i = 0; i < triplets.length; i += 1) {
        console.log(merged);
        
        let [ mx, my, mz ] = merged;
        const [ cx, cy, cz ] = triplets[i];
        
        if (cx > tx || cy > ty || cz > tz) continue;
        
        merged[0] = Math.max(mx, cx);
        merged[1] = Math.max(my, cy);
        merged[2] = Math.max(mz, cz);        
        
        if (mx === tx && my === ty && mz === tz) return true;
    }    
    if (merged[0] === tx && merged[1] === ty && merged[2] === tz) return true;
    return false;
};