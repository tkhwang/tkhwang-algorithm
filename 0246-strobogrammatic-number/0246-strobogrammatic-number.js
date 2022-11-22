/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    const N = num.length;
    
    const goods = [ '0', '1', '8' ];
    const checks = [ '6', '9' ];
    
    if (N === 1) return goods.includes(num[0]);
    
    let left = 0;
    let right = N - 1;
    
    while (left <= right) {
        console.log(num[left], num[right], left, right);
        
        if (left === right) {
            if (!(goods.includes(num[left])))return false;
        } else {
            if (!(
                goods.includes(num[left]) && num[left] === num[right] ||
                num[left] === "6" && num[right] === "9" ||
                num[left] === "9" && num[right] === "6"
            )) {
                return false;
            }  
        }
        left += 1;
        right -= 1;
    }
    return true;
};