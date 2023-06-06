// binary search tree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export default class Tree {
  constructor(array) {
    this.root = this.buildTree(this.sanitize(array));
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
    if (data < node.data) return node.left ? this.insert(data, node.left) : (node.left = new Node(data));
    if (data > node.data) return node.right ? this.insert(data, node.right) : (node.right = new Node(data));
  }
}
