function showRank(rank) {
  // Esconde todos os conteúdos
  document.querySelectorAll('.rank-content').forEach(content => {
    content.style.display = 'none';
  });
  
  // Remove a classe 'active' de todos os botões
  document.querySelectorAll('.tab-button').forEach(button => {
    button.classList.remove('active');
  });
  
  // Mostra o conteúdo selecionado e ativa o botão
  document.getElementById(rank).style.display = 'block';
  event.currentTarget.classList.add('active');
}
