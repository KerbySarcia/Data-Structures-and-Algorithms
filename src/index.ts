import BinarySearch from "./BinarySearch.js";
import BubbleSort from "./BubbleSort.js";
import LinearSearch from "./LinearSearch.js";
import Queue from "./Queue.js";
import Stack from "./Stack.js";
import TwoCrystalBalls from "./TwoCrystalBall.js";

const stack = new Queue<number>();

stack.enqueue(1);
stack.enqueue(2);
console.log(stack.dequeue());
console.log(stack.dequeue());
console.log(stack.dequeue());
console.log(stack.dequeue());
