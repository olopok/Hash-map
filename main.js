import { HashMap } from "./hashmap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.set("Banana", "brown");
test.set("bella", "figa");

<<<<<<< HEAD
console.log(test.get("lon")); //return false, lon don't exsit.
console.log(test.has("Banana"));//return true
console.log(test.remove("kite"));// kite was removed
console.log(test.buckets);// reurn the full hash map
console.log(test.length());// return the number of the entries
console.log(test.keys())// return all the keys
console.log(test.values())// return all the values
console.log(test.entries())// return all the entries
console.log(test.clear());// return an empty hash map
=======
test.get("lon");
console.log(test.has("Banana"));
console.log(test.remove("kite"));
console.log("test", test.buckets);
>>>>>>> 8aa9539b0f5a3a8aa3d7923259d7d572d14cbbac
