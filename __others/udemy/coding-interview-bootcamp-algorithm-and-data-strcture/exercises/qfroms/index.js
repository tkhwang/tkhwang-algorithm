// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  add(item) {
    this.inStack.push(item);
  }

  remove() {
    while (this.inStack.peek()) {
      this.outStack.push(this.inStack.pop());
    }
    const result = this.outStack.pop();

    while (this.outStack.peek()) {
      this.inStack.push(this.outStack.pop());
    }

    return result;
  }

  peek() {
    while (this.inStack.peek()) {
      this.outStack.push(this.inStack.pop());
    }
    const result = this.outStack.peek();

    while (this.outStack.peek()) {
      this.inStack.push(this.outStack.pop());
    }

    return result;
  }
}

module.exports = Queue;
