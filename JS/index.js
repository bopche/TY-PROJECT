let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

// Function to change the slide
function changeSlide() {
  // Hide all slides
  slides.forEach((slide, index) => {
    slide.style.opacity = 0;  // Hide all slides
    slide.style.visibility = 'hidden';  // Make slides invisible
  });
  
  // Show the current slide
  slides[currentIndex].style.opacity = 1;
  slides[currentIndex].style.visibility = 'visible';  // Make the current slide visible

  // Increment the index and wrap around if needed
  currentIndex = (currentIndex + 1) % slides.length;
}

// Set the transition effect for opacity
slides.forEach(slide => {
  slide.style.transition = 'opacity 1s ease-in-out';  // Smooth transition for opacity change
  slide.style.visibility = 'hidden';  // Make all slides initially hidden
});

// Set the interval to change the slide every 5 seconds
setInterval(changeSlide, 4000);  // Change slide every 5 seconds

// Initial call to show the first slide
changeSlide();
