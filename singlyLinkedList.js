class Node {
  constructor(value) {
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

  append(nodeToAdd) {
    const node = new Node(nodeToAdd);

    if (!this.size) {
      this.head = node;
      this.tail = node;
      this.head.next = this.tail;
    } else if (this.size === 1) {
      this.tail = node;
    } else if (this.size > 1) {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }  
}

function createAndAddNodes(nodes) {
  const linkedList = new LinkedList();

  for(let i = 1; i <= nodes; i++) {
    linkedList.append(i);
  }

  return linkedList;
}

const numberOfNodes = 5;
console.log(createAndAddNodes(numberOfNodes));
