/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(_s) {
    const s = _s.split("");

    function divideByTwo(s) {
        return s.pop();
    }

    function addOne(s) {
        let i = s.length - 1;

        while (i >= 0 && s[i] === "1") {
            s[i] = "0";
            i -= 1;
        }

        if (i < 0) s.unshift("1");
        else s[i] = "1";
    }

    let count = 0;

    while (s.length > 1) {
        if (s.at(-1) === '0') {
            divideByTwo(s);
        } else {
            addOne(s);
        }
        count += 1;
    }

    return count;
};