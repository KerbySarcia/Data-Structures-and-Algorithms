import BinarySearch from "./BinarySearch.js";
import BubbleSort from "./BubbleSort.js";
import LinearSearch from "./LinearSearch.js";
import Queue from "./Queue.js";
import Stack from "./Stack.js";
import TwoCrystalBalls from "./TwoCrystalBall.js";

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
