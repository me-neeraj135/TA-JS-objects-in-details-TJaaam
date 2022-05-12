// ## Stack and Queue

// 1. Create a class name `Stack` with the following data and methods. Also implement a `length` getter method.

// Data:

// - `stack`

// Methods:

// - `push`: will accept a value and add to the stack. Stack adds data at the end
// - `pop`: will delete the last element (max index) of the stack
// - `peek`: can accept and optional parameter. Will display the element at the given index(passed as argument). If nothing is passed display the last element (last index)
// - `reverse`: will reverse all the elements of the stack and return the reversed stack
// - `isEmpty`: returns `true` if the stack is empty and `false` if the stack has any data.
// - `displayStack`: returns all the data in stack in string format

// Getter

// - `length`: returns the current length of the stack.

class Stack {
  constructor(data) {
    this.stack = data;
  }
  push(value) {
    this.stack
    return stack;
  }
  pop() {
    this.stack.pop();
    return this.stack;
  }
  peek(para) {
    if (para === 0) {
      return this.stack[this.stack.length - 1];
    }
    return this.stack[para];
  }
  reversed() {
    return this.stack.reverse();
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  displayStack() {
    return this.stack.toString();
  }
  get len() {
    return this.stack.length;
  }
}

let myStack = new Stack();
myStack.push("One");
myStack.push("Two");
