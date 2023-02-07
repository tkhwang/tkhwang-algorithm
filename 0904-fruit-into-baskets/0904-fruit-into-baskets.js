/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    const N = fruits.length;
    
    let max = -Infinity;
    const basket = {};
    let left = 0;
    for (let right = 0; right < N; right += 1) {
        const cur = fruits[right];
        basket[cur] = (basket[cur] || 0) + 1;
        while (Object.keys(basket).length > 2) {
            const leftNum = fruits[left];
            basket[leftNum] -= 1;
            if (basket[leftNum] === 0) delete basket[leftNum];
            left += 1;
        }
        const local = right - left + 1;
        max = Math.max(max, local);
    }
    return max === -Infinity ? 1 : max;
};