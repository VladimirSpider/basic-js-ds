const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
  head = null;
  previousNode = null
  
  getUnderlyingList() {
    // return this.head;
    throw new NotImplementedError('Not implemented');
  }

  enqueue(value) {
    let list = new ListNode(value);
    if (!this.head) {
      this.head = list;
    } else {
      list.next = this.head;
      this.head = list;
    }
  }

  dequeue() {
    let l = this.head;
    let el;
    while (l.value) {
      console.log(l.value);
      if (l.next === null) {
        this.previousNode.next = null;
        el = l.value;
        break;
      }
      this.previousNode = l;
      l = l.next;
    }
    return el;
  }
}

module.exports = {
  Queue
};
