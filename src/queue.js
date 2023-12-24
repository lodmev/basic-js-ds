const {NotImplementedError} = require('../extensions/index.js');

const {ListNode} = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.tail = null;
    this.head = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (!this.head) {
      this.head = new ListNode(value);
    } else {
      const newNode = new ListNode(value);
      if (!this.tail) {
        this.tail = newNode;
        this.head.next = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = this.tail.next;
      }
      /*
    let curr = this.head;
    let next = curr.next;
    while (next) {
      curr = next;
      next = curr.next;
    }
    curr.next = new ListNode(value)
   */
   }
  }

  dequeue() {
    const val = this.head.value;
    this.head = this.head.next
    return val;
  }
}

module.exports = {
  Queue
};
