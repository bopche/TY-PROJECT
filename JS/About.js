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
