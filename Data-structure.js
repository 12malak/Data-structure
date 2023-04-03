class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  let queue1 = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  
  
  
  function reverseFirstK(queue, K) {
    if (K <= 0 || K > queue.size()) {
      throw new Error("Invalid value of K");
    }
  
    // Reverse the first K elements using a queue
    const reversedQueue = new Queue();
    const arr = [];
    for (let i = 0; i < K; i++) {
      arr.push(queue.dequeue());
    }
    while (arr.length > 0) {
      reversedQueue.enqueue(arr.pop());
    }
    while (!queue.isEmpty()) {
      reversedQueue.enqueue(queue.dequeue());
    }
    while (!reversedQueue.isEmpty()) {
      queue.enqueue(reversedQueue.dequeue());
    }
    console.log(queue);
  }
  
  reverseFirstK(queue, 5);
  class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  let queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  console.log(queue);
  
  
  function reverseFirstK(queue, K) {
    if (K <= 0 || K > queue.size()) {
      console.log("Queue size error");
    }
  
    // Reverse the first K elements using a queue
    const reversedQueue = new Queue();
    const arr = [];
    for (let i = 0; i < K; i++) {
      arr.push(queue.dequeue());
    }
    while (arr.length > 0) {
      reversedQueue.enqueue(arr.pop());
    }
    while (!queue.isEmpty()) {
      reversedQueue.enqueue(queue.dequeue());
    }
    while (!reversedQueue.isEmpty()) {
      queue.enqueue(reversedQueue.dequeue());
    }
    console.log(queue);
  }
  
  reverseFirstK(queue, 3);