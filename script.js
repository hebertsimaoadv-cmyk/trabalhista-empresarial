const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const subjectSelect = document.querySelector('#assunto');

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

document.querySelectorAll('[data-service]').forEach((link) => {
  link.addEventListener('click', () => {
    const service = link.getAttribute('data-service');
    if (!subjectSelect || !service) return;
    const optionExists = [...subjectSelect.options].some((option) => option.value === service);
    subjectSelect.value = optionExists ? service : 'Análise de uma decisão trabalhista';
  });
});

const serviceFromUrl = new URLSearchParams(window.location.search).get('servico');
const serviceMap = {
  'justa-causa': 'Justa causa',
  'advertencia': 'Advertência ou suspensão',
  'estabilidade': 'Demissão de empregado com estabilidade',
  'regimento-interno': 'Elaboração de regimento interno',
  'consultoria': 'Consultoria trabalhista empresarial'
};
if (subjectSelect && serviceMap[serviceFromUrl]) subjectSelect.value = serviceMap[serviceFromUrl];

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
    `Assunto: ${data.get('assunto')}`,
    '',
    `Situação: ${data.get('mensagem')}`
  ].join('\n');

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});

document.querySelector('#currentYear').textContent = new Date().getFullYear();
