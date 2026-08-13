


let salesData = new Map([
    ["January", 1200],
    ["February", 1500],
    ["March", 1800],
    ["April", 2100],
    ["May", 2400],
    ["June", 2700],
    ["July", 3000],
    ["August", 3300],
    ["September", 2900],
    ["October", 3500],
    ["November", 4000],
    ["December", 4500]
]);


console.log(salesData.get("March")); // 1800
console.log(salesData.get("May")); // 2400

// Loop through the sales 
for (let [month, sales] of salesData) {
    console.log(`${month}: $${sales}`);

}
