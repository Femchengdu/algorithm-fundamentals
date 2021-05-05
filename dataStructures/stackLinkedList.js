import { LinkedList } from "./linkedList.js";
class StackLinkedList {
  constructor() {
    this.items = new LinkedList();
  }

  push(value) {
    this.items.prepend(value);
  }

  pop() {
    return this.items.deleteHead();
  }

  isEmpty() {
    return !this.items.head;
  }

  toArray() {
    return this.items.toArray();
  }
}

const stack = new StackLinkedList();

stack.push("Get a remote dev job!");
stack.push("Execute your plan");
stack.push("Have a plan");

console.log(stack.toArray());
console.log(stack.pop());
console.log(stack.toArray());
console.log(stack.pop());
console.log(stack.toArray());
console.log(stack.pop());
console.log(stack.toArray());
