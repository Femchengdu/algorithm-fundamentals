class Node {
  constructor(value, parentNode = null) {
    this.children = [];
    this.value = value;
    this.parent = parentNode;
  }

  addNode(value) {
    const node = new Node(value, this);
    this.children.push(node);

    return { node, index: this.children.length - 1 };
  }

  removeNode(index) {
    this.children.splice(index, 1);
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }
}

const fileSystem = new Tree("/");

const documentsNodeData = fileSystem.root.addNode("documents");
const softDevNodeData = fileSystem.root.addNode("softwareDev");

documentsNodeData.node.addNode("personalFiles");
softDevNodeData.node.addNode("ledgerProject");

console.log("fs tree: ", fileSystem);
