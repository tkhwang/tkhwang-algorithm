/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
var mergeTwoLists = function(l1, l2) {
  let head = new ListNode();
  let node = head;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      node.next = l2;
      l2 = l2.next;
    } else {
      node.next = l1;
      l1 = l1.next;
    }
    node = node.next;
  }
  node.next = l1 || l2;

  return head.next;
};
