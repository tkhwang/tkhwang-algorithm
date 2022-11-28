/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const athletes = {};
    
    for (const [ winner, loser ] of matches) {
        if (athletes[winner] === undefined) athletes[winner] = { "win" : 0, "lose": 0 };
        athletes[winner]["win"] += 1;
        if (athletes[loser] === undefined) athletes[loser] = { "win" : 0, "lose": 0 };
        athletes[loser]["lose"] += 1;
    }

    const keys = Object.keys(athletes);
    
    return [
        keys.filter((key) => athletes[key]["lose"] === 0),
        keys.filter((key) => athletes[key]["lose"] === 1)
    ]
};