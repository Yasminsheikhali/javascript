// compile time errors
// run time errors

// IDE Integrated Development Environment
   // 1. Visual Studio Code
   // 2. intelliJ IDEA
   // 3.Sublime Text
   // 4. Atom
   // 5. Eclipse
   // 6. NetBeans
   // 7. PyCharm
   // 8. Android Studio



try {
//    // open database connection 
//  let firstName 
// console.log(firstName.toUpperCase())
// console.log ("Hello")
// console.log ("Hello2")
let dbError = new Error ("Could not connect to the database")
throw dbError

} catch (error) {
    console.log(error.message)
} finally {
    console.log ("This will run regardless of the error")
    // close database connection
}
