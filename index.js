const { Node } = require('./BinaryTree');
const { BinaryTree } = require('./BinaryTree');
// const { BinarySearchTree } = require('./BinaryTree');


const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
const ten = new Node(10);


one.right = two;
one.left = three;
two.left = four;
two.right = five;
five.right = six;
five.left = nine;
three.right = eight;
eight.right = ten;
four.left = seven;


let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);
let f = new Node(6);
let g = new Node(-8);
let h = new Node(8)


a.left = b;
a.right = c;
b.left = d;
c.right = e;
c.left = h;
e.right = f;
e.left = g;


// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// const four = new Node(4);
// const five = new Node(5);
// one.right = two;
// one.left = three;
// two.left = four;
// two.right = five;



// const a = new Node(1);
// const b = new Node(2);
// const c = new Node(3);
// const d = new Node(4);
// const f = new Node(5);
// a.right = b;
// a.left = c;
// b.left = d;
// b.right = f;

let tree = new BinaryTree(one);

// console.log(tree.minDepth(one));
// console.log(tree.deepestRootSum());
console.log(tree.trimBt(one, 2, 7));
console.log(tree.rangeSum(0, 22));
// let tree1 = new BinaryTree(a);
// console.log(tree);
// console.log(tree.preOrder());
// console.log(tree.inOrder());
// console.log(tree.postOrder());
// console.log(tree.getMax()); 

// console.log(tree.getMin());

// console.log(tree.breadthFirst());
// console.log(tree.fizzbuzzTree());
// console.log(tree.sumOfOddNums());
// console.log(tree.sumOfEvenNums());
// console.log(tree.lonelyNodes());
// console.log(tree.heightOfTree(one));
// console.log(tree.leavesNum(one));
// console.log(tree.invert());
// console.log(tree.merge(one, a));



// console.log(tree.identical(one, two));
// console.log(tree.balanced());
// console.log(tree.mirror(one));

