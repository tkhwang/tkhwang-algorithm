/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const M2Roman = [ "", "M", "MM", "MMM" ];
    const C2Roman = [ "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM" ];
    const X2Roman = [ "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC" ];
    const I2Roman = [ "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX" ];
    
    return M2Roman[Math.floor(num/1000)]
           + C2Roman[Math.floor((num%1000)/100)]
           + X2Roman[Math.floor((num%100)/10)]
           + I2Roman[num%10]
};