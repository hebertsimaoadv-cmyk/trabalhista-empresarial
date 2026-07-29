const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-profile]').forEach((link) => {
  link.addEventListener('click', () => {
    const profile = link.getAttribute('data-profile');
    const select = document.querySelector('#perfil');
    if (select && profile) select.value = profile;
  });
});

const WHATSAPP_NUMBER = '5568999528903';
const form = document.querySelector('#contactForm');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const message = [
    'Olá, Dr. Hebert. Vim pelo site de advocacia trabalhista empresarial.',
    '',
    `Nome: ${data.get('nome')}`,
    `Perfil: ${data.get('perfil')}`,
    `Empresa: ${data.get('empresa') || 'Não informada'}`,
    '',
    `Situação: ${data.get('mensagem')}`
  ].join('\n');

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
});

document.querySelector('#currentYear').textContent = new Date().getFullYear();