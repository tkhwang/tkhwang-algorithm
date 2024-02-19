/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const pos = [];
    const nes = [];
    
    for (const [ i, num ]  of nums.entries()) {
        if (num > 0) {
            pos.push(num);
        } else {
            nes.push(num);
        }
    }
    
    const res = [];

    const NP = pos.length;
    const NN = nes.length;
    
    let iPos = 0;
    let iNeg = 0;
    
    while (iPos < NP && iNeg < NN) {
        res.push(pos[iPos]);
        res.push(nes[iNeg]);
        iPos += 1;
        iNeg += 1;
    }
    
    return res;
};