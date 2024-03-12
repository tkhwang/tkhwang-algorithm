/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(_order, _s) {
    const order = _order.split("");
    const s = _s.split("");
    
    const seq = {};
    for (const [ index, ch ] of order.entries()) {
        seq[ch] = index;
    }
    
    const included = s.filter((ch) => order.includes(ch));
    const notincluded = s.filter((ch) => !order.includes(ch));
    
    included.sort((a,b) => seq[a] - seq[b]);
    
    return [...included, ...notincluded].join("");
    
};