class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = { value, next: null };
    // Assign the the next value of the tail to the new node
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  toArray() {
    const elements = [];
    let currentNode = this.head;

    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }
    return elements;
  }

  prepend(value) {
    const newNode = { value, next: this.head };
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  insertAfter(value, afterValue) {
    const foundNode = this.find(afterValue);

    if (foundNode) {
      const newNode = { value, next: foundNode.next };
      foundNode.next = newNode;
    }
  }

  find(value) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  delete(value) {
    if (!this.head) {
      return;
    }
    // Special case for head
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    // Special case for the tail
    if (this.tail.value === value) {
      this.tail = currentNode;
    }
  }
}

const myStory = new LinkedList();
myStory.append("My name is Sam =>");
myStory.append("I am improving my skills =>");
myStory.append("So I can get a job as a software developer =>");
myStory.append("Good, better, best =>");

myStory.prepend("Ledger Interview, Can you introduce yourself? =>");

myStory.delete("Good, better, best =>");
myStory.delete("So I can get a job as a software developer =>");

myStory.insertAfter("I live in Chengdu, China =>", "My name is Sam =>");
myStory.insertAfter(
  "...because I want to emigrate to France =>",
  "I am improving my skills =>"
);

console.log("Viewing the linked list :", myStory.toArray());
