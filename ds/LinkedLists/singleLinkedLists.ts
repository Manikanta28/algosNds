interface node {
  value: any;
  next: null | node;
}

class SingleLinkedList {
  length: number;
  head: node;
  tail: node;
  constructor(value: any) {
    this.head = {
      value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  private newNode(value): node {
    return {
      value,
      next: null
    };
  }
  public printList() {
    let arr: Array<any> = [];
    let currentHead: node | null = this.head;
    while (currentHead !== null) {
      arr.push(currentHead.value);
      currentHead = currentHead.next;
    }
    console.log(arr);
  }
  private traverseToIndex(index: number) {
    let counter = 0;
    let myIndexHead: node = this.head;
    while (counter < index - 1 && myIndexHead.next !== null) {
      myIndexHead = myIndexHead.next;
      counter++;
    }
    return myIndexHead;
  }
  public append(value): node {
    //adding ending to the list
    let newNode = this.newNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return newNode;
  }
  public prepend(value): node {
    //adding before the head
    let newNode = this.newNode(value);
    this.head = {
      value,
      next: this.head
    };
    this.length++;
    return newNode;
  }
  public insert(index: number, value: any): node {
    //CHECK edge cases 0 and length ()
    const newNode = this.newNode(value);
    if (index === 0) {
      return this.prepend(value);
    } else if (index >= this.length) {
      return this.append(value);
    }

    let myIndexHead: node = this.traverseToIndex(index);
    newNode.next = myIndexHead.next;
    myIndexHead.next = newNode;
    this.length++;
    return newNode;
  }
  public remove(index: number) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    if (unwantedNode) {
      leader.next = unwantedNode.next;
      this.length--;
    }
  }
  public reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

var myLinkedList = new SingleLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.prepend(0);
myLinkedList.prepend(-1);
myLinkedList.prepend(-2);
myLinkedList.printList();
// myLinkedList.insert(2, 'x');
// myLinkedList.insert(0, 'x');
myLinkedList.insert(5, 'y');
myLinkedList.printList();
// [ -2, -1, 0, 1, 2, 3 ]
// [ -2, -1, 'x',0, 1, 2, 3 ]
// [ 'x',-2, -1, 'x',0, 1, 2, 3 ]
// [ 'x',-2, -1, 'y','x',0, 1, 2, 3 ]
