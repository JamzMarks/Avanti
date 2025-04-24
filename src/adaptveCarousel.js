
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.product-card');
const next = document.querySelector('.carousel-next');
const prev = document.querySelector('.carousel-prev');
const dotsContainer = document.querySelector('.carousel-dots');

let cardMinWidth = 175;
let cardsToShow = 1;
let totalPages = 1;
let index = 0;

function adaptCarouselCards() {
    if (!track || cards.length === 0) return;
  
    const carouselWidth = track.offsetWidth;
    cardsToShow = Math.floor(carouselWidth / cardMinWidth);
  
    if (cardsToShow < 1) cardsToShow = 1;
    else if (cardsToShow > 5) cardsToShow = 5;
  
    const cardWidth = Math.floor(carouselWidth / cardsToShow) - 16;
  
    cards.forEach((card) => {
      card.style.display = 'block';
      card.style.flex = `0 0 ${cardWidth}px`;
    });
  
    totalPages = Math.ceil(cards.length / cardsToShow); 
    updateDots();
  }

function updateDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
        const btn = document.createElement('button');
        if (i === index) btn.classList.add('active');
        btn.setAttribute('type', 'button');
        btn.addEventListener('click', (e) => {
        index = i;
        scrollToDotPage(i) 
        });
        dotsContainer.appendChild(btn);
    }
}

let currentScroll = 0;
function scrollByOneCard(direction = 1) {
    const card = cards[0];
    const cardWidth = card.offsetWidth;
  
    const trackStyle = getComputedStyle(track);
    const gap = parseFloat(trackStyle.gap) || 0;
  
    const scrollAmount = cardWidth + gap;
  
    currentScroll += (scrollAmount * direction) + 1;

    const maxScroll = track.scrollWidth - track.clientWidth;
    if (currentScroll < 0) currentScroll = 0;
    if (currentScroll > maxScroll) currentScroll = maxScroll;
  
    track.scrollTo({
      left: currentScroll,
      behavior: 'smooth'
    });
  }
  function scrollToDotPage(pageIndex) {
    const card = cards[0];
    const cardWidth = card.offsetWidth;
  
    const trackStyle = getComputedStyle(track);
    const gap = parseFloat(trackStyle.gap) || 0;
  
    const scrollAmount = (cardWidth + gap) * cardsToShow * pageIndex;
  
    const maxScroll = track.scrollWidth - track.clientWidth;
    currentScroll = Math.min(scrollAmount, maxScroll);
    
    track.scrollTo({
      left: currentScroll,
      behavior: 'smooth'
    });
    const dots = dotsContainer.querySelectorAll('button');
        dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === pageIndex);
    });
  }
next.addEventListener('click', () => scrollByOneCard(1));
prev.addEventListener('click', () => scrollByOneCard(-1));
window.addEventListener('DOMContentLoaded', adaptCarouselCards);
window.addEventListener('resize', () => {
    adaptCarouselCards();
    // updateCarousel();
});
updateDots();