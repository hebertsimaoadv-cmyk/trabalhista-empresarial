const solutions = {
  'justa-causa': {
    label: 'Justa causa', title: 'Antes de aplicar a justa causa, organize a decisão.',
    lead: 'Verificamos provas, procedimento e riscos antes do desligamento.',
    summaryTitle: 'Análise de justa causa',
    summaryText: 'Manual de apuração, checklist, análise dos documentos e comunicado adequado ao caso.',
    items: [['Manual prático', 'Requisitos, provas e etapas da apuração.'], ['Análise do caso', 'Conduta, histórico e documentos avaliados.'], ['Documento final', 'Relatório e comunicado preparados para a decisão.']],
    message: 'Olá, Dr. Hebert. Vim pelo site e preciso analisar uma possível justa causa na minha empresa.'
  },
  advertencia: {
    label: 'Advertência ou suspensão', title: 'Aplique a medida certa e deixe tudo documentado.',
    lead: 'Avaliamos o ocorrido e preparamos a providência disciplinar adequada.',
    summaryTitle: 'Medida disciplinar orientada',
    summaryText: 'Manual breve, análise da ocorrência e advertência ou suspensão pronta para aplicação.',
    items: [['Manual breve', 'Quando orientar, advertir ou suspender.'], ['Definição da medida', 'Gravidade, histórico e proporcionalidade avaliados.'], ['Documento pronto', 'Advertência ou suspensão adaptada ao ocorrido.']],
    message: 'Olá, Dr. Hebert. Vim pelo site e preciso preparar uma advertência ou suspensão para um empregado.'
  },
  estabilidade: {
    label: 'Demissão com estabilidade', title: 'Confirme os riscos antes de desligar.',
    lead: 'Verificamos a possível estabilidade e orientamos o caminho juridicamente adequado.',
    summaryTitle: 'Verificação antes da demissão',
    summaryText: 'Guia das estabilidades, análise dos documentos e orientação para a decisão da empresa.',
    items: [['Guia prático', 'Principais estabilidades e pontos de atenção.'], ['Verificação do caso', 'Motivo, período e documentos analisados.'], ['Caminho indicado', 'Orientação escrita sobre as opções da empresa.']],
    message: 'Olá, Dr. Hebert. Vim pelo site e preciso verificar uma possível estabilidade antes de demitir um empregado.'
  }
};
const type = new URLSearchParams(window.location.search).get('tipo');
const solution = solutions[type] || solutions['justa-causa'];
document.querySelector('#solutionLabel').textContent = solution.label;
document.querySelector('#solutionTitle').textContent = solution.title;
document.querySelector('#solutionLead').textContent = solution.lead;
document.querySelector('#summaryTitle').textContent = solution.summaryTitle;
document.querySelector('#summaryText').textContent = solution.summaryText;
document.title = `${solution.label} para empresas | Hebert Simão`;
document.querySelector('#solutionItems').innerHTML = solution.items.map(([title, text], index) => `<article class="solution-item"><span>0${index + 1}</span><div><h3>${title}</h3><p>${text}</p></div></article>`).join('');
document.querySelector('#whatsappSolution').href = `https://wa.me/5568999528903?text=${encodeURIComponent(solution.message)}`;
