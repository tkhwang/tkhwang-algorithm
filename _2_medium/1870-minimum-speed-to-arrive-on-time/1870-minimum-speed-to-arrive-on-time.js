/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dists, hour) {
    /*
    
    speed = distance / time
    
    time = distance / speed

     */
    
    let left = 1;
    let right = 10 ** 7;
    const N = dists.length;
    
    const lastTime = hour - (dists.length - 1);
    if (lastTime <= 0) return -1;
    
    const check = (speed) => {
        let time = 0;
        for (let i = 0; i < N - 1; i += 1) {
            time += Math.ceil(dists[i] / speed);
        }
        time += dists[N-1] / speed;
        return time <= hour;
    }
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (check(mid)) {
            right = mid;
        } else {
            left = mid +1;
        }
    }
    
    return left;
};