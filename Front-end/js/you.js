// Função para extrair o ID do vídeo do YouTube
function getYouTubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

// Configuração dos cards com seus vídeos específicos
function setupYouTubeCards() {
  const videos = [
      {
          url: "https://youtu.be/2vQagScADWg?si=JxsCwb5ClfrLhreq", // Primeiro capítulo
          hoverText: "Capitulo 01",
          title: "Capitulo 01",
          subtitle: "Comece agora a aventura de Fernando"
      },
      {
          url: "https://youtu.be/tV_pPVXliD8?si=6LAbnbeAwQ0jXzpM", // Trailer
          hoverText: "",
          title: "",
          subtitle: ""
      }
  ];

  document.querySelectorAll('.you-card').forEach((card, index) => {
      if (videos[index]) {
          const videoId = getYouTubeId(videos[index].url);
          
          // Configura a thumbnail (max resolution)
          const img = card.querySelector('.you-card-image');
          img.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
          img.onerror = function() {
              // Se maxresdefault não existir, usa hqdefault
              this.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          };
          
          // Configura o link para assistir o vídeo
          const link = card.querySelector('.you-play-button');
          link.href = `https://www.youtube.com/watch?v=${videoId}`;
          link.target = "_blank";
          
          // Atualiza os textos conforme definido
          if (videos[index].hoverText) {
              card.querySelector('.you-hover-text').textContent = videos[index].hoverText;
          }
          if (videos[index].title) {
              card.querySelector('.you-card-title').textContent = videos[index].title;
          }
          if (videos[index].subtitle) {
              card.querySelector('.you-card-subtitle').textContent = videos[index].subtitle;
          }
      }
  });
}

// Inicializa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', setupYouTubeCards);