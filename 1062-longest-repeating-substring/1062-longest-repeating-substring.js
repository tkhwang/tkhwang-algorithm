/**
 * @param {string} s
 * @return {number}
 */
var longestRepeatingSubstring = function(s) {
    const N = s.length;

    const ch2index = (ch, base = 'a') => ch.charCodeAt(0) - base.charCodeAt(0);
    const index2ch = (index, base = 'a') => String.fromCharCode(index + base.charCodeAt(0));
    
    let left = 0;
    let right =  N - 1;
    
    const isOK = (size) => {
        const set = new Set();
        for (let i = 0; i <= N - size; i += 1) {
            const sub = s.slice(i, i + size)
            console.log(size, sub)
            if (set.has(sub)) return true;
            set.add(sub);
        }
        return false;
    }

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (isOK(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};

//     const isOK = (size) => {
//         let hash = 0;
//         const set = new Set();
//         const queue = new Queue();
        
//         for (let i = N - 1; i >= 0; i -= 1) {
//             const cur = s[i];
            
//             hash *= 10;
//             hash += ch2index(cur);
//             queue.enqueue(ch2index(cur));
            
//             if (queue.size() < size) continue;
            
//             if (queue.size() > size) {
//                 const oldest = queue.dequeue();
//                 hash -= oldest * 10 ** queue.size();
//             }
            
//             if (set.has(hash)) return true;
//             set.add(hash);
//         }
//         return false;
//     }
    