// function listNames() {

//     console.log("Yasmin");
//     console.log("John");
//     console.log("Alice");
//     console.log("Bob");
//     console.log("Eve");
//     console.log("Charlie");
// }
// listNames();



// function* listNames() {
//     yield "Yasmin";
//     yield "John";
//     yield "Alice";
//     yield "Bob";
//     yield "Eve";
//     yield "Charlie";
// }

// const names = listNames();

// for (const name of names) {
//     console.log(name);
// }




// function* listNames() {
//     yield "Yasmin";
//     yield "John";
//     yield "Alice";
//     yield "Bob";
//     yield "Eve";
//     yield "Charlie";
// }

// const names = listNames();

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);


function* listNames() {
    yield "Yasmin";
    yield "John";
    yield "Alice";
    yield "Bob";
    yield "Eve";
    yield "Charlie";
}

const names = listNames();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayNames() {
    const names = listNames();

    console.log(names.next().value);
    await sleep(3000);

    console.log(names.next().value);
    await sleep(3000);

    console.log(names.next().value);
    await sleep(3000);

    console.log(names.next().value);
    await sleep(3000);

    console.log(names.next().value);
    await sleep(3000);

    console.log(names.next().value);
    await sleep(3000);
}

displayNames();