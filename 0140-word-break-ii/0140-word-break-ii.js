/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const wordObj = {};
    for (const word of wordDict) {
        wordObj[word] = word;
    }

    console.log(wordObj);

    const res = [];

    const dfs = (remain, path) => {
        if (!remain) {
            res.push(path.join(" "));
            return;
        }

        for (const word of Object.keys(wordObj)) {
            if (remain.startsWith(word)) {
                path.push(word);
                const length = word.length;
                dfs(remain.slice(length), path);

                path.pop();
            }
        }
    }

    dfs(s, []);

    return res;
};