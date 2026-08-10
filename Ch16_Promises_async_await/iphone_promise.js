// creating a promise 


function behaviorPromise(isWellBehaved) {
  return new Promise((resolve, reject) => {

    // Simulate the waiting period (e.g., next week) with setTimeout
    setTimeout(() => {
      if (isWellBehaved) {
        resolve("You behaved well! Here's your new phone next week.");
      } else {
        reject("You did not behave well, so no phone this time.");
      }
    }, 5000); // 5000 milliseconds simulates waiting time
  });
}


// consume the promise

// Async function to consume the promise using async/await

async function checkPromise() {
  try {
    // Await the resolution of the behaviorPromise
    const message = await behaviorPromise(true); // Change true/false to simulate behavior
    console.log("Mother's promise fulfilled: " + message);
  } catch (error) {
    console.log("Mother's promise failed: " + error);
  } finally {
    console.log("Promise has been settled.");
  }
}

checkPromise(); // Call the async function to check the promise