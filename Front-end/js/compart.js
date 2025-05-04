document.addEventListener('DOMContentLoaded', function() {
  const shareBtn = document.querySelector('.share-btn');
  const shareModal = document.querySelector('.share-modal');

  // Abrir modal
  shareBtn.addEventListener('click', function(e) {
      e.stopPropagation(); // Impede que o evento chegue ao document
      shareModal.classList.toggle('hidden');
  });

  // Fechar ao clicar fora
  document.addEventListener('click', function(e) {
      if (!shareModal.contains(e.target) && e.target !== shareBtn) {
          shareModal.classList.add('hidden');
      }
  });

  // Copiar link (exemplo de funcionalidade)
  document.getElementById('copy-link').addEventListener('click', function() {
      const dummyInput = document.createElement('input');
      document.body.appendChild(dummyInput);
      dummyInput.value = window.location.href;
      dummyInput.select();
      document.execCommand('copy');
      document.body.removeChild(dummyInput);
      alert('Link copiado!');
  });
});