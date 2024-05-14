/*
Author: Brandon Anup
File Name: styles.css
*/


/* This script.js file is just for the carousel on the home page */

let index = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    index++;
    if (index > slides.length) {index = 1}
    slides[index - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds. 
}

function plusSlides(n) {
    showSlides(index += n);
}