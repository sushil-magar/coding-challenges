class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(node) {
    if (!node) {
      return `Nothing to add!`;
    }

    const newNode = new Node(node);

    if (this.root === null) {
      this.root = newNode;
    } else {
      const curr = this.root;
      
      const searchTree =  function(currentNode) {
        if (newNode.data < currentNode.data) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
          } else {
            return searchTree(currentNode.left);
          }
        } else if (newNode.data > currentNode.data) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
          } else {
            return searchTree(currentNode.right);
          }
        } else {
          return null;
        }
      }

      return searchTree(curr);
    }
  }
}

function createBst(nodesToAdd) {
  const tree = new Tree();

  for (let i = 0; i < nodesToAdd.length; i++) {
    tree.add(nodesToAdd[i]);
  }

  console.log(tree.root);
}

const nodesToAdd = [5,3,12,8,22,66,19];

console.log(createBst(nodesToAdd));
