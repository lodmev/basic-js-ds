const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addWithin(this.rootNode, data);
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return Boolean(this.find(data));
  }

  find(data) {
    const root = this.root();
    return findValue(root, data);
    function findValue(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        return findValue(node.left, data);
      } else {
        return findValue(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootNode = delNode(data, this.root());
    function delNode(data, node){
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = delNode(data, node.left);
        return node;
      } else if (data > node.data) {
        node.right = delNode(data, node.right);
        return node;
      } else {
        // data and node.data are equal
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.right) {
          return node.left
        }
        if (!node.left) {
          return node.right
        }
        // node has right and left child
        const minFromRight = BinarySearchTree.minNode(node.right);
        node.data = minFromRight.data;
        node.right = delNode(minFromRight.data, node.right)
        return node;
      }
    }
  }
  static minNode(startNode) {
    let node = startNode;
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  min() {
    const root = this.root();
    if (!root) return;
    return BinarySearchTree.minNode(root).data;
  }

  maxNode(startNode) {
    let node = startNode;
    while (node.right) {
      node = node.right;
    }
    return node;
  }

  max() {
    const root = this.root();
    if (!root) return;
    return this.maxNode(root).data;
  }
}

module.exports = {
  BinarySearchTree,
};
