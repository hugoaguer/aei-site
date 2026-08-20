const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

function submitDemo(event) {
  event.preventDefault();
  const message = document.getElementById('form-message');
  message.textContent = "Formulaire de démonstration : ajoutez l'adresse e-mail A.E.I pour activer l'envoi.";
  return false;
}
