class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.next = null;
    this.size = 0;
  }

  append(nodeToAdd) {
    const node = new Node(nodeToAdd);

    if (!this.size) {
      this.head = node;
      this.tail = node;
    } else if (this.size === 1) {
      this.tail = node;
      this.tail.prev = this.head;
      this.head.next = this.tail;
    } else if (this.size > 1) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.size++;
  }

  addAtStart(nodeToAdd) {
    const node = new Node(nodeToAdd);
    
    if (!this.size) {
      this.head = node;
      this.tail = node;
    } else if (this.size >= 1) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  addAtPosition(position) {

  }
}

function createAndAddNodes(nodes) {
  if (!nodes) {
    return 'No nodes to add.'
  }

  const linkedList = new LinkedList();

  for(let i = 1; i <= nodes; i++) {
    console.log(`Appending node: ${i}`);
    linkedList.append(i);
  }

  const valueOfNode = 100;
  console.log(`Adding a node at start: ${valueOfNode}`);
  linkedList.addAtStart(valueOfNode);  

  return linkedList;
}

console.log(createAndAddNodes(10));


