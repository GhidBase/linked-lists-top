class Node {
  constructor(value = null, nextNode = null) {
    (this.value = value), (this.nextNode = nextNode);
  }
}

class LinkedList {
  constructor(headNode = null, tailNode = null) {
    (this.headNode = headNode), (this.tailNode = tailNode);
  }

  append(value) {
    let newNode = new Node(value);
    if (this.tailNode) {
      this.tailNode.nextNode = newNode;
    } else {
      /*
      I assume that if there's no head there's also
      no tail. I'll need to set both values on the first
      append
      */
      this.headNode = newNode;
    }
    this.tailNode = newNode;
  }

  prepend(value) {
    let newNode = new Node(value);
    /*
    If there's already a head node, that will be the
    nextNode of this new Node
    Make sure to set the nextNode before changing the
    head attribute of the current linkedList
    */
    if (this.headNode) {
      newNode.nextNode = this.headNode;
    } else {
      this.tailNode = newNode;
    }
    this.headNode = newNode;
  }
}

const mainList = new LinkedList();
mainList.append("hi");
mainList.append("hi2");

console.clear();
console.log(mainList.headNode.value);
console.log(mainList.headNode.nextNode);
console.log(mainList.tailNode.value);
console.log(mainList.tailNode.nextNode);

// Each nextNode will be referential
