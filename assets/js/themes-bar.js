/*Closes the theme bar if it is open*/
function closeBar() {
    var themeBar = document.getElementById("themes-bar")

    themeBar.classList.remove("on-screen")
}

/*Toggles the theme bar*/
function toggleBar() {
    var themeBar = document.getElementById("themes-bar")
    var container = document.getElementById("container")

    container.addEventListener("click", closeBar)

    themeBar.classList.toggle("on-screen")
}