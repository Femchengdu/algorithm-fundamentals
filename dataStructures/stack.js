class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toArray() {
    return this.items.slice();
  }
}

const stack = new Stack();

stack.push("Learn Js DS");
stack.push("Execute your plan");
stack.push("Have a plan");

console.log(stack.toArray());
console.log(stack.pop());
console.log(stack.toArray());
console.log(stack.pop());
console.log(stack.toArray());
console.log(stack.pop());
