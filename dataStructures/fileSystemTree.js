class Node {
  constructor(value, parentNode = null) {
    this.children = [];
    this.value = value;
    this.parent = parentNode;
  }

  addNode(value) {
    const segments = value.split("/");
    if (segments.length === 0) {
      return;
    }

    if (segments.length === 1) {
      const node = new Node(segments[0], this);
      this.children.push(node);
      return { node, index: this.children.length - 1 };
    }

    const existingChildNode = this.children.find(
      (child) => child.value === segments[0]
    );
    if (existingChildNode) {
      existingChildNode.addNode(segments.slice(1).join("/"));
      return { node: existingChildNode, index: this.children.length - 1 };
    } else {
      const node = new Node(segments[0], this);
      node.addNode(segments.slice(1).join("/"));
      this.children.push(node);
      return { node, index: this.children.length - 1 };
    }
  }

  removeNode(value) {
    const segments = value.split("/");
    if (segments.length === 0) {
      return;
    }

    if (segments.length === 1) {
      const existingNodeIndex = this.children.findIndex(
        (child) => child.value === segments[0]
      );
      if (existingNodeIndex < 0) {
        throw new Error("Could not find a matching value :" + segments[0]);
      }
      this.children.splice(existingNodeIndex, 1);
    }

    if (segments.length > 1) {
      const existingChildNode = this.children.find(
        (child) => child.value === segments[0]
      );

      if (!existingChildNode) {
        throw new Error("Could not find a matching path :" + segments[0]);
      }
      existingChildNode.removeNode(segments.slice(1).join("/"));
    }
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  add(path) {
    this.root.addNode(path);
  }
  remove(path) {
    this.root.removeNode(path);
  }
}

const fileSystem = new Tree("/");

fileSystem.add("documents");
fileSystem.add("documents/personal/tax.docx");
fileSystem.add("pics/photo1.jpeg");
fileSystem.add("pics/photo2.jpeg");
fileSystem.remove("pics/photo2.jpeg");
//fileSystem.remove("pics/photo5.jpeg");
//fileSystem.remove("picsssss/photo2.jpeg");

console.log("fs tree: ", fileSystem);
