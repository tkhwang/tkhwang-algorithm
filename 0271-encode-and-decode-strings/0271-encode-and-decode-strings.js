/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */

const SEP = String.fromCharCode(0)

var encode = function(strs) {
    this.data = strs.join(SEP);
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    return this.data.split(SEP)
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */