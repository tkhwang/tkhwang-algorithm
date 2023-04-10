/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    const NN = name.length;
    const NT = typed.length;
    
    let i = 0;
    for (let j = 0; j < NT; j += 1) {
        if (i < NN && name[i] === typed[j]) {
            i += 1;
        } else if (j === 0 || typed[j] !== typed[j - 1]) return false;
    }
    return i === NN;
};