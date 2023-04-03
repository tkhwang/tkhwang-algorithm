/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
/*
         1      2      3     4
         =2*3*4 =1*3*4
prefixR 2*3*4  3*4     4
prefixL        1      1*2    1*2*3
 */
    
    const N = nums.length;
    
    const prefixR = Array(N).fill(1);
    const prefixL = Array(N).fill(1);
    
    let product = 1;
    for (const [ i, num ] of nums.entries()) {
        prefixL[i] = product;
        product *= num;
    }
    
    product = 1;
    for (let i = N- 1; i >= 0; i -= 1) {
        prefixR[i] = product;
        product *= nums[i];
    }
    
    const res = [];
    for (let i = 0; i < N; i += 1) {
        res.push(prefixL[i] * prefixR[i]);
    }
    return res;
};