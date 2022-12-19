/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(_accounts) {
    const accounts = _accounts.map((v,i) => v.reduce((a,b) => a + b, 0));
    
    accounts.sort((a,b) => b - a);
    
    return accounts[0];
};