document.addEventListener('DOMContentLoaded', function() {
  // Elementos do DOM
  const settingsToggle = document.getElementById('settings-toggle');
  const settingsMenu = document.getElementById('settings-menu');
  const menuButton = document.querySelector('.menu-button');
  const dropdownMenu = document.querySelector('.settings-menu');
  const chapterText = document.getElementById('chapter-text');
  
  // Conteúdo do capítulo
  const chapterContent = `
    
  `;
  
  chapterText.innerHTML = chapterContent;

  // Menu Dropdown
  if (menuButton && dropdownMenu) {
      menuButton.addEventListener('click', function(e) {
          e.stopPropagation();
          dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
      });

      // Fechar menu ao clicar fora
      document.addEventListener('click', function() {
          dropdownMenu.style.display = 'none';
      });

      // Prevenir que o clique no menu feche ele
      dropdownMenu.addEventListener('click', function(e) {
          e.stopPropagation();
      });

      // Configurações do Menu
      const menuOptions = {
          // Font Family
          'arial': function() {
              document.body.style.fontFamily = 'Arial, sans-serif';
              updateActiveOption('font-family', this);
          },
          
          // Font Size
          'font-18': function() {
              document.body.style.fontSize = '18px';
              updateActiveOption('font-size', this);
          },
          
          // Line Height
          'line-180': function() {
              document.body.style.lineHeight = '1.8';
              updateActiveOption('line-height', this);
          },
          
          // Full Frame
          'full': function() {
              document.querySelector('.reading-container').style.maxWidth = '100%';
              updateActiveOption('frame-size', this);
          },
          'normal': function() {
              document.querySelector('.reading-container').style.maxWidth = '800px';
              updateActiveOption('frame-size', this);
          },
          'small': function() {
              document.querySelector('.reading-container').style.maxWidth = '600px';
              updateActiveOption('frame-size', this);
          },
          
          // Line Breaks
          'no-breaks': function() {
              document.querySelectorAll('.chapter-content p').forEach(p => {
                  p.style.marginBottom = '0';
              });
              updateActiveOption('line-breaks', this);
          },
          'with-breaks': function() {
              document.querySelectorAll('.chapter-content p').forEach(p => {
                  p.style.marginBottom = '1.5em';
              });
              updateActiveOption('line-breaks', this);
          }
      };
      
      // Ativar opções do menu
      document.querySelectorAll('.menu-option').forEach(option => {
          option.addEventListener('click', function() {
              const action = this.dataset.action;
              if (action && menuOptions[action]) {
                  // Remove active class from siblings
                  const parent = this.closest('.menu-section');
                  parent.querySelectorAll('.menu-option').forEach(opt => {
                      opt.classList.remove('active');
                  });
                  
                  // Add active class to clicked option
                  this.classList.add('active');
                  
                  // Execute the action
                  menuOptions[action]();
              }
          });
      });
  }

  // Configurações do Botão de Engrenagem (se existir)
  if (settingsToggle && settingsMenu) {
      settingsToggle.addEventListener('click', function(e) {
          e.stopPropagation();
          settingsMenu.classList.toggle('show');
      });

      // Fechar menu ao clicar fora
      document.addEventListener('click', function() {
          settingsMenu.classList.remove('show');
      });

      // Prevenir que o clique no menu feche ele
      settingsMenu.addEventListener('click', function(e) {
          e.stopPropagation();
      });
  }
});