/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function(n) {
    const convertMap = {
        "0": "0",
        "1": "1",
        "6": "9",
        "8": "8",
        "9": "6"
    }

    const invalids = [ '2', '3', '4', '5', '7' ];

    let converted = "";
    for (const ch of String(n).split("")) {
        if (invalids.includes(ch)) return false;
        converted += convertMap[ch];
    }

    console.log(n, converted)

    return n !== Number(converted.split("").reverse().join(""));
};