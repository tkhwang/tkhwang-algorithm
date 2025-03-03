/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    var parentCount = new Array(n).fill(0);
    var root = -1;

    for (var i = 0; i < leftChild.length; i++) {
        if (leftChild[i] !== -1) {
            if (parentCount[leftChild[i]] === 1) {
                return false;
            }
            parentCount[leftChild[i]]++;

        }

        if (rightChild[i] !== -1) {
            if (parentCount[rightChild[i]] === 1) {
                return false;
            }
            parentCount[rightChild[i]]++;
        }
    }

    for (var i = 0; i < leftChild.length; i++) {
        if (parentCount[i] === 0) {
            if (root === -1) {
                root = i;
            } else {
                return false;
            }
        }
    }

    if (root === -1) {
        return false;
    }

    return dfs(leftChild, rightChild, root) === n;
};

function dfs(left, right, root) {
    if (root === -1) {
        return 0;
    }
    return 1 + dfs(left, right, left[root]) + dfs(left, right, right[root]);    
};