/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    /*
    Given: m 개의 볼 => 볼 사이 거리 minimum 이 maximum 이 되도록.
    
    공이 많아 질 수록 거리는 줄어든다. : monotonic 
     */
    
    const N = position.length;
    position.sort((a,b) => a - b);
    
    let left = 0;
    let right = position.at(-1) - position.at(0) + 1;
        
    const isFail = (distance) => {
        let prv = position[0];
        let count = 1;
        for (let i = 1; i < N; i += 1) {
            if (prv + distance <= position[i]) {
                count += 1;                
                if (count >= m) return false;
                prv = position[i];
            }
        }
        return count < m;
    }
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (isFail(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left - 1;
};