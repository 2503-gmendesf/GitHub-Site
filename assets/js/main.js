// ===============================
// CARROSSEL DE IMAGENS (MEDIA) + AUTOPLAY + SWIPE
// ===============================
const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".carousel-track .media-card");
const btnPrev = document.querySelector(".carousel-btn.prev");
const btnNext = document.querySelector(".carousel-btn.next");
const carouselWrapper = document.querySelector(".carousel-track-wrapper");

let currentIndex = 0;
let autoplayInterval = null;
const autoplayDelay = 3500; // 3.5s

// Variáveis do swipe
let startX = 0;
let endX = 0;
let isDragging = false;
const swipeThreshold = 50; // mínimo de pixels para considerar swipe

function updateCarousel() {
  if (!track || cards.length === 0) return;

  const cardWidth = cards[0].offsetWidth + 20; // 20 = gap do CSS
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function nextSlide() {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = cards.length - 1;
  }
  updateCarousel();
}

function startAutoplay() {
  stopAutoplay();
  autoplayInterval = setInterval(nextSlide, autoplayDelay);
}

function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
}

if (track && cards.length > 0 && btnPrev && btnNext) {
  // Botões
  btnNext.addEventListener("click", () => {
    nextSlide();
    startAutoplay();
  });

  btnPrev.addEventListener("click", () => {
    prevSlide();
    startAutoplay();
  });

  // Responsivo
  window.addEventListener("resize", updateCarousel);

  // Pausa autoplay com mouse (desktop)
  if (carouselWrapper) {
    carouselWrapper.addEventListener("mouseenter", stopAutoplay);
    carouselWrapper.addEventListener("mouseleave", startAutoplay);
  }

  // ===============================
  // SWIPE MOBILE (TOUCH)
  // ===============================
  if (carouselWrapper) {
    carouselWrapper.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      stopAutoplay();
    });

    carouselWrapper.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      endX = e.touches[0].clientX;
    });

    carouselWrapper.addEventListener("touchend", () => {
      if (!isDragging) return;
      isDragging = false;

      const diff = startX - endX;

      if (diff > swipeThreshold) {
        // Arrastou para esquerda -> próxima
        nextSlide();
      } else if (diff < -swipeThreshold) {
        // Arrastou para direita -> anterior
        prevSlide();
      }

      startAutoplay();
    });
  }

  // Inicializa
  updateCarousel();
  startAutoplay();
}
