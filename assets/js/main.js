// ===============================
// ANIMAÇÃO AO ROLAR (SECTIONS)
// ===============================
const sections = document.querySelectorAll("section");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  sections.forEach((section) => observer.observe(section));
} else {
  sections.forEach((section) => section.classList.add("visible"));
}

// ===============================
// FAQ (ABRIR / FECHAR)
// ===============================
document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// ===============================
// MENU MOBILE (SIDEBAR)
// ===============================
const sidebar = document.querySelector(".sidebar");
const menuToggle = document.querySelector(".mobile-menu-toggle");

if (sidebar && menuToggle) {
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  sidebar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("open");
    });
  });
}

// ===============================
// CARROSSEL DE IMAGENS (MEDIA)
// ===============================
const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".carousel-track .media-card");
const btnPrev = document.querySelector(".carousel-btn.prev");
const btnNext = document.querySelector(".carousel-btn.next");

let currentIndex = 0;

function updateCarousel() {
  if (!track || cards.length === 0) return;

  const cardWidth = cards[0].offsetWidth + 20; // 20 = gap do CSS
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

if (track && cards.length > 0 && btnPrev && btnNext) {
  btnNext.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  btnPrev.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener("resize", updateCarousel);

  // Inicializa ao carregar
  updateCarousel();
}
