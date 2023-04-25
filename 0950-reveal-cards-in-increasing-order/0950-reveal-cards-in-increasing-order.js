/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    const N = deck.length;

    deck.sort((a, b) => a - b);
    const ans = [];
    
    while (deck.length) {
        ans.unshift(deck.pop());
        ans.unshift(ans.pop());
    }
    ans.push(ans.shift());
    return ans;
    
};