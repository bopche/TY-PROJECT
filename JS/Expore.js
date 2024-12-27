let currentSlide = 0;
let slides = document.querySelectorAll('.slider-item');
let totalSlides = slides.length;
let slider = document.querySelector('.slider');

// Function to change slide
function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  updateSliderPosition();
}

// Function to update the slider position
function updateSliderPosition() {
  const offset = -currentSlide * 100; // Moves the slider by 100% per slide
  slider.style.transform = `translateX(${offset}%)`;
}

// Auto slide functionality
function autoSlide() {
  changeSlide(1); // Automatically move to the next slide
}

// Set interval for auto sliding (every 4 seconds)
setInterval(autoSlide, 4000);

// Show captions on slide change
slides.forEach((slide, index) => {
  const caption = slide.querySelector('.caption');
  caption.style.opacity = (index === currentSlide) ? 1 : 0;
});

// Update captions visibility after a slide change
slider.addEventListener('transitionend', () => {
  slides.forEach((slide, index) => {
    const caption = slide.querySelector('.caption');
    caption.style.opacity = (index === currentSlide) ? 1 : 0;
  });
});
