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
    // traverse the left subtree
    if (node.left) values.push(this.inorder(node.left));
    // traverse the root
    values.push(node.data);
    // traverse the right subtree
    if (node.right) values.push(this.inorder(node.right));
    return values.flat();
  }
}
