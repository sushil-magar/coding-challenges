class Node {
  constructor(data) {
    this.parent = null;
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  addToTree(parent, child) {
    if(!parent && !child) {
      return `There is nothing to add!`;
    }

    // if parent or root already exists, do not re-add it.
    if (parent && !child && this.root) {
      return `Cannot re-add root.`
    }

    // if no child and no root, create root.
    if (!child && !this.root) {
      const node = new Node(parent);
      this.root = node;
      return this.root;
    }

    if (childExists(child)) {

    }

    // lets add the child to parent
    const node = new Node(child);
    node.parent = this.root;
    this.root.children.push(node);
  }

  /** 
   * return boolean - true if the child with same name already exists
  */
  childExists(childName) {
    
  }
}

const tree = new Tree();
console.log(tree.addToTree('CEO'));
console.log(tree.addToTree('CEO', 'CFO'));
console.log(tree.addToTree('CEO', 'CFO'));
console.log(tree.root);
