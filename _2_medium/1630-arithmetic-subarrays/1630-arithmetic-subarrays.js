/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    const N = nums.length;
    const res = [];
    
    for (let i = 0; i < l.length; i += 1) {
        const left = l[i];
        const right = r[i];
        
        const sub = nums.slice(left, right + 1);
        sub.sort((a,b) => a - b);
        
        const delta = sub[1] - sub[0];
        let local = true;
        for (let i = 2; i < sub.length; i += 1) {
            if (sub[i] - sub[i-1] !== delta) {
                local = false;
                break;
            }
        }
        
        res.push(local)
    }
    
    return res;
};