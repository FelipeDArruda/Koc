document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const settingsToggle = document.getElementById('settings-toggle');
    const settingsMenu = document.getElementById('settings-menu');
    const fontDecrease = document.getElementById('font-decrease');
    const fontIncrease = document.getElementById('font-increase');
    const fontSizeDisplay = document.getElementById('font-size-display');
    const themeButtons = document.querySelectorAll('.theme-btn');
    const fontFamilyButtons = document.querySelectorAll('.font-family-btn');
    const lineHeightButtons = document.querySelectorAll('.line-height-btn');
    const layoutButtons = document.querySelectorAll('.layout-btn');
    const readingContainer = document.querySelector('.reading-container');
    
    // Tamanho da fonte
    let fontSize = 18;
    
    // Mostrar/ocultar menu de configurações
    settingsToggle.addEventListener('click', function() {
        settingsMenu.classList.toggle('show');
    });
    
    // Diminuir fonte
    fontDecrease.addEventListener('click', function() {
        if (fontSize > 12) {
            fontSize--;
            updateFontSize();
        }
    });
    
    // Aumentar fonte
    fontIncrease.addEventListener('click', function() {
        if (fontSize < 24) {
            fontSize++;
            updateFontSize();
        }
    });
    
    function updateFontSize() {
        document.documentElement.style.setProperty('--font-size', fontSize + 'px');
        fontSizeDisplay.textContent = fontSize;
        saveSettings();
    }
    
    // Trocar tema
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            themeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const theme = this.dataset.theme;
            if (theme === 'light') {
                document.body.classList.add('light-theme');
            } else {
                document.body.classList.remove('light-theme');
            }
            
            saveSettings();
        });
    });
    
    // Trocar família da fonte
    fontFamilyButtons.forEach(button => {
        button.addEventListener('click', function() {
            fontFamilyButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const fontFamily = this.dataset.font;
            document.documentElement.style.setProperty('--font-family', fontFamily);
            
            saveSettings();
        });
    });
    
    // Trocar altura da linha
    lineHeightButtons.forEach(button => {
        button.addEventListener('click', function() {
            lineHeightButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const lineHeight = this.dataset.lineHeight;
            document.documentElement.style.setProperty('--line-height', lineHeight + '%');
            
            saveSettings();
        });
    });
    
    // Trocar layout
    layoutButtons.forEach(button => {
        button.addEventListener('click', function() {
            layoutButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const layout = this.dataset.layout;
            readingContainer.classList.remove('full', 'normal', 'small');
            readingContainer.classList.add(layout);
            
            saveSettings();
        });
    });
    
    // Fechar menu quando clicar fora
    document.addEventListener('click', function(event) {
        if (!settingsToggle.contains(event.target) && !settingsMenu.contains(event.target)) {
            settingsMenu.classList.remove('show');
        }
    });
    
    // Salvar configurações no localStorage
    function saveSettings() {
        const settings = {
            fontSize: fontSize,
            theme: document.querySelector('.theme-btn.active').dataset.theme,
            fontFamily: document.querySelector('.font-family-btn.active').dataset.font,
            lineHeight: document.querySelector('.line-height-btn.active').dataset.lineHeight,
            layout: document.querySelector('.layout-btn.active').dataset.layout
        };
        
        localStorage.setItem('readerSettings', JSON.stringify(settings));
    }
    
    // Carregar configurações salvas
    function loadSettings() {
        const savedSettings = localStorage.getItem('readerSettings');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            
            // Aplicar configurações
            fontSize = settings.fontSize;
            updateFontSize();
            
            document.querySelector(`.theme-btn[data-theme="${settings.theme}"]`).click();
            document.querySelector(`.font-family-btn[data-font="${settings.fontFamily}"]`).click();
            document.querySelector(`.line-height-btn[data-line-height="${settings.lineHeight}"]`).click();
            document.querySelector(`.layout-btn[data-layout="${settings.layout}"]`).click();
        }
    }
    
    // Inicializar
    loadSettings();
});

function formatarTexto() {
    let conteudo = document.getElementById('texto-conteudo').innerText;
    
    // Adiciona <p> e <br>
    let formatado = conteudo
      .split(/\n\s*\n/)  // Divide em parágrafos (quebra dupla)
      .map(p => p.trim())
      .filter(p => p.length > 0)
      .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
      .join('\n');
    
    document.getElementById('texto-conteudo').innerHTML = formatado;
  }