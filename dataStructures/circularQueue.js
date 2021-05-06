class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
    let curItem = null;

    if (this.write <= this.max) {
      this.queue[this.write] = item;
      curItem = this.queue[this.write];
      this.write = this.write + 1;
    }
    return curItem;
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    if (this.read > this.max) {
      this.write = 0;
      this.read = 0;
    }
    let curItem = this.queue[this.read];
    if (curItem && this.read < this.write && this.read <= this.max) {
      this.queue[this.read] = null;
      this.read = this.read + 1;
    }
    return curItem;
    // Only change code above this line
  }
}
