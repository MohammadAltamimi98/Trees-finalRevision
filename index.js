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


// let a = new Node(.5);
// let b = new Node(0);
// let c = new Node(5);
// let d = new Node(-1);
// let e = new Node(7);
// let f = new Node(18);
// let g = new Node(4);
// let h = new Node(3)


// a.left = b;
// a.right = c;
// b.left = d;
// c.right = e;
// c.left = h;
// e.right = f;
// e.left = g;




let tree = new BinaryTree(one);