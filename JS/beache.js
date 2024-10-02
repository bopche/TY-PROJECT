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


const stars = document.querySelectorAll(".star");

//loop throgh stars
stars.forEach((star, index) => {
  //adding event listener to star that runs function
  //when click event triggered
  star.addEventListener("click", () => {
    //again loop through stars
    stars.forEach((star, index2) => {
      //adding class active to clicked item and
      //other and items which have lower index
      //and removing class active from items which have
      //index higher
      index >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});


