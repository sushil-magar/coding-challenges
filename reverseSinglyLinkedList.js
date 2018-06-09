class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addNode(nodeValue) {
    const node = new Node(nodeValue);

    if(!this.size) {
      this.head = node;
      this.tail = node;
    } else if (this.size === 1) {
      this.head.next = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  reverseList() {
    if (!this.size || this.size === 1) {
      return 'Nothing to reverse.';
    }

    let current = this.head;
    const nodeArr = [];

    while(current) {
      nodeArr.push(current.value);
      current = current.next;
    }

    const reverseArr = nodeArr.reverse();

    const reversedLinkedList = new LinkedList();

    for(let i = 0; i < reverseArr.length; i++) {
      reversedLinkedList.addNode(reverseArr[i]);
    }

    return reversedLinkedList;
  }
}

function addAndReverse(numberOfNodes) {
  if (!numberOfNodes) {
    return `No nodes to add.`;
  }

  const linkedList = new LinkedList();

  for(let i = 1; i <= numberOfNodes; i++) {
    linkedList.addNode(i);
  }

  const reversedLinkedList = linkedList.reverseList();

  return reversedLinkedList;
}

console.log(addAndReverse(5));