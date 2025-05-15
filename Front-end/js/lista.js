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

const chaptersPerPage = 10;
let currentPage = 1;

// Exibir capítulos da página atual
function showPage(page) {
    const chapters = document.querySelectorAll('.chapter-item');
    const start = (page - 1) * chaptersPerPage;
    const end = start + chaptersPerPage;

    chapters.forEach((chapter, index) => {
        if (index >= start && index < end) {
            chapter.style.display = 'flex';
        } else {
            chapter.style.display = 'none';
        }
    });

    // Atualizar o botão ativo
    document.querySelectorAll('.page-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.page-btn[data-page="${page}"]`)?.classList.add('active');

    currentPage = page;
}

// Eventos dos botões de página
document.querySelectorAll('.page-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const page = btn.getAttribute('data-page');
        if (page) {
            showPage(parseInt(page));
        }
    });
});

// Botões anterior/próximo
document.querySelector('.page-btn.prev').addEventListener('click', () => {
    if (currentPage > 1) showPage(currentPage - 1);
});

document.querySelector('.page-btn.next').addEventListener('click', () => {
    const totalPages = Math.ceil(document.querySelectorAll('.chapter-item').length / chaptersPerPage);
    if (currentPage < totalPages) showPage(currentPage + 1);
});

// Inicialização
showPage(1);

