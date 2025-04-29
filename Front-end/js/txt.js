document.addEventListener('DOMContentLoaded', function() {
  const text = "A melhor {Web novel} do brasil!";
  const typewriterElement = document.getElementById('typewriter');
  const cursorElement = document.querySelector('.cursor');
  
  let i = 0;
  const typingSpeed = 100;
  let isHighlighting = false;
  
  function typeWriter() {
    if (i < text.length) {
      // Verifica se vamos começar a destacar
      if (text.charAt(i) === '{') {
        typewriterElement.innerHTML += '<span class="web-novel">';
        isHighlighting = true;
        i++;
      } 
      // Verifica se vamos parar de destacar
      else if (text.charAt(i) === '}') {
        typewriterElement.innerHTML += '</span>';
        isHighlighting = false;
        i++;
      } 
      // Adiciona caracteres normais
      else {
        if (isHighlighting) {
          typewriterElement.innerHTML += text.charAt(i);
        } else {
          typewriterElement.textContent += text.charAt(i);
        }
        i++;
      }
      
      setTimeout(typeWriter, typingSpeed);
    } else {
      // Animação concluída - remove o cursor
      cursorElement.style.display = 'none';
    }
  }
  
  // Inicia a animação
  setTimeout(typeWriter, 500);
});