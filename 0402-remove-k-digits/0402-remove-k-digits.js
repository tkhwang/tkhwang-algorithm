/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(nums, k) {
    /*
         1432219
     */
    
    const N = nums.length;
    const stack = [];
    
    for (const [ i, num ] of nums.split("").entries()) {
        while (k > 0 && stack.length && stack.at(-1) > num) {
            stack.pop();
            k -= 1;
        }
        stack.push(num)
    }
    
    while(stack.length && k>0){
        stack.pop()
        k -= 1;
    } 
    
    while (stack.length && stack.at(0) === "0") stack.shift();
    
    return stack.join("") || "0";
};