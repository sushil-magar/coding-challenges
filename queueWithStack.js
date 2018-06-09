/*
Implement a queue ↴ with 2 stacks. ↴ Your queue should have an enqueue and a dequeue method and it should be "first in first out" (FIFO).
Optimize for the time cost of mm calls on your queue. These can be any mix of enqueue and dequeue calls.
Assume you already have a stack implementation and it gives O(1)O(1) time push and pop.
*/

class Queue {s
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(item) {
    this.stack1.push(item);
  }

  dequeue() {
    if (!this.stack1) {
      return `Cannot remove from empty.`;
    }
  }

  print() {
    while(this.stack1.length) {
      this.stack2.push(this.stack1.pop());    
    }

    while(this.stack2.length) {
      console.log(this.stack2.pop());
    }
  }
}

const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);

// console.log(queue.print());

console.log(queue.dequeue());


