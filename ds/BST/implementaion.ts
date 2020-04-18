interface bstNode {
  value: any;
  right: null | bstNode;
  left: null | bstNode;
}

class BSTNode implements bstNode {
  left: null | bstNode;
  right: null | bstNode;
  value: any;
  constructor(value: any) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  root: null | bstNode;
  constructor() {
    this.root = null;
  }
  insert(value: any) {
    if (this.root === null) {
      this.root = new BSTNode(value);
    } else {
      let currentNode = this.root;
      let needToTraverse: Boolean = true;
      while (needToTraverse) {
        let directionToGo: string = value < currentNode.value ? 'left' : 'right';
        if (currentNode[directionToGo] === null) {
          currentNode[directionToGo] = new BSTNode(value);
          needToTraverse = false;
        } else {
          currentNode = currentNode[directionToGo];
          needToTraverse = true;
        }
      }
    }
  }
  lookup(value: any) {
    if (this.root === null) {
      return null;
    } else {
      let currentNode = this.root;
      let needToTraverse: Boolean = true;
      while (needToTraverse) {
        let currentNodeValue = currentNode.value;
        if (currentNodeValue === value) {
          return currentNode;
        }
        let directionToGo: string = value < currentNode.value ? 'left' : 'right';
        if (currentNode[directionToGo] === null) {
          needToTraverse = false;
          return null;
        } else {
          currentNode = currentNode[directionToGo];
          needToTraverse = true;
        }
      }
    }
  }
  preOrderTraversal() {
    // <root> -> <left> -> <right>
    //     9
    //  4     20
    //1  6  15  170
    let roots: Array<bstNode> = [];
    let traversal: Array<any> = [];

    if (this.root !== null) {
      roots.push(this.root);
    }

    while (roots.length) {
      let lastElement = roots.pop();
      traversal.push(lastElement?.value);
      //Pushing right first so that we can pick left element first while popping
      if (lastElement?.right) {
        roots.push(lastElement.right);
      }
      //will be picked while popping
      if (lastElement?.left) {
        roots.push(lastElement.left);
      }
    }

    return traversal.join('->');
  }

  postOrderTraversal() {
    // <right> -> <left> -> <root>
    //     9
    //  4     20
    //1  6  15  170
    let roots: Array<bstNode> = [];
    let traversal: Array<any> = [];

    if (this.root !== null) {
      roots.push(this.root);
    }
  }

  inOrderTraversal() {
    // <left> -> <root> -> <right>
    //     9
    //  4     20
    //1  6  15  170
  }

  remove() {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
JSON.stringify(traverse(tree.root));

console.log(tree.preOrderTraversal());

//     9
//  4     20
//1  6  15  170

function traverse(node: bstNode | null): bstNode | null {
  const tree: bstNode = {
    value: null,
    left: null,
    right: null
  };
  if (node) {
    tree.value = node.value;
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  return null;
}
