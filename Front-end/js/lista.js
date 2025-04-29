  // JavaScript ajustado (sem bloqueio dos links "Ler")
  document.addEventListener('DOMContentLoaded', function() {
    const chaptersPerPage = 5;
    let currentPage = 1;
    const chapterItems = Array.from(document.querySelectorAll('.chapter-item'));
    let filteredChapterItems = [...chapterItems];
    let currentFilter = 'all';
    
    function calculateTotalPages() {
      return Math.ceil(filteredChapterItems.length / chaptersPerPage);
    }
    
    function showCurrentPageChapters() {
      const startIndex = (currentPage - 1) * chaptersPerPage;
      const endIndex = startIndex + chaptersPerPage;
      
      chapterItems.forEach(item => item.style.display = 'none');
      filteredChapterItems.slice(startIndex, endIndex).forEach(item => {
        item.style.display = 'grid';
      });
      
      updatePaginationControls();
    }
    
    function updatePaginationControls() {
      const totalPages = calculateTotalPages();
      const paginationContainer = document.querySelector('.pagination');
      const pageButtons = document.querySelectorAll('.page-btn:not(.prev):not(.next)');
      
      pageButtons.forEach(button => button.remove());
      
      const prevButton = document.querySelector('.page-btn.prev');
      for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = 'page-btn';
        if (i === currentPage) pageButton.classList.add('active');
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
          currentPage = i;
          showCurrentPageChapters();
        });
        prevButton.after(pageButton);
      }
      
      document.querySelector('.page-btn.prev').disabled = currentPage === 1;
      document.querySelector('.page-btn.next').disabled = currentPage === totalPages;
    }
    
    function filterChapters(filterType) {
      currentFilter = filterType;
      currentPage = 1;
      
      if (filterType === 'all') {
        filteredChapterItems = [...chapterItems];
      } else {
        filteredChapterItems = chapterItems.filter(item => item.classList.contains(filterType));
      }
      
      showCurrentPageChapters();
    }
    
    function searchChapters(searchTerm) {
      searchTerm = searchTerm.toLowerCase();
      currentPage = 1;
      
      filteredChapterItems = chapterItems.filter(item => {
        const title = item.querySelector('.title-text').textContent.toLowerCase();
        const chapterNum = item.querySelector('.chapter-num').textContent;
        return title.includes(searchTerm) || chapterNum.includes(searchTerm);
      });
      
      showCurrentPageChapters();
    }
    
    // Event listeners
    document.querySelectorAll('.filter-btn').forEach(button => {
      button.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterChapters(button.dataset.filter);
      });
    });
    
    document.querySelector('.search-input').addEventListener('input', (e) => {
      searchChapters(e.target.value);
    });
    
    document.querySelector('.page-btn.prev').addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        showCurrentPageChapters();
      }
    });
    
    document.querySelector('.page-btn.next').addEventListener('click', () => {
      if (currentPage < calculateTotalPages()) {
        currentPage++;
        showCurrentPageChapters();
      }
    });
    
    // Inicialização
    filterChapters('all');
  });