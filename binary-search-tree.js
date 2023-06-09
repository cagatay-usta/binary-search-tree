// binary search tree

class Node {
  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export default class Tree {
  constructor(array) {
    if (!array) this.root = new Node();
    else this.root = this.buildTree(this.sanitize(array));
  }

  // removes duplicates and sorts the array
  sanitize(array) {
    return [...new Set(array.sort((a, b) => a - b))];
  }

  buildTree(array, start = 0, end = array.length - 1) {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const node = new Node(array[mid]);

    node.left = this.buildTree(array, start, mid - 1);
    node.right = this.buildTree(array, mid + 1, end);

    return node;
  }

  insert(data, node = this.root) {
    if (!node.data) return (node.data = data);
    if (data < node.data) return node.left ? this.insert(data, node.left) : (node.left = new Node(data));
    if (data > node.data) return node.right ? this.insert(data, node.right) : (node.right = new Node(data));
  }
  delete(data, root = this.root) {
    this.root = this.deleteNode(data, root);
  }
  deleteNode(data, node) {
    if (data === node.data) {
      // base case = no children
      if (!node.left && !node.right) return null;
      // only right child
      if (!node.left && node.right) return node.right;
      // only left child
      if (node.left && !node.right) return node.left;
      // has two children
      else {
        let prev = node;
        let cur = node.right;
        // change variable to indicate which pointer will be updated later
        let change = false;
        while (cur.left) {
          change = true;
          prev = cur;
          cur = cur.left;
        }
        node.data = cur.data;
        // if it's the first child deleted update the right child, if it has more depth update the pointer to the left
        change ? (prev.left = cur.left) : (prev.right = cur.right);
        return node;
      }
    }
    if (data < node.data) node.left = this.deleteNode(data, node.left);
    if (data > node.data) node.right = this.deleteNode(data, node.right);
    return node;
  }

  find(data, node = this.root) {
    if (data < node.data) return this.find(data, node.left);
    if (data > node.data) return this.find(data, node.right);
    if (data === node.data) return node;
    // if not found return null
    return null;
  }

  levelOrder(node = this.root) {
    if (!node) return;
    const queue = [];
    const values = [];
    queue.push(node);
    while (queue.length) {
      const current = queue.shift();
      values.push(current.data);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return values;
  }

  inorder(node = this.root) {
    if (!node.data) return;
    const values = [];
    if (node.left) values.push(this.inorder(node.left));
    values.push(node.data);
    if (node.right) values.push(this.inorder(node.right));
    return values.flat();
  }

  preorder(node = this.root) {
    if (!node.data) return;
    const values = [];
    values.push(node.data);
    if (node.left) values.push(this.preorder(node.left));
    if (node.right) values.push(this.preorder(node.right));
    return values.flat();
  }

  postorder(node = this.root) {
    if (!node.data) return;
    const values = [];
    if (node.left) values.push(this.postorder(node.left));
    if (node.right) values.push(this.postorder(node.right));
    values.push(node.data);
    return values.flat();
  }

  depth(data, node = this.root) {
    let counter = 0;
    if (data === node.data) return counter;
    if (data < node.data) return (counter += this.depth(data, node.left) + 1);
    if (data > node.data) return (counter += this.depth(data, node.right) + 1);
    // if not found return null
    return null;
  }

  height(data, node = this.find(data)) {
    // return null if not found
    if (!node) return null;
    let height = 0;
    if (node.left || node.right) {
      return (height += Math.max(this.height(data, node.left) + 1, this.height(data, node.right) + 1));
    }
    return height;
  }

  isBalanced(node = this.root) {
    if (node.left && node.right) {
      if (Math.abs(this.height(node.left.data) - this.height(node.right.data)) > 1) return false;
    }
    if (node.left) return this.isBalanced(node.left);
    if (node.right) return this.isBalanced(node.right);
    return true;
  }

  rebalance() {
    // if balanced return the same
    if (this.isBalanced()) return this;
    // make an array out of the tree
    const builderArray = this.inorder();
    // feed the array to build tree function
    this.root = this.buildTree(builderArray);
    // return the new pointer to root
    return this.root;
  }
}
