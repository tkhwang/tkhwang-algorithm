/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];
  for (const value of tokens) {
    if (value === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (value === "-") {
      stack.push(stack.pop() * -1 + stack.pop());
    } else if (value === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (value === "/") {
      stack.push(Math.trunc((1 / stack.pop()) * stack.pop()));
    } else {
      // not operator
      stack.push(parseInt(value));
    }
  }
  return stack[0];
};
