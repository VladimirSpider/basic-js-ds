const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }
  
  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addWithin(this.treeRoot, data);
    
    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }
      
      if (node.data === value) {
        return node;
      }
      
      if (value < node.data) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }
      
      return node;
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.treeRoot) {
      return;
    }
    
    let node = this.treeRoot;
    while (node.left) {
      node = node.left;
    }
    
    return node.data;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    if (!this.treeRoot) {
      return;
    }
    
    let node = this.treeRoot;
    while (node.right) {
      node = node.right;
    }
    
    return node.data;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};