// Placeholder for future interactivity
console.log("Welcome to Odyssey's About Us page!");
// script.js
const carouselTrack = document.querySelector('.carousel-track');

// Duplicate the cards dynamically for infinite scrolling
const teamCards = Array.from(carouselTrack.children);
teamCards.forEach(card => {
  const clone = card.cloneNode(true);
  carouselTrack.appendChild(clone);
});
document.addEventListener("DOMContentLoaded", function() {
  const aboutSection = document.querySelector(".about");

  window.addEventListener("scroll", function() {
      let position = aboutSection.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.3;

      if (position < screenPosition) {
          aboutSection.style.opacity = "1";
          aboutSection.style.transform = "translateY(0)";
      }
  });
});
