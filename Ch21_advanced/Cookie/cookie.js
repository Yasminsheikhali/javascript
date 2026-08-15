// Save a cookie
function saveCookie() {

    let name = document.getElementById("nameInput").value;

    document.cookie = "username=" + name + "; max-age=3600; path=/";

    document.getElementById("message").textContent =
        "Cookie saved!";
}


// Get the cookie
function getCookie() {

    let cookies = document.cookie.split("; ");

    for (let cookie of cookies) {

        let [key, value] = cookie.split("=");

        if (key === "username") {

            document.getElementById("message").textContent =
                "Welcome back, " + value + "!";

            return;
        }
    }

    document.getElementById("message").textContent =
        "No username cookie found.";
}


// Delete the cookie
function deleteCookie() {

    document.cookie =
        "username=; max-age=0; path=/";

    document.getElementById("message").textContent =
        "Cookie deleted.";
}