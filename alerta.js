const id = new URLSearchParams(window.location.search).get('id');
const item = window.ALERTAS.find((alerta) => alerta.id === id);
const root = document.querySelector('#articleRoot');

if (!item) {
  root.innerHTML = `<section class="inner-hero"><div class="container narrow"><span class="eyebrow">Alerta trabalhista</span><h1>Conteúdo não encontrado</h1><p><a class="text-link" href="alertas.html">Voltar para todos os alertas →</a></p></div></section>`;
} else {
  document.title = `${item.titulo} | Hebert Simão`;
  document.querySelector('meta[name="description"]').setAttribute('content', item.resumo);
  root.innerHTML = `
    <article>
      <header class="inner-hero article-header"><div class="container narrow"><a class="back-link" href="alertas.html">← Todos os alertas</a><span class="alert-tag">${item.tag}</span><h1>${item.titulo}</h1><p>${item.resumo}</p></div></header>
      <div class="container article-layout">
        <div class="article-body">
          ${item.paragrafos.map((paragrafo) => `<p>${paragrafo}</p>`).join('')}
          <section class="care-box"><h2>O que a empresa deve observar</h2><ul>${item.cuidados.map((cuidado) => `<li>${cuidado}</li>`).join('')}</ul></section>
          <p class="case-note"><strong>Atenção:</strong> ${item.ressalva}</p>
          <p class="source-line">Fonte oficial: <a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.fonte} ↗</a></p>
        </div>
        <aside class="article-contact"><span class="eyebrow">Análise individual</span><h2>Sua empresa enfrenta uma situação semelhante?</h2><p>Cada decisão depende dos fatos, documentos e normas aplicáveis.</p><a class="btn btn-primary btn-full" href="index.html?servico=consultoria#contato">Entrar em contato</a></aside>
      </div>
    </article>`;
}
