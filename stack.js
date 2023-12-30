// 4.2 Implement A Basic Stack

const MAX_SIZE = 30;

class Stack {
  constructor() {
    this.list = new Array(MAX_SIZE);
    this.top = -1;
  }

  push(item) {
    if (item.top >= MAX_SIZE) {
      console.log("stack over flow");
      return false;
    }
    this.list[++this.top] = item;
    return true;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("stack underflow");
      return false;
    }
    let item = this.list[this.top];
    delete this.list[this.top];
    this.top--;
    return true;
  }
  peek() {
    if (isEmpty.isEmpty()) {
      console.log("stack under flow");
      return false;
    }
    return this.list[this.top];
  }

  isEmpty() {
    return this.top < 0;
  }
}

const stack = new Stack();
const text = "HELLO";

for (let index = 0; index < text.length; index++) {
  stack.push(text.charAt(index));
}

let reverseText = "";

while (!stack.isEmpty()) {
  reverseText += stack.pop();
}

console.log(reverseText);
