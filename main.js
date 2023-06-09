import driver from "./driver.js";

driver();
document.querySelector("button").addEventListener("click", () => {
  console.clear();
  driver();
});

// manual tests to test specific methods
// const testArray = [3, 5, 6, 1, 2, 4, 7, 8, 9];
// const testArray2 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const tree = new Tree(testArray2);
// tree.insert(2);
// console.log(tree);
// console.log(tree.levelOrder());
// console.log(tree.inorder());
// console.log(tree.preorder());
// console.log(tree.postorder());
// console.log(tree.depth(6345));
// console.log(tree.height(67));
// prettyPrint(tree.root);
// console.log(tree.isBalanced());

// const tree2 = new Tree();
// tree2.insert(3);
// tree2.insert(2);
// tree2.insert(4);
// tree2.insert(5);
// tree2.insert(8);
// tree2.insert(9);
// tree2.insert(7);
// // tree2.delete(8);
// // tree2.delete(2);
// // tree2.delete(4);

// // tree2.insert(4);
// // tree2.delete(3);
// console.log(tree2);
// console.log(tree2.levelOrder());
// console.log(tree2.inorder());
// console.log(tree2.preorder());
// console.log(tree2.find(8));
// console.log(tree2.height(3));
// prettyPrint(tree2.root);
// console.log(tree2.isBalanced());
// tree2.rebalance();
// prettyPrint(tree2.root);

// // const tree3 = new Tree();
// // tree3.insert(3);
// // tree3.insert(2);
// // tree3.insert(4);
// // console.log(tree3.isBalanced());
