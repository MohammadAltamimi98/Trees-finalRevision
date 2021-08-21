class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }
}


module.exports = { Node, BinaryTree }