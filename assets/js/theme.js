/*Lists of the images for each theme*/
let cattpuccin = [
    'assets/img/aesthetic_deer.png',
    'assets/img/evening_sky.png',
    'assets/img/jellyfish.jpg',
    'assets/img/mountain_sunset.jpg',
]

let tokyo = [
    'assets/img/city.png',
    'assets/img/lowpoly_street.png',
    'assets/img/umbrella_street.jpg',
]

let greenify = [
    'assets/img/cafe.gif',
    'assets/img/castle.jpg',
    'assets/img/Lady.png',
    'assets/img/moments_before_desk.png',
    'assets/img/samurai_bebop.png',
]

let oxo = [
    'assets/img/ferris_wheel.jpg',
    'assets/img/japanese_neon.png',
    'assets/img/lakeside_sunset.png',
    'assets/img/shaded_landscape.jpg',
    'assets/img/skeleton.png',
]

let nord = [
    'assets/img/Firewatch-Tower.png',
    'assets/img/Underwater.png',
]

let paddy = [
    'assets/img/1000018144.jpg',
    'assets/img/1000081591-01.jpeg',
    'assets/img/1000106517-01.jpeg',
    'assets/img/PXL_20230408_064020227-01.jpeg',
    'assets/img/PXL_20230409_010323237-01.jpeg',
    'assets/img/PXL_20240214_090404859.jpg',
]

/*Updates the theme variable*/
function updateTheme() {
    var selectedTheme = localStorage.getItem("theme")

    if (selectedTheme == 'cattpuccin') {
        var theme = cattpuccin
    } else if (selectedTheme == 'tokyo') {
        var theme = tokyo
    } else if (selectedTheme == 'greenify') {
        var theme = greenify
    } else if (selectedTheme == 'oxo') {
        var theme = oxo
    } else if (selectedTheme == 'nord') {
        var theme = nord
    } else {
        var theme = paddy
    }
    return theme
}

/*Sets the image and theme on page load*/
function setInitialImage() {
    var theme = updateTheme()

    if (localStorage.getItem("imageNumber") == null) {
        localStorage.setItem("imageNumber", 0)
    }
    if (localStorage.getItem("theme") == null) {
        localStorage.setItem("theme", "catppuccin")
    }

    var imgElement = document.getElementById('toggleImage');

    imgElement.src = theme[localStorage.getItem("imageNumber")]

    document.querySelector("html").setAttribute("themeIndex", localStorage.getItem("imageNumber"))
    document.querySelector("html").setAttribute("theme", localStorage.getItem("theme"))
}

/*Changes the image when clicked*/
function changeImage() {
    var imgElement = document.getElementById('toggleImage');
    var i = localStorage.getItem("imageNumber")
    var theme = updateTheme()

    /*For final image in list*/
    if (i == (theme.length-1)) {
        imgElement.classList.toggle('hidden')
        setTimeout(function() {
            imgElement.src =  theme[0];
            i = 0;
            localStorage.setItem("imageNumber", i)
            document.querySelector("html").setAttribute("themeIndex", i)
            imgElement.classList.toggle('hidden');
        }, 500);

        /*For all other images*/
    } else {
        imgElement.classList.toggle('hidden')
        setTimeout(function() {
            i++;
            console.log(i);
            localStorage.setItem("imageNumber", i)
            imgElement.src = theme[i]
            document.querySelector("html").setAttribute("themeIndex", i)
            imgElement.classList.toggle('hidden');
        }, 500);
    }
 }

 /*Updates the image whn the theme is changed*/
 function updateImage() {
    var theme = updateTheme()
    var imgElement = document.getElementById("toggleImage")

    imgElement.src = theme[0]
 }

 /*Changes the theme*/
 async function setTheme(theme) {
    await localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("theme", theme);
    localStorage.setItem("imageNumber", 0);
    changeImage();
}