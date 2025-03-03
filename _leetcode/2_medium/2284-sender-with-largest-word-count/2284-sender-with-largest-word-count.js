/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
    const N = messages.length;
    const obj = {};

    let max = -Infinity;
    let maxValue = "";
    
    for (let i = 0; i < N; i += 1) {
        const sender = senders[i];
        if (obj[sender] === undefined) obj[sender] = 0;
        const count = messages[i].split(" ").length;
        obj[sender] += count;
        if (max < obj[sender] || (max === obj[sender] && sender > maxValue)) {
            max = obj[sender];
            maxValue = sender;
        }
    }
            
    return maxValue;
};