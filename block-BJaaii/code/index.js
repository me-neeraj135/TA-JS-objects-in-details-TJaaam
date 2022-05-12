// ## Stack

class Stack {
  constructor(data) {
    this.stack = [];
  }
  push(value) {
    this.stack.push(value);
    return this.stack;
  }
  pop() {
    this.stack.pop();
    return this.stack;
  }
  peek(para = this.stack.length - 1) {
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
  get length() {
    return this.stack.length;
  }
}

// let myStack = new Stack();
// myStack.push("One");
// myStack.push("Two");
// console.log(myStack.length); // 2
// console.log(myStack.peek()); // "Two"
// console.log(myStack.peek(0)); // "One"
// console.log(myStack.reversed()); // ['Two', 'One']
// console.log(myStack.displayStack()); // 'Two One'
// myStack.pop();
// console.log(myStack.length); // 1
// console.log(myStack.peek()); // 'Two'
// console.log(myStack.isEmpty()); // false
// myStack.pop();
// console.log(myStack.isEmpty()); // true

//queue

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(value) {
    this.queue.push(value);
    return this.queue;
  }
  dequeue() {
    return this.queue.shift();
  }
  peek(para = 0) {
    return this.queue[para];
  }
  isEmpty() {
    return !this.queue.length > 0;
  }
  displayQueue() {
    return this.queue;
  }

  get length() {
    return this.queue.length;
  }
}

let atmQueue = new Queue();
atmQueue.enqueue("Aman");
atmQueue.enqueue("John");
atmQueue.enqueue("Rohan");
console.log(atmQueue.displayQueue()); // "Aman John Rohan"
console.log(atmQueue.length); // 3
console.log(atmQueue.peek()); // "Aman"
console.log(atmQueue.peek(1)); // "John"
atmQueue.dequeue();
console.log(atmQueue.length); // 2
console.log(atmQueue.peek()); // 'John'
console.log(atmQueue.isEmpty()); // false
atmQueue.dequeue();
atmQueue.dequeue();
console.log(atmQueue.isEmpty()); // true
