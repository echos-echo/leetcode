class Stack {
    constructor() {
      this.values = [];
      this.length = 0;
      this.min = null;
    }

    push(val) {
      this.values.push({value: val, prevMin: this.min});
      this.length++;
      this.min < val ? null : this.min = val;
    }

    pop() {
      this.min = this.values.pop().prevMin;
      this.length--;
    }

    top() {
      return this.values[this.length - 1].value;
    }

    getMin() {
      return this.min;
    }
}

/** 
 * Your Stack object will be instantiated and called as such:
 * var obj = new Stack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new Stack();
obj.push(-2);
obj.push(0);
obj.push(-3);
let objMin = obj.getMin();  // -> -3
console.dir(obj);  // -> {this.values = [-2, 0, 3], this.length = 3}
console.log(objMin);
obj.pop();  // -> {this.values = [-2, 0], this.length = 2}
let objNextMin = obj.getMin();  // -> -2
let param = obj.top();  // -> 0
console.dir(obj);  // -> {this.values = [-2, 0], this.length = 2}
console.log(param);
console.log(objNextMin);