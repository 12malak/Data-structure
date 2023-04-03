// // program to implement stack data structure
// class Stack {
//     constructor() {
//         this.items = [];
//     }
    
//     // add element to the stack
//     add(element) {
//         return this.items.push(element);
//     }
    
//     // remove element from the stack
//     remove() {
//         if(this.items.length > 0) {
//             return this.items.pop();
//         }
//     }
    
//     // view the last element
//     peek() {
//         return this.items[this.items.length - 1];
//     }
    
//     // check if the stack is empty
//     isEmpty(){
//        return this.items.length == 0;
//     }
   
//     // the size of the stack
//     size(){
//         return this.items.length;
//     }
 
//     // empty the stack
//     clear(){
//         this.items = [];
//     }
// }

// let stack = new Stack();
// stack.add(1);
// stack.add(2);
// stack.add(4);
// stack.add(8);
// console.log(stack.items);

// stack.remove();
// console.log(stack.items);

// console.log(stack.peek());

// console.log(stack.isEmpty());

// console.log(stack.size());

// stack.clear();
// console.log(stack.items);






// Implement a function that returns the minimum element in a stack in constant time complexity
const stack = [];
const minStack = [];

function myPush(num){
    stack.push(num);
    if (minStack.length === 0 || num <= minStack[minStack.length - 1]) {
        minStack.push(num);
    }
}
function getMin(){
    return minStack[minStack.length - 1];
}

myPush(7);
myPush(2);
myPush(3);
myPush(4);
myPush(5);


console.log(stack);
console.log(getMin());




// let stackQ1=[];
// let count=0;
// let min=0;
// let start0=0;
// function push0(element){
//   stackQ1[count]=element;
//   count++;
//   console.log(`${element} added to ${count}`);
//   if(min==0 && start0==0){
//    min=element;
//    start0=1;
//   }else if(min> element){
//    min=element;
//  }
//    return count -1
// }

// push0(400)
// push0(200)
// push0(300)
// push0(100)

// console.log(stackQ1)
// console.log(`${min} is the minimum element`)

// Given a queue of integers, reverse the order of the elements in the queue.


let queue = [1, 2, 3, 4, 5];



function reverseQueue(queue) {
    let stack = [];
    while (queue.length > 0) {
        stack.push(queue.shift());
    }
    while (stack.length > 0) {
        queue.push(stack.pop());
    }
    return queue;
}

console.log(reverseQueue(queue));




// // Implement a Queue using 2 stacks s1 and s2.



// class Queue {
//     constructor() {
//         this.s1 = [];
//         this.s2 = [];
//     }

//     enqueue(value) {
//         this.s1.push(value);
//     }

//     dequeue() {
//         if (this.s1.length === 0 && this.s2.length === 0) {
//             return undefined;
//         }

//         if (this.s2.length === 0) {
//             while (this.s1.length > 0) {
//                 this.s2.push(this.s1.pop());
//             }
//         }

//         return this.s2.pop();
//     }

//     isEmpty() {
//         return this.s1.length === 0 && this.s2.length === 0;
//     }

//     size() {
//         return this.s1.length + this.s2.length;
//     }

//     peek() {
//         if (this.s1.length === 0 && this.s2.length === 0) {
//             return undefined;
//         }

//         if (this.s2.length === 0) {
//             while (this.s1.length > 0) {
//                 this.s2.push(this.s1.pop());
//             }
//         }

//         return this.s2[this.s2.length - 1];
//     }
// }
// const q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// console.log(q.peek());
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.isEmpty());