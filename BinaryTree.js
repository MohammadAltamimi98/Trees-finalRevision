class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}


// input - nothing or root
// output array of node values;
class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    let node = this.root;
    if (!node) throw new Error('there is no root!');
    let queue = [];
    const _traverse = (node) => {
      queue.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    }
    _traverse(node);
    return queue;
  }

  inOrder() {
    let node = this.root;
    let queue = [];

    if (!node) throw new Error('there is no root');

    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      queue.push(node.value);
      if (node.right) _traverse(node.right);
    }
    _traverse(node);
    return queue;
  }

  postOrder() {
    let node = (this.root);
    let queue = [];
    if (!node) throw new Error('ther is no root');
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      queue.push(node.value);
    }
    _traverse(node);
    return queue;
  }


  getMax() {
    let max = this.root.value;
    const _traverse = (node) => {
      if (node.value > max) {
        max = node.value;
      }
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    }
    _traverse(this.root);
    return max;
  }

  getMin() {
    let min = this.root.value;
    const _traverse = (node) => {
      if (node.value < min) {
        min = node.value
      }
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    }
    _traverse(this.root);
    return min;
  }

  breadthFirst() {
    let results = [];
    let queue = [];
    queue.push(this.root);

    const _traverse = (node) => {
      while (queue.length > 0) {
        node = queue.shift();
        results.push(node.value);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    _traverse(this.root);
    return results;
  }

  fizzbuzzTree() {
    if (!this.root) throw new Error('there is no root!~');
    let results = [];
    const _traverse = (node) => {
      if (node.value % 15 === 0) {
        node.value = 'FizzBuzz';
        results.push(node.value);
      }
      else if (node.value % 5 === 0) {
        node.value = 'Fizz';
        results.push(node.value);
      }
      else if (node.value % 3 === 0) {
        node.value = 'Buzz';
        results.push(node.value);
      }
      else {
        node.value = `${node.value}`;
        results.push(node.value);
      }
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    }

    _traverse(this.root);
    return results;
  }
  sumOfOddNums() {
    let sum = 0;
    if (!this.root) throw new Error('there is no root');

    const _traverse = (node) => {
      if (node.value % 2 !== 0) {
        sum = sum + node.value;
      }
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    }
    _traverse(this.root);
    return sum;
  }

  sumOfEvenNums() {
    let sum = 0;
    const _traverse = (node) => {
      if (node.value % 2 === 0) {
        sum = sum + node.value;
      }
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    }
    _traverse(this.root);
    return sum;
  }

  lonelyNodes() {
    let array = [];

    if (!this.root) throw new Error('there is no root');
    const _traverse = (node) => {
      if (node.left) {
        if (!node.right) {
          array.push(node.left.value);
        }
        _traverse(node.left)
      };
      if (node.right) {
        if (!node.left) {
          array.push(node.right.value);
        }
        _traverse(node.right)
      }

    }
    _traverse(this.root);
    return array;
  }

  heightOfTree(node) {
    if (!node) return 0;
    else {
      let leftTraversal = this.heightOfTree(node.left);
      let rightTraversal = this.heightOfTree(node.right);
      if (leftTraversal > rightTraversal) {
        return leftTraversal + 1
      }
      else {
        return rightTraversal + 1
      };
    }
  }

  leavesNum() {
    if (!this.root) throw new Error('there is no root');
    let array = [];
    const _tarverse = (node) => {
      if (!node.left && !node.right) {
        console.log(node.value);
        array.push(node.value);
      }
      if (node.left) _tarverse(node.left);
      if (node.right) _tarverse(node.right);
    }
    _tarverse(this.root);
    return array;
  }

  invert() {
    if (!this.root) throw new Error('there is no root!~');
    const _traverse = (node) => {
      let temp = node.left;
      node.left = node.right;
      node.right = temp;
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    }
    _traverse(this.root);
  }

  merge(t1, t2) {
    console.log(t1, t2);
    if (!t1 && !t2) return null;
    let root = new Node((t1 ? t1.value : null) + (t2 ? t2.value : null));
    root.left = this.merge((t1 ? t1.left : null), (t2 ? t2.left : null));
    root.right = this.merge((t1 ? t1.right : null), (t2 ? t2.right : null));
    return root;
  }

  identical(p, q) {
    if (!p && !q) return true;

    if (!p && q || p && !q || p && q && p.value !== q.value) {
      console.log(p.value, q.value);
      return false;
    }
    if (p && q) {
      this.identical(p.left, q.left);
      this.identical(p.right, q.right);
      return true;
    }
    // return false;
  }

}




module.exports = { Node, BinaryTree }