interface newNodeInterface {
  value: any;
  next: null | newNodeInterface;
}

class Stack {
  top: newNodeInterface | null;
  bottom: newNodeInterface | null;
  length: number;
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  private node(value: any): newNodeInterface {
    return {
      value,
      next: null
    };
  }
  peek() {
    //see top node
    return this.top?.value;
  }
  push(value: any) {
    //add node to top of stack
    const newNode = this.node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    //remove node from top of stack
    if (!this.top) {
      return null;
    }
    if (this.length === 1) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingPointer.value;
  }
  //isEmpty
}

const myStack = new Stack();

//Discord
//Udemy
//google
