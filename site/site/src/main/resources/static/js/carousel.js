document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.querySelector('.carrossel-slides');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.botao-anterior');
  const nextBtn = document.querySelector('.botao-proximo');
  let currentIndex = 0;
  const totalSlides = slides.length;

  // Atualiza a posição do slide
  const updateSlide = () => {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  // Próximo slide
  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  };

  // Slide anterior
  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
  };

  // Event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Teclado
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });

  // Inicialização
  updateSlide();
});