/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    this.str = strs.join("\n");
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    return this.str.split("\n");
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */