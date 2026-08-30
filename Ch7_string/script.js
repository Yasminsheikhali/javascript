let fullName = "John Doe"; // index = position number 
// ============================================
// JAVASCRIPT STRING METHODS
// ============================================

// ============================================
// 1. length
// Returns the number of characters in the string.
// Spaces count as characters.
// ============================================

// console.log(fullName.length);

// Output:
// 8



// // ============================================
// // 2. toUpperCase()
// // Converts every letter to uppercase.
// // ============================================

// console.log(fullName.toUpperCase());

// // Output:
// // JOHN DOE



// // ============================================
// // 3. toLowerCase()
// // Converts every letter to lowercase.
// // ============================================

// console.log(fullName.toLowerCase());

// // Output:
// // john doe



// // ============================================
// // 4. charAt(index)
// // Returns the character at the specified index.
// // Index starts at 0.
// // ============================================

// console.log(fullName.charAt(0));
// console.log(fullName.charAt(5));

// // Output:
// // J
// // D



// // ============================================
// // 5. at(index)
// // Similar to charAt() but also supports negative indexes.
// // ============================================

// console.log(fullName.at(0));
// console.log(fullName.at(-1));

// // Output:
// // J
// // e



// // ============================================
// // 6. indexOf()
// // Returns the first position of a character or word.
// // Returns -1 if not found.
// // ============================================

// console.log(fullName.indexOf("o"));
// console.log(fullName.indexOf("Doe"));
// console.log(fullName.indexOf("Bob"));

// // Output:
// // 1
// // 5
// // -1



// // ============================================
// // 7. lastIndexOf()
// // Returns the last occurrence.
// // ============================================

// console.log(fullName.lastIndexOf("o"));

// // Output:
// // 6



// // ============================================
// // 8. includes()
// // Checks if the text exists.
// // Returns true or false.
// // ============================================

// console.log(fullName.includes("John"));
// console.log(fullName.includes("Bob"));

// // Output:
// // true
// // false



// // ============================================
// // 9. startsWith()
// // Checks how the string begins.
// // ============================================

// console.log(fullName.startsWith("John"));

// // Output:
// // true



// // ============================================
// // 10. endsWith()
// // Checks how the string ends.
// // ============================================

// console.log(fullName.endsWith("Doe"));

// // Output:
// // true



// // ============================================
// // 11. slice(start, end)
// // Extracts part of the string.
// // End position is NOT included.
// // ============================================

// console.log(fullName.slice(0, 4));
// // console.log(fullName.slice(5));

// // Output:
// // John
// // Doe



// // ============================================
// // 12. substring(start, end)
// // Similar to slice().
// // ============================================

// console.log(fullName.substring(0, 4));

// // Output:
// // John



// // ============================================
// // 13. replace()
// // Replaces the first occurrence.
// // ============================================

// console.log(fullName.replace("John", "Jane"));

// // Output:
// // Jane Doe



// // ============================================
// // 14. replaceAll()
// // Replaces every occurrence.
// // ============================================

// let animals = "cat cat cat";

// console.log(animals.replaceAll("cat", "dog"));

// // Output:
// // dog dog dog



// // ============================================
// // 15. trim()
// // Removes spaces from both ends.
// // ============================================

// let name = "   John Doe   ";

// console.log(name.trim());

// // Output:
// // John Doe



// // ============================================
// // 16. trimStart()
// // Removes spaces from the beginning.
// // ============================================

// console.log(name.trimStart());

// // Output:
// // John Doe



// // ============================================
// // 17. trimEnd()
// // Removes spaces from the end.
// // ============================================

// console.log(name.trimEnd());

// // Output:
// //    John Doe



// // ============================================
// // 18. split()
// // Splits the string into an array.
// // ============================================

// console.log(fullName.split(" "));

// // Output:
// // ["John", "Doe"]



// // ============================================
// // 19. concat()
// // Joins two strings.
// // ============================================

// let greeting = "Hello ";

// console.log(greeting.concat(fullName));

// // Output:
// // Hello John Doe



// // ============================================
// // 20. repeat()
// // Repeats the string.
// // ============================================

// console.log("Hi ".repeat(3));

// // Output:
// // Hi Hi Hi



// // ============================================
// // 21. padStart()
// // Adds characters to the beginning.
// // ============================================

// console.log("5".padStart(3, "0"));

// // Output:
// // 005



// // ============================================
// // 22. padEnd()
// // Adds characters to the end.
// // ============================================

// console.log("5".padEnd(3, "0"));

// // Output:
// // 500



// // ============================================
// // 23. search()
// // Finds the position of text.
// // ============================================

// console.log(fullName.search("Doe"));

// // Output:
// // 5



// // ============================================
// // 24. match()
// // Returns matching text.
// // ============================================

// console.log(fullName.match("John"));

// // Output:
// // [
// //   'John',
// //   index: 0,
// //   input: 'John Doe',
// //   groups: undefined
// // ]



// // ============================================
// // 25. valueOf()
// // Returns the string value.
// // ============================================

// console.log(fullName.valueOf());

// // Output:
// // John Doe



// // ============================================
// // 26. toString()
// // Converts to a string.
// // (Strings are already strings.)
// // ============================================

// console.log(fullName.toString());

// // Output:
// // John Doe



// // ============================================
// // 27. Access characters using indexes
// // Not a method, but very common.
// // ============================================

// console.log(fullName[0]);
// console.log(fullName[5]);

// // Output:
// // J
// // D