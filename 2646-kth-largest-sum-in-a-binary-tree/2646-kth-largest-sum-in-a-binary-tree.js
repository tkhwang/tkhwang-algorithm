/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    const sums = [];

    const levels = [];
    const queue = [ root ];

    while (queue.length) {
        const length = queue.length;
        let sum = 0;

        for (let i = 0; i < length; i += 1) {
            const node = queue.shift();
            sum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        sums.push(sum);
    }

    if (k > sums.length) return -1;

    sums.sort((a,b) => b - a);

    return sums[k-1];
};