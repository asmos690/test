// file test.js
let k; export default k = 12;

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", ()=> {
    // animate links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });


// hamburger animation
hamburger.classList.toggle("toggle");
});

