document.addEventListener("DOMContentLoaded", function () {
    const imagePaths = [
        "img/1.jpg",
        "img/2.jpg",
        "img/3.jpg",
        "img/4.jpg",
        "img/5.jpg",
        "img/6.jpg",
        "img/7.jpg",
        "img/8.jpg",
        "img/9.jpg",
        "img/10.jpg",
    ];

    const randomIndex = Math.floor(Math.random() * imagePaths.length);

    const dynamicImage = document.getElementById("dynamic-image");
    dynamicImage.src = imagePaths[randomIndex];
});
