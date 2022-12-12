/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 * [Add Two Numbers - LeetCode](https://leetcode.com/problems/add-two-numbers/)
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const list = new ListNode();
  let current = list;
  let sum = 0;
  let carry = 0;

  while (l1 || l2 || sum) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      sum = sum - 10;
      carry = 1;
    }

    // Move to next.
    current.next = new ListNode(sum);
    current = current.next;

    sum = carry;
    carry = 0;
  }
  return list.next;
};
