/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0;
    
    for (const detail of details) {
        const phone = detail.slice(0, 10);
        const gender = detail.slice(10, 11);
        const age = detail.slice(11, 13);
        const seat = detail.slice(13);
        
        if (age > 60) count += 1;
    }
    
    return count;
};