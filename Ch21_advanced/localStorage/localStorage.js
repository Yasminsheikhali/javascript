
// Function to save name to localStorage
function saveName() {
    const name = document.getElementById('nameInput').value;
    if (name != undefined) {
        localStorage.setItem('userName', name);
        displayGreeting();
        document.getElementById('nameInput').value = '';
    } else {
        alert('Please enter a name.');
    }
}

// Function to display the saved name
function displayGreeting() {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
        document.getElementById('greeting').textContent = `Hello, ${storedName}!`;
    } else {
        document.getElementById('greeting').textContent = '';
    }
}

// Function to clear the stored name
function clearName() {
    localStorage.removeItem('userName');
    displayGreeting();
}

