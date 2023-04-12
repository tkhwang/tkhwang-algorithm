/**
 * @param {string[]} features
 * @param {string[]} responses
 * @return {string[]}
 */
var sortFeatures = function(features, responses) {
    const seq = {};
    for (const [ i, feature ] of features.entries()) {
        seq[feature] = +i;
    }
    
    const freq = {};
    for (const feature of features) {
        freq[feature] = 0;
    }
    
    for (const response of responses) {
        const matched = [];
        for (const word of response.split(" ")) {
            if (word in freq && !matched.includes(word)) {
                freq[word] += 1;
                matched.push(word);
            }
        }
    }
    
    const keys = Object.keys(freq);
    keys.sort((a,b) => freq[b] - freq[a] || seq[a] - seq[b]);
    
    return keys;
}