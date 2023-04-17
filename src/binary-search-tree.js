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

  has(data) {
    return searchWithin(this.treeRoot, data);
    
    function searchWithin(node, value) {
      if (!node) {
        return false;
      }
      
      if (node.data === value) {
        return true;
      }
      
      return value < node.data ?
        searchWithin(node.left, value) :
        searchWithin(node.right, value);
    }
  }

  find(data) {
    return searchWithin(this.treeRoot, data);
    
    function searchWithin(node, value) {
      if (!node) {
        return null;
      }
      
      if (node.data === value) {
        return node.data;
      }
      
      return value < node.data ?
        searchWithin(node.left, value) :
        searchWithin(node.right, value);
    }
    // throw new NotImplementedError('Not implemented');
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
  }
}

module.exports = {
  BinarySearchTree
};