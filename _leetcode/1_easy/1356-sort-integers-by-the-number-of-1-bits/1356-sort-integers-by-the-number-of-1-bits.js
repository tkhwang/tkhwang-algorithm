/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const calc = (num) => num.toString(2).split("").filter((v) => v === "1").length

    arr.sort((a,b) => calc(a) - calc(b) || a - b );
    
    return arr;
};