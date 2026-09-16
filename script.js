// ==========================================
// MENU MOBILE
// ==========================================

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


// ==========================================
// ANNEE FOOTER
// ==========================================

const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}


// ==========================================
// GALERIES HORIZONTALES
// ==========================================

document.querySelectorAll('.horizontal-gallery').forEach(gallery => {

  const scrollArea = gallery.querySelector('.gallery-scroll');

  const leftButton = gallery.querySelector('.scroll-left');

  const rightButton = gallery.querySelector('.scroll-right');


  function getScrollAmount() {

    const photo = scrollArea.querySelector('.gallery-photo');

    if (!photo) {
      return 300;
    }

    const gap = parseFloat(
      window.getComputedStyle(scrollArea).gap
    ) || 0;

    return photo.offsetWidth + gap;

  }


  rightButton.addEventListener('click', () => {

    scrollArea.scrollBy({
      left: getScrollAmount(),
      behavior: 'smooth'
    });

  });


  leftButton.addEventListener('click', () => {

    scrollArea.scrollBy({
      left: -getScrollAmount(),
      behavior: 'smooth'
    });

  });

});


// ==========================================
// AGRANDISSEMENT DES PHOTOS
// ==========================================

const imageModal =
  document.getElementById('imageModal');

const imageModalContent =
  document.getElementById('imageModalContent');

const imageModalClose =
  document.getElementById('imageModalClose');


document.querySelectorAll('.gallery-photo img').forEach(image => {

  image.addEventListener('click', () => {

    imageModalContent.src = image.src;

    imageModalContent.alt = image.alt;

    imageModal.classList.add('active');

    document.body.style.overflow = 'hidden';

  });

});


function closeImageModal() {

  if (!imageModal) {
    return;
  }

  imageModal.classList.remove('active');

  imageModalContent.src = '';

  document.body.style.overflow = '';

}


if (imageModalClose) {

  imageModalClose.addEventListener(
    'click',
    closeImageModal
  );

}


if (imageModal) {

  imageModal.addEventListener('click', event => {

    if (event.target === imageModal) {
      closeImageModal();
    }

  });

}


document.addEventListener('keydown', event => {

  if (event.key === 'Escape') {
    closeImageModal();
  }

});