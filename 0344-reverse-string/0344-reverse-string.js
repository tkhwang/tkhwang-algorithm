/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    const swap = (array, left, right) => {
        const temp = array[left];
        array[left] = array[right];
        array[right] = temp;
    }
    
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        swap(s, left, right);
        left += 1;
        right -= 1;
    }
};