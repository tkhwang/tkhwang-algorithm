/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    flowerbed.unshift(0);
    flowerbed.push(0);
    
    const N = flowerbed.length;
    
    for (let i = 1; i < N; i += 1) {
        const prv = flowerbed[i-1];
        const cur = flowerbed[i];
        const next = i > N ? 0: flowerbed[i+1];
        
        if (prv === 0 && cur === 0 && next === 0) {
            
            n -= 1;
            flowerbed[i] = 1;
        }
        
        if (n <= 0) return true;
    }
    return false;
};