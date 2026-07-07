let age = 10;

switch (true) {
    case (age < 13):
        console.log(`You are ${age} years old. You are a child.`);
       break;

    case (age < 18):
        console.log(`You are ${age} years old. You are a teenager.`);
        break;

    case (age < 65):
        console.log(`You are ${age} years old. You are an adult.`);
        break;

    default:
        console.log(`You are ${age} years old. You are a senior citizen.`);
}