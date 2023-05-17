/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
    const evaluteNext = async () => {
        if (functions.length === 0) return;
        const fn = functions.shift();
        await fn();
        await evaluteNext();
    }
    
    await Promise.all(Array(n).fill(null).map(evaluteNext))
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */