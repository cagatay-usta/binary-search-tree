import Tree from "./binary-search-tree.js";
import prettyPrint from "./prettyprint.js";

// driver script for tests

function randomArrayGenerator() {
  const n = Math.random() * 30 + 1;
  const values = [];
  for (let i = 0; i < n; i++) {
    values.push(Math.floor(Math.random() * 100) + 1);
  }
  return values;
}
export default function driver() {
  const tree = new Tree(randomArrayGenerator());
  prettyPrint(tree.root);
  console.log(`is the tree balanced? ${tree.isBalanced()}`);
  console.log(`levelOrder: ${tree.levelOrder()}`);
  console.log(`inorder: ${tree.inorder()}`);
  console.log(`preorder: ${tree.preorder()}`);
  console.log(`postorder: ${tree.postorder()}`);
  console.log(`inserting 3 random 100+ numbers to unbalance the tree`);
  tree.insert(Math.floor(Math.random() * 100) + 100);
  tree.insert(Math.floor(Math.random() * 100) + 100);
  tree.insert(Math.floor(Math.random() * 100) + 100);
  prettyPrint(tree.root);
  console.log(`is the tree balanced? ${tree.isBalanced()}`);
  console.log(`rebalancing the tree`);
  tree.rebalance();
  prettyPrint(tree.root);
}
