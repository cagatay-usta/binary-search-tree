import Tree from "./binary-search-tree.js";
import prettyPrint from "./prettyprint.js";

//tests
const testArray = [3, 5, 6, 1, 2, 4, 7, 8, 9];
const testArray2 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(testArray2);
tree.insert(2);
console.log(tree);
console.log(tree.levelOrder());
console.log(tree.inorder());
console.log(tree.preorder());
console.log(tree.postorder());

prettyPrint(tree.root);

const tree2 = new Tree();
tree2.insert(3);
tree2.insert(2);
tree2.insert(4);
tree2.insert(5);
tree2.insert(8);
tree2.insert(9);
tree2.insert(7);
// tree2.delete(8);
// tree2.delete(2);
// tree2.delete(4);

// tree2.insert(4);
// tree2.delete(3);
console.log(tree2);
console.log(tree2.levelOrder());
console.log(tree2.inorder());
console.log(tree2.preorder());
console.log(tree2.find(8));
prettyPrint(tree2.root);
