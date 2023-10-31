/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    const N = pref.length;

    const num = [ pref[0] ];
    let sum = pref[0];
    
    for (let i = 1; i < N; i += 1) {
        num.push(sum ^ pref[i]);
        sum ^= num[num.length - 1];
    }
    return num;
};