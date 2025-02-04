let imgs = [
    "assets/img/Lady.png",
    "assets/img/umbrella_street.jpg",
    "assets/img/lowpoly_street.png",
    "assets/img/Firewatch-Tower.png"
];

function setInitialImage() {
    if (localStorage.getItem("imageNumber") == null) {
        localStorage.setItem("imageNumber", 0)
    }
    var imgElement = document.getElementById('toggleImage');
    imgElement.src = imgs[localStorage.getItem("imageNumber")]
    document.querySelector("html").setAttribute("data-theme", localStorage.getItem("imageNumber"))
}

function toggleImage() {
    var imgElement = document.getElementById('toggleImage');

    var i = localStorage.getItem("imageNumber")

    if (i == (imgs.length-1)) {
        imgElement.classList.toggle('hidden')
        setTimeout(function() {
            imgElement.src =  imgs[0];
            i = 0;
            localStorage.setItem("imageNumber", i)
            document.querySelector("html").setAttribute("data-theme", i)
            imgElement.classList.toggle('hidden');
        }, 500);
    } else {
        imgElement.classList.toggle('hidden')
        setTimeout(function() {
            i++;
            console.log(i);
            localStorage.setItem("imageNumber", i)
            imgElement.src = imgs[i]
            document.querySelector("html").setAttribute("data-theme", i)
            imgElement.classList.toggle('hidden');
        }, 500);
    }

 }