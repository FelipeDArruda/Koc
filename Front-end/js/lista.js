   // Filtro de capítulos
   document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove a classe active de todos os botões
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        // Adiciona a classe active apenas ao botão clicado
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        const chapters = document.querySelectorAll('.chapter-item');
        
        chapters.forEach(chapter => {
            if (filter === 'all') {
                chapter.style.display = 'flex';
            } else {
                const type = chapter.getAttribute('data-type');
                if (type === filter) {
                    chapter.style.display = 'flex';
                } else {
                    chapter.style.display = 'none';
                }
            }
        });
    });
});

// Paginação
document.querySelectorAll('.page-btn:not(.disabled)').forEach(btn => {
    btn.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            document.querySelector('.page-btn.active').classList.remove('active');
            this.classList.add('active');
            // Aqui você pode adicionar lógica para carregar a página correspondente
        }
    });
});