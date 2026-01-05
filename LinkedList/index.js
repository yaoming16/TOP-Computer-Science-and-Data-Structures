import Node from "./node.js";
import LinkedList from "./linkedList.js";

let linkedList = new LinkedList();

for (let i = 0; i <= 10; i++) {
    linkedList.append(i);
}

console.log(linkedList.toString());

linkedList.prepend(55);
linkedList.prepend("asdasd");
console.log(linkedList.toString());

console.log(`The size of the linkedList is: ${linkedList.size()}`);

console.log("Head: ", linkedList.head());
console.log("Tail: ", linkedList.tail());

let index10 = linkedList.at(10);
let index0 = linkedList.at(0);
let index137 = linkedList.at(137);
console.log("Index 10: ", index10);
console.log("Index 0: ", index0);
console.log("Index 137: ", index137);

console.log(linkedList.pop());
console.log(linkedList.toString());

console.log(linkedList.pop());
console.log(linkedList.toString());

console.log("Contains 10: ", linkedList.contains(10));
console.log("Contains null: ", linkedList.contains(null));
console.log("Contains 0: ", linkedList.contains(0));
console.log("Contains 5: ", linkedList.contains(5));
console.log("Contains 789: ", linkedList.contains(789));

console.log(linkedList.toString())
let ind1 = linkedList.findIndex(55);
let ind2 = linkedList.findIndex(0);
let ind3 = linkedList.findIndex(10);
let ind4 = linkedList.findIndex(8);
let ind5 = linkedList.findIndex("casa");
let ind6 = linkedList.findIndex(null);
let ind7 = linkedList.findIndex(undefined);
console.log(`Index of 55: ${ind1}`);
console.log(`Index of 0: ${ind2}`);
console.log(`Index of 10: ${ind3}`);
console.log(`Index of 8: ${ind4}`);
console.log(`Index of 'casa': ${ind5}`);
console.log(`Index of null: ${ind6}`);
console.log(`Index of undefined: ${ind7}`);


