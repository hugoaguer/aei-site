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
// SCROLL DES GALERIES
// ==========================================

document.querySelectorAll('.horizontal-gallery').forEach(gallery => {

  const scrollArea =
    gallery.querySelector('.gallery-scroll');

  const leftButton =
    gallery.querySelector('.scroll-left');

  const rightButton =
    gallery.querySelector('.scroll-right');


  if (!scrollArea || !leftButton || !rightButton) {
    return;
  }


  function getScrollAmount() {

    const photo =
      scrollArea.querySelector('.gallery-photo');

    if (!photo) {
      return 250;
    }

    const styles =
      window.getComputedStyle(scrollArea);

    const gap =
      parseFloat(styles.columnGap || styles.gap) || 14;

    return photo.getBoundingClientRect().width + gap;

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
// AGRANDISSEMENT PHOTOS
// ==========================================

const imageModal =
  document.getElementById('imageModal');

const imageModalContent =
  document.getElementById('imageModalContent');

const imageModalClose =
  document.getElementById('imageModalClose');


document
  .querySelectorAll('.gallery-photo img')
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


function closeImageModal() {

  if (!imageModal) {
    return;
  }

  imageModal.classList.remove('active');

  if (imageModalContent) {
    imageModalContent.src = '';
  }

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