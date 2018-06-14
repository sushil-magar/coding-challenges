class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(nodeVal) {
    const node = new Node(nodeVal);

    if (!this.size) {
      this.head = node;
      this.tail = node;
      this.head.next = this.tail;
    } else if (this.size === 1) {
      this.tail = node;
      this.head.next = this.tail;
    } else {
      this.tail = node;
    }

    this.size++;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function createList(nodes) {
  const linkedList1 = new LinkedList();

  for (let i = 1; i <= nodes; i++) {
    linkedList1.append(i);
  }

  const linkedList2 = new LinkedList();

  for (let i = 1; i <= nodes; i++) {
    linkedList2.append(i);
  }

  console.log(linkedList1);
  console.log(linkedList2);

  const firstArr = [];

  while (linkedList1.size) {
    
  }
}

const numberOfNodes = 3;
console.log(createList(numberOfNodes));








/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {
  const l1Size = 0;
  const start = l1;
  
  while (l1.next !== null) {
      
  }
};