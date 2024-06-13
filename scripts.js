let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slideshow = document.querySelector(".slideshow");

function showSlide(index) {
  const offset = index * -100;
  slideshow.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
  currentSlide = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
  showSlide(currentSlide);
}

// Initialize the slideshow
showSlide(currentSlide);

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    prevSlide();
  } else if (event.key === "ArrowRight") {
    nextSlide();
  }
});
