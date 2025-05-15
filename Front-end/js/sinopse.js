document.addEventListener('DOMContentLoaded', function() {
  const sinopseText = document.getElementById('sinopse-text');
  const lerMaisBtn = document.getElementById('ler-mais-btn');
  let isExpanded = false;

  // Texto original (completo)
  const fullText = sinopseText.textContent;

  // Função para cortar o texto (se necessário)
  function cortarTexto(texto, limite = 100) {
    return texto.length > limite ? texto.substring(0, limite) + '...' : texto;
  }

  // Inicia com texto cortado
  sinopseText.textContent = cortarTexto(fullText);

  lerMaisBtn.addEventListener('click', function() {
    if (isExpanded) {
      sinopseText.textContent = cortarTexto(fullText);
      lerMaisBtn.textContent = 'Ler mais';
      sinopseText.classList.add('sinopse-cortada');
      sinopseText.classList.remove('sinopse-completa');
    } else {
      sinopseText.textContent = fullText;
      lerMaisBtn.textContent = 'Ler menos';
      sinopseText.classList.remove('sinopse-cortada');
      sinopseText.classList.add('sinopse-completa');
    }
    isExpanded = !isExpanded;
  });
});