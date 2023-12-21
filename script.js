let currentSlide = 0;

  function showSlide(index) {
    const slides = document.getElementById("slides");
    const slideWidth = document.querySelector(".slide").offsetWidth;
    const newTransformValue = -index * slideWidth + "px";
    slides.style.transform = "translateX(" + newTransformValue + ")";
    currentSlide = index;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % 3;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + 3) % 3;
    showSlide(currentSlide);
  }


  setInterval(nextSlide, 3000); 


  showSlide(currentSlide);