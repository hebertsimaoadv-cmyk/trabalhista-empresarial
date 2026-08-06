const list = document.querySelector('#alertsList');
const buttons = document.querySelectorAll('[data-filter]');

function renderAlerts(filter = 'todos') {
  const items = filter === 'todos' ? window.ALERTAS : window.ALERTAS.filter((item) => item.categoria === filter);
  list.innerHTML = items.map((item) => `
    <article class="alert-card">
      <span class="alert-tag">${item.tag}</span>
      <h2>${item.titulo}</h2>
      <p>${item.resumo}</p>
      <a href="alerta.html?id=${item.id}">Ler o alerta completo →</a>
    </article>`).join('');
}

buttons.forEach((button) => button.addEventListener('click', () => {
  buttons.forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  renderAlerts(button.dataset.filter);
}));

renderAlerts();
