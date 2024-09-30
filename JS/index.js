let sidemeu = document.getElementById("sideMenu");
function openMenu() {
    sidemeu.style.top = "0";
}
function closeMenu() {
    sidemeu.style.top = "-400px";
}




let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? "block" : "none";
    });
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides();
}

// Automatically change the slide every 3 seconds
setInterval(nextSlide, 3000);

// Initialize the slider
showSlides();


