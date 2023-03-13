/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.array = [];
    let node = head;
    while (node) {
        this.array.push(node.val);
        node = node.next;
    }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.array.length);
    return this.array[randomIndex];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */