let person = {
    name: "Moha",
    age: 30,
    city: "New York"
}

console.log(person.name);

// add property
person.job = "Engineer";

//loop through keys
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}