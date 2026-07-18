
let allTheFirstWannaBe = document.querySelectorAll("#wanna-first")
allTheFirstWannaBe[0].style.color = "orange"
allTheFirstWannaBe[0].style.fontSize = "50px"

allTheFirstWannaBe[1].style.color = "orange"
allTheFirstWannaBe[1].style.fontSize = "70px"

for (let i = 1; i <= 500; i++) {
let firstH1 = document.createElement("h1")
firstH1.innerHTML =  i + " Hello World!"
firstH1.style.color = "red"
document.body.appendChild(firstH1)
}