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
    
    let left = 1;
    let right = position.at(-1) - position.at(0);
        
    const check = (distance) => {
        let prv = position[0];
        let count = 1;
        for (let i = 1; i < N; i += 1) {
            if (prv + distance <= position[i]) {
                count += 1;                
                if (count >= m) return true;
                prv = position[i];
            }
        }
        return false;
    }
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (check(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return right;
};