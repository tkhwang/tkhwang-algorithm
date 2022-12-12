/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) return null;

  let current = head.next;
  let previous = head;

  while (current) {
    if (current.val === val) {
      current = current.next;
      previous.next = current;
    } else {
      previous = current;
      current = current.next;
    }
  }

  if (head.val === val) return head.next;
  return head;
};
