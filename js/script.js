let menuButton = document.querySelector("#menu_bar");
let crossIcon = document.querySelector("#cross_icon");
let sideBar = document.querySelector("#side_bar");
let body = document.querySelector("body");

menuButton.addEventListener("click", () => {
    sideBar.style.display = "block";
    body.style.backgroundImage = "line"
})

crossIcon.addEventListener("click", () => {
    sideBar.style.display = "none";
})