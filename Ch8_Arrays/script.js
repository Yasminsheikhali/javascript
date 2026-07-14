// let firstName = "John";
// let friendName = ["Alice", "Bob", "Charlie","David"];
// let friendAge = [25, 30, 22, 28];
// console.log ('First Name:', firstName);
// console.log ('Friend Names:', friendName);
// console.log ('Friend Ages:', friendAge);
// console.log(friendName[0] + " is " + friendAge[0] + " years old.");
// console.log(friendName[1] + " is " + friendAge[1] + " years old.");

// let students = new Array();
// students.push ("Liban")
// students.push ("Abdi")
// students.push ("Ahmed")
// students.push ("Ali")
// students[1] = "Nuura"

// // console.log(students[2])

// console.log(students.length)

// Create Array
let students = new Array();

// =======================
// push() - Add to End
// =======================
students.push("Liban");
students.push("Abdi");
students.push("Ahmed");
students.push("Ali");

console.log("original:", students);

// =======================
// length
// =======================
// console.log("length:", students.length);

// =======================
// Access by Index
// =======================
// console.log("students[2]:", students[2]);

// =======================
// Update Element
// =======================
// students[1] = "Nuura";
// console.log("Update Index:", students);

// =======================
// pop() - Remove Last
// =======================
students.pop();
console.log("pop():", students);

// // =======================
// // push() Again
// // =======================
// students.push("Ali");
// // console.log("push():", students);

// // =======================
// // shift() - Remove First
// // =======================
// students.shift();
// console.log("shift():", students);

// // =======================
// // unshift() - Add First
// // =======================
students.unshift("Liban");
console.log("unshift():", students);

// // =======================
// // indexOf()
// // =======================
// console.log("indexOf('Ahmed'):", students.indexOf("Ahmed"));

// // =======================
// // lastIndexOf()
// // =======================
// students.push("Ahmed");
// console.log("lastIndexOf('Ahmed'):", students.lastIndexOf("Ahmed"));

// // =======================
// // includes()
// // =======================
// console.log("includes('Ali'):", students.includes("Ali"));

// // =======================
// // join()
// // =======================
// console.log("join('-'):", students.join("-"));

// // =======================
// // concat()
// // =======================
// console.log("concat():", students.concat(["Hassan", "Amina"]));

// // =======================
// // slice()
// // =======================
// console.log("slice(1,3):", students.slice(1, 3));

// // =======================
// // splice() Remove
// // =======================
// students.splice(1, 1);
// console.log("splice Remove:", students);

// // =======================
// // splice() Insert
// // =======================
// students.splice(1, 0, "Farah");
// console.log("splice Insert:", students);

// // =======================
// // reverse()
// // =======================
// students.reverse();
// console.log("reverse():", students);

// // =======================
// // sort()
// // =======================
// students.sort();
// console.log("sort():", students);

// // =======================
// // find()
// // =======================
// console.log(
//   "find():",
//   students.find(student => student.startsWith("A"))
// );

// // =======================
// // findIndex()
// // =======================
// console.log(
//   "findIndex():",
//   students.findIndex(student => student === "Ahmed")
// );

// // =======================
// // filter()
// // =======================
// console.log(
//   "filter():",
//   students.filter(student => student.length > 4)
// );

// // =======================
// // map()
// // =======================
// console.log(
//   "map():",
//   students.map(student => student.toUpperCase())
// );

// // =======================
// // forEach()
// // =======================
// console.log("forEach():");
// students.forEach(student => console.log(student));

// // =======================
// // some()
// // =======================
// console.log(
//   "some():",
//   students.some(student => student === "Ali")
// );

// // =======================
// // every()
// // =======================
// console.log(
//   "every():",
//   students.every(student => typeof student === "string")
// );

// // =======================
// // fill()
// // =======================
// students.fill("Student");
// console.log("fill():", students);

// // =======================
// // Reset Array
// // =======================
// students = ["Liban", "Abdi", "Ahmed", "Ali"];

// // =======================
// // copyWithin()
// // =======================
// students.copyWithin(0, 2);
// console.log("copyWithin():", students);

// // =======================
// // flat()
// // =======================
// students = ["Liban", ["Abdi", "Ahmed"], ["Ali"]];
// console.log("flat():", students.flat());

// // =======================
// // flatMap()
// // =======================
// students = ["Liban", "Abdi", "Ahmed"];
// console.log(
//   "flatMap():",
//   students.flatMap(student => [student, student.toUpperCase()])
// );

// // =======================
// // at()
// // =======================
// console.log("at(-1):", students.at(-1));

// // =======================
// // Array.isArray()
// // =======================
// console.log("Array.isArray():", Array.isArray(students));

// // =======================
// // Array.from()
// // =======================
// console.log("Array.from():", Array.from("Liban"));

// // =======================
// // Array.of()
// // =======================
// console.log("Array.of():", Array.of("Liban", "Abdi", "Ahmed"));