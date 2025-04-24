document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const indicators = document.getElementById("thumbInd");

  slides.forEach((_, i) => {
    let span = document.createElement("span");
    span.classList.add("dot");
    span.dataset.index = i;
    span.addEventListener("click", () => showSlide(i));
    indicators.appendChild(span);
  });

  const dots = document.querySelectorAll(".dot");
  dots[0].classList.toggle("active");

  let currentIndex = 0;
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    currentIndex = index;
  }
  function nextSlide() {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  setInterval(nextSlide, 5000);
});
