// ==========================
// MENU MOBILE
// ==========================

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
  });
});


// ==========================
// ANNEE FOOTER
// ==========================

document.getElementById('year').textContent = new Date().getFullYear();


// ==========================
// CARROUSELS REALISATIONS
// ==========================

document.querySelectorAll('[data-carousel]').forEach(carousel => {

  const track = carousel.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('.carousel-slide');

  const prevButton = carousel.querySelector('.carousel-prev');
  const nextButton = carousel.querySelector('.carousel-next');

  const counter = carousel.nextElementSibling;

  let currentSlide = 0;


  function updateCarousel() {

    track.style.transform =
      `translateX(-${currentSlide * 100}%)`;

    if (
      counter &&
      counter.classList.contains('carousel-counter')
    ) {
      counter.textContent =
        `${currentSlide + 1} / ${slides.length}`;
    }
  }


  nextButton.addEventListener('click', () => {

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    updateCarousel();
  });


  prevButton.addEventListener('click', () => {

    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    updateCarousel();
  });


  updateCarousel();
});


// ==========================
// AGRANDISSEMENT PHOTOS
// ==========================

const imageModal = document.getElementById('imageModal');
const imageModalContent = document.getElementById('imageModalContent');
const imageModalClose = document.getElementById('imageModalClose');


document.querySelectorAll('.carousel-slide img').forEach(image => {

  image.addEventListener('click', () => {

    imageModalContent.src = image.src;
    imageModalContent.alt = image.alt;

    imageModal.classList.add('active');

    document.body.style.overflow = 'hidden';
  });
});


function closeImageModal() {

  imageModal.classList.remove('active');

  imageModalContent.src = '';

  document.body.style.overflow = '';
}


imageModalClose.addEventListener('click', closeImageModal);


imageModal.addEventListener('click', event => {

  if (event.target === imageModal) {
    closeImageModal();
  }
});


document.addEventListener('keydown', event => {

  if (event.key === 'Escape') {
    closeImageModal();
  }
});