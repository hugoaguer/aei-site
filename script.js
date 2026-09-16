// MENU MOBILE

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

if (menuBtn && menu) {

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  document.querySelectorAll('.menu a').forEach(link => {

    link.addEventListener('click', () => {
      menu.classList.remove('open');
    });

  });

}


// ANNEE FOOTER

const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}


// ==========================================
// CARROUSELS - UNE PHOTO A LA FOIS
// ==========================================

document.querySelectorAll('[data-carousel]').forEach(carousel => {

  const track =
    carousel.querySelector('.carousel-track');

  const slides =
    carousel.querySelectorAll('.carousel-slide');

  const previousButton =
    carousel.querySelector('.carousel-prev');

  const nextButton =
    carousel.querySelector('.carousel-next');

  const counter =
    carousel.parentElement.querySelector('.carousel-counter');

  let currentIndex = 0;


  function updateCarousel() {

    track.style.transform =
      `translateX(-${currentIndex * 100}%)`;

    if (counter) {
      counter.textContent =
        `${currentIndex + 1} / ${slides.length}`;
    }

  }


  nextButton.addEventListener('click', () => {

    currentIndex++;

    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }

    updateCarousel();

  });


  previousButton.addEventListener('click', () => {

    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }

    updateCarousel();

  });


  // SWIPE TELEPHONE

  let startX = 0;

  track.addEventListener(
    'touchstart',
    event => {

      startX =
        event.touches[0].clientX;

    },
    {
      passive: true
    }
  );


  track.addEventListener(
    'touchend',
    event => {

      const endX =
        event.changedTouches[0].clientX;

      const difference =
        startX - endX;


      if (difference > 50) {

        currentIndex++;

        if (currentIndex >= slides.length) {
          currentIndex = 0;
        }

        updateCarousel();

      }


      if (difference < -50) {

        currentIndex--;

        if (currentIndex < 0) {
          currentIndex = slides.length - 1;
        }

        updateCarousel();

      }

    },
    {
      passive: true
    }
  );


  updateCarousel();

});


// ==========================================
// PHOTO EN GRAND
// ==========================================

const imageModal =
  document.getElementById('imageModal');

const imageModalContent =
  document.getElementById('imageModalContent');

const imageModalClose =
  document.getElementById('imageModalClose');


document
  .querySelectorAll('.carousel-slide img')
  .forEach(image => {

    image.addEventListener('click', () => {

      if (!imageModal || !imageModalContent) {
        return;
      }

      imageModalContent.src = image.src;
      imageModalContent.alt = image.alt;

      imageModal.classList.add('active');

      document.body.style.overflow = 'hidden';

    });

  });


function closeModal() {

  if (!imageModal) {
    return;
  }

  imageModal.classList.remove('active');

  document.body.style.overflow = '';

}


if (imageModalClose) {

  imageModalClose.addEventListener(
    'click',
    closeModal
  );

}


if (imageModal) {

  imageModal.addEventListener('click', event => {

    if (event.target === imageModal) {
      closeModal();
    }

  });

}


document.addEventListener('keydown', event => {

  if (event.key === 'Escape') {
    closeModal();
  }

});