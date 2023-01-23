/**
 * @param {string} s
 * @param {string} target
 * @return {boolean}
 */
var makeStringsEqual = function(_s, _target) {
    const N = _s.length;
    
    const s = String(_s).split("");
    const target = String(_target).split("");
    
    return !(s.every((v) => v === "0") || target.every((v) => v === "0"))||
            (s.every((v) => v === "0") && target.every((v) => v === "0"));
};