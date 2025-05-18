class Node {
    constructor(value = null, nextNode = null, previousNode = null) {
        this.value = value;
        this.previousNode = previousNode;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor(headNode = null, tailNode = null) {
        this.headNode = headNode;
        this.tailNode = tailNode;
        this.listSize = 0;
    }

    append(value) {
        let newNode = new Node(value);
        if (this.tailNode) {
            this.tailNode.nextNode = newNode;
            newNode.previousNode = this.tailNode;
        } else {
            /*
      I assume that if there's no head there's also
      no tail. I'll need to set both values on the first
      append
      */
            this.headNode = newNode;
        }
        this.tailNode = newNode;
        this.listSize++;
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
            this.headNode.previousNode = newNode;
        } else {
            this.tailNode = newNode;
        }
        this.headNode = newNode;
        this.listSize++;
    }

    size() {
        return this.listSize;
    }

    head() {
        return this.headNode;
    }

    tail() {
        return this.tailNode;
    }

    at(index) {
        if (index > this.listSize) {
            console.error(
                `at(): Requested index (${index}) is bigger than the Linked List (size:${this.listSize})`
            );
            return null;
        }
        if (index < 0) {
            console.error(`at(): Requested index (${index}) is smaller than 0`);
        }

        let currentNode = this.head();
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.nextNode;
        }

        return currentNode;
    }

    toString() {
        if (this.listSize == 0) {
            return "toString(): LinkedList has 0 Nodes";
        }
        let size = this.size();
        let currentNode = this.head();
        let values = [];
        for (let i = 0; i < size; i++) {
            values.push(`(${currentNode.value}) `);
            currentNode = currentNode.nextNode;
        }
        return values.join("=> ");
    }

    pop() {
        if (!this.listSize) {
            console.error("pop(): LinkedList is empty, cannot pop");
            return;
        }
        if (this.tailNode == this.headNode) {
            this.tailNode = null;
            this.headNode = null;
            this.listSize--;
            return;
        }
        this.tailNode = this.tailNode.previousNode;
        this.tailNode.nextNode = null;
        this.listSize--;
    }

    contains(value) {
        if (!this.listSize) {
            console.error(
                `contains(): LinkedList is empty, cannot search for ${value}`
            );
        }

        let size = this.size();
        let currentNode = this.head();
        for (let i = 0; i < size; i++) {
            if (currentNode.value != null && currentNode.value == value) {
                return true;
            }

            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        if (!this.listSize) {
            console.error(
                `contains(): LinkedList is empty, cannot search for ${value}`
            );
        }

        let size = this.size();
        let currentNode = this.head();
        for (let i = 0; i < size; i++) {
            if (currentNode.value != null && currentNode.value == value) {
                return i;
            }

            currentNode = currentNode.nextNode;
        }
        return null;
    }

    insertAt(index, value) {
        if (index > this.listSize) {
            console.error(
                `insertAt(): Requested index (${index}) is bigger than the Linked List (size:${this.listSize})`
            );
            return null;
        }
        if (index < 0) {
            console.error(
                `insertAt(): Requested index (${index}) is smaller than 0`
            );
        }

        let newNode = new Node(value);
        let originalNode = this.at(index);
        // In the case of insertAt(listSize):
        // Since originalNode.previousNode is null, we get it from at (index - 1)
        // Instead of originalNode.previousNode directly
        let originalPreviousNode = this.at(index - 1);
        if (originalNode) {
            originalNode.previousNode = newNode;
        }
        if (originalPreviousNode) {
            originalPreviousNode.nextNode = newNode;
        }
        newNode.value = value;
        newNode.nextNode = originalNode;
        newNode.previousNode = originalNode;

        this.listSize++;

        if (!originalPreviousNode) {
            this.headNode = newNode;
            originalNode.previousNode = newNode;
        }

        // I need to make the previousNode's nextNode atrribute = the newNode I create
        // I need to make the previousNode attribute on originalNode = the new Node I create
        // if there's no previous node, then I need to change the head value to = newNode
        // if there's no next node, then I need to change the tail value to = newNode
    }
}

const mainList = new LinkedList();

mainList.append("hi1");
mainList.append("hi2");
mainList.prepend("hi0");
console.log(mainList.toString());
console.log(`List length ${mainList.listSize}`);

mainList.insertAt(1, "insert at 1");
console.log(mainList.toString());
console.log(`List length ${mainList.listSize}`);
mainList.insertAt(mainList.listSize, "insert at end");
console.log(mainList.toString())
// console.log(mainList.toString())
