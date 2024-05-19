/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    const N = nums.length;
    
    if (N === 1) return true;
    
    let prvParity = checkParity(nums[0]);
    for (let i = 1; i < N; i += 1) {
        const cur = nums[i];
        const curParity = checkParity(cur);
        
        console.log(prvParity, curParity)
        
        if (prvParity * curParity > 0) return false;
        
        prvParity = curParity;
    }
    return true;
};
    
function checkParity(num) {
    return isEven(num) ? 1 : -1;
}

function isEven(num) {
    return num % 2 === 0;
}

function isOdd(num) {
    return num % 2 === 1;
}