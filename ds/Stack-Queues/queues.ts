//FIFO => First In First Out

interface newNodeInterface {
  value: any;
  next: null | newNodeInterface;
}
class Queue {
  first: newNodeInterface | null;
  last: newNodeInterface | null;
  length: 0;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  private node(value: any) {
    return {
      value,
      next: null
    };
  }
  peek() {
    //very fitst item
    return this.first;
  }
  enqueue(value: any): this {
    //add to the que
    const newNode = this.node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      if (this.last) {
        this.last.next = newNode;
        this.last = newNode;
      }
    }
    this.length++;
    return this;
  }
  dequeue() {
    //remove from front of the LIST
    if (this.length === 0) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    if (this.first) {
      this.first = this.first.next;
    }
    this.length--;
    return holdingPointer?.value;
  }
  //isEmpty;
}

const myQueue = new Queue();
