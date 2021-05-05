import { LinkedList } from "./linkedList.js";
class QueueLinkedList {
  constructor() {
    this.items = new LinkedList();
  }

  enqueue(value) {
    this.items.append(value);
  }

  dequeue() {
    return this.items.deleteHead();
  }

  isEmpty() {
    return !this.items.head;
  }

  toArray() {
    return this.items.toArray();
  }
}

const queue = new QueueLinkedList();

queue.enqueue("Get a remote dev job!");
queue.enqueue("Execute your plan");
queue.enqueue("Have a plan");

console.log(queue.toArray());
console.log(queue.dequeue());
console.log(queue.toArray());
console.log(queue.dequeue());
console.log(queue.toArray());
console.log(queue.dequeue());
console.log(queue.toArray());
