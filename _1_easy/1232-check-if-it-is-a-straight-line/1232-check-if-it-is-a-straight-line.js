/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    const N = coordinates.length;
    
    if(N === 2) return true
    if(!coordinates || N === 0) return false;
       
    let p = coordinates[0];
    let q = coordinates[1];
    let curr
    
    for(let i = 2; i < N; i++) {
        curr = coordinates[i];
        if((curr[0] - p[0]) * (q[1] - p[1]) !== (curr[1] - p[1]) * (q[0] - p[0])) return false;
    }
    
    return true;    
};