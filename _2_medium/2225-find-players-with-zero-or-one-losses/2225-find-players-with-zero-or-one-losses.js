/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const winners = {};
    const losers = {};
    
    for (const [ winner, loser ] of matches) {
        if (winners[winner] === undefined) winners[winner] = 0;
        if (losers[loser] === undefined) losers[loser] = 0;
        if (winners[loser] === undefined) winners[loser] = 0;
        if (losers[winner] === undefined) losers[winner] = 0;
        winners[winner] += 1;
        losers[loser] += 1;
    }

    const keys = Object.keys(losers);
    const zeroLoses = keys.filter((key) => losers[key] === 0)
    const oneLoses = keys.filter((key) => losers[key] === 1);
    
    return [
        zeroLoses,
        oneLoses
    ]
};