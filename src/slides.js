
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.product-card');
  const next = document.querySelector('.carousel-next');
  const prev = document.querySelector('.carousel-prev');
  const dotsContainer = document.querySelector('.carousel-dots');

  let index = 0;
  const cardsPerPage = window.innerWidth >= 1024 ? 5 : window.innerWidth >= 768 ? 3 : 2;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  function updateDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
      const btn = document.createElement('button');
      if (i === index) btn.classList.add('active');
      btn.addEventListener('click', () => {
        index = i;
        updateCarousel();
      });
      dotsContainer.appendChild(btn);
    }
  }

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 16; // 16px é o gap
    track.style.transform = `translateX(-${index * cardWidth * cardsPerPage}px)`;
    updateDots();
  }

  next.addEventListener('click', () => {
    if (index < totalPages - 1) {
      index++;
      updateCarousel();
    }
  });

  prev.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', () => location.reload()); // recarrega para ajustar o layout
  updateDots();
