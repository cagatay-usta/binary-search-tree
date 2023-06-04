import Tree from "./binary-search-tree.js";
import prettyPrint from "./prettyprint.js";

//tests
const testArray = [3, 5, 6, 1, 2, 4, 7, 8, 9];
const testArray2 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(testArray2);
console.log(tree);
prettyPrint(tree.root);
