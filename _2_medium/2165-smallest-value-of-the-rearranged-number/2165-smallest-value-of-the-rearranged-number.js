/**
 * @param {number} num
 * @return {number}
 */
var smallestNumber = function(num) {
    const isNegative = num < 0;
    
    if (isNegative) num *= -1;
    
    let nums = String(num).split('');

    if (isNegative) {
        nums.sort((a,b) => b - a)
    } else {
        nums.sort((a,b) => a - b)
    }
    
    if (nums[0] === '0') {
        let i = 0;
        while (nums[i] === '0') i += 1;
        const backup = nums[i];
        nums[0] = backup;
        nums[i] = "0";
    }
    
    const strNums = nums.join("");
    return isNegative ? Number(-`${strNums}`) : Number(strNums);
};