document.addEventListener('DOMContentLoaded', function() {
  // Elementos da UI
  const settingsToggle = document.getElementById('settings-toggle');
  const settingsPanel = document.getElementById('settings-panel');
  const decreaseFontBtn = document.getElementById('decrease-font');
  const increaseFontBtn = document.getElementById('increase-font');
  const fontDisplay = document.getElementById('font-size-display');
  const chapterText = document.getElementById('chapter-text');
  const themeOptions = document.querySelectorAll('.theme-option');
  const body = document.body;

  // Estado inicial (tema escuro como padrão)
  let fontSize = 16;
  let currentTheme = 'dark';
  
  // Inicializar tema selecionado
  document.querySelector(`.theme-option[data-theme="${currentTheme}"]`).classList.add('selected');

  // Mostrar/ocultar painel de configurações
  settingsToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      settingsPanel.style.display = settingsPanel.style.display === 'block' ? 'none' : 'block';
  });

  // Fechar painel ao clicar fora
  document.addEventListener('click', function() {
      settingsPanel.style.display = 'none';
  });

  // Impedir que o clique no painel feche ele
  settingsPanel.addEventListener('click', function(e) {
      e.stopPropagation();
  });

  // Controles de tamanho de fonte
  decreaseFontBtn.addEventListener('click', function() {
      if (fontSize > 12) {
          fontSize--;
          updateFontSize();
          saveSettings();
      }
  });

  increaseFontBtn.addEventListener('click', function() {
      if (fontSize < 24) {
          fontSize++;
          updateFontSize();
          saveSettings();
      }
  });

  function updateFontSize() {
      chapterText.style.fontSize = fontSize + 'px';
      fontDisplay.textContent = fontSize;
  }

  // Seletor de tema
  themeOptions.forEach(option => {
      option.addEventListener('click', function() {
          // Remove a classe selected de todos os temas
          themeOptions.forEach(opt => opt.classList.remove('selected'));
          
          // Adiciona a classe selected ao tema clicado
          this.classList.add('selected');
          
          // Obtém o tema selecionado
          currentTheme = this.getAttribute('data-theme');
          
          // Atualiza o tema
          updateTheme();
          saveSettings();
      });
  });

  function updateTheme() {
      // Remove todas as classes de tema
      body.classList.remove('theme-light', 'theme-sepia', 'theme-dark');
      
      // Adiciona a classe do tema selecionado
      body.classList.add('theme-' + currentTheme);
  }

  // Salvar configurações no localStorage
  function saveSettings() {
      localStorage.setItem('readerSettings', JSON.stringify({
          fontSize: fontSize,
          theme: currentTheme
      }));
  }

  // Carregar configurações salvas
  function loadSettings() {
      const savedSettings = localStorage.getItem('readerSettings');
      if (savedSettings) {
          const settings = JSON.parse(savedSettings);
          fontSize = settings.fontSize || 16;
          currentTheme = settings.theme || 'dark';
          
          // Aplicar configurações carregadas
          updateFontSize();
          updateTheme();
          
          // Atualizar tema selecionado
          themeOptions.forEach(opt => opt.classList.remove('selected'));
          document.querySelector(`.theme-option[data-theme="${currentTheme}"]`).classList.add('selected');
      }
  }

  // Inicializar carregando as configurações
  loadSettings();
});