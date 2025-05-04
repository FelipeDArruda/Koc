document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const settingsToggle = document.getElementById('settings-toggle');
    const settingsMenu = document.getElementById('settings-menu');
    const menuButton = document.querySelector('.menu-button');
    const dropdownMenu = document.querySelector('.settings-menu');
    const chapterText = document.getElementById('chapter-text');
    
    // Conteúdo do capítulo
    const chapterContent = `
        <p>In the vast continent of Azure, where magic and martial arts coexisted, there was a small town called Maple Town.</p>
        <p>In this town, there was a young man named Ethan, who was known as the "useless" son of the town's blacksmith.</p>
        <p>Ethan had a secret - he possessed a unique ability called "Refinement". This ability allowed him to refine anything, be it weapons, potions, or even his own body.</p>
        <p>On this particular day, Ethan was in his father's smithy, staring at a rusty old sword that a customer had brought in for repairs.</p>
        <p>"Let's see what this refinement ability can do," Ethan muttered as he placed his hands on the sword.</p>
        <p>A soft golden glow emanated from his palms, enveloping the sword. The rust began to disappear, and the blade started shining as if it were brand new.</p>
        <p>But Ethan didn't stop there. He focused harder, pouring more of his energy into the sword. The blade began to glow with a faint blue hue - a sign that it had been enhanced beyond its original quality.</p>
        <p>"Interesting," Ethan said, examining the now-sharp blade that could easily cut through iron. "This ability is more powerful than I thought."</p>
        <p>Little did he know that this simple act would set him on a path that would change his life forever...</p>
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