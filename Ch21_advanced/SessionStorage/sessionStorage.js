
// Function to save name to sessionStorage
function saveName() {
    const name = document.getElementById('nameInput').value;
    if (name != undefined) {
        sessionStorage.setItem('userName', name);
        displayGreeting();
        document.getElementById('nameInput').value = '';
    } else {
        alert('Please enter a name.');
    }
}

// Function to display the saved name
function displayGreeting() {
    const storedName = sessionStorage.getItem('userName');
    if (storedName) {
        document.getElementById('greeting').textContent = `Hello, ${storedName}!`;
    } else {
        document.getElementById('greeting').textContent = '';
    }
}

// Function to clear the stored name
function clearName() {
    sessionStorage.removeItem('userName');
    displayGreeting();
}

