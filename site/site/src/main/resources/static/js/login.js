document.addEventListener('DOMContentLoaded', function() {
    // Controle do modal de login
    const loginModal = document.getElementById('login-modal');
    const loginTrigger = document.querySelectorAll('.js-login-trigger');
    const closeModal = document.querySelector('.close-modal');
    const switchTabs = document.querySelectorAll('.js-switch-tab');
    
    // Mostrar/ocultar modal
    loginTrigger.forEach(trigger => {
        trigger.addEventListener('click', () => {
            loginModal.style.display = 'block';
        });
    });
    
    closeModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });
    
    // Alternar entre login e cadastro
    switchTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.login-tab').style.display = 
                e.target.getAttribute('href') === '#login' ? 'block' : 'none';
            document.querySelector('.register-tab').style.display = 
                e.target.getAttribute('href') === '#cadastro' ? 'block' : 'none';
        });
    });
    
    // Controle de login/logout
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');
    const commentForm = document.getElementById('comment-form');
    const loginToComment = document.getElementById('login-to-comment');
    
    // Simulação de login (substituir por chamadas AJAX/API)
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aqui você faria uma requisição para o backend
        // Simulando login bem-sucedido:
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', document.getElementById('username').value);
        loginModal.style.display = 'none';
        updateUI();
    });
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aqui você faria uma requisição para cadastrar o usuário
        alert('Cadastro realizado com sucesso! Faça login.');
        document.querySelector('.login-tab').style.display = 'block';
        document.querySelector('.register-tab').style.display = 'none';
    });
    
    // Controle de comentários
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const commentText = document.getElementById('comment-text').value;
            // Aqui você enviaria o comentário para o backend
            addComment(localStorage.getItem('username'), commentText);
            document.getElementById('comment-text').value = '';
        });
    }
    
    function updateUI() {
        const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
        
        if (isLoggedIn) {
            // Atualizar link de login para logout
            document.querySelectorAll('.login-trigger').forEach(el => {
                el.innerHTML = '<i class="fas fa-user"></i> Logout';
                el.href = '#';
                el.classList.add('logout');
                el.classList.remove('js-login-trigger');
            });
            
            // Mostrar formulário de comentários
            if (commentForm) commentForm.style.display = 'block';
            if (loginToComment) loginToComment.style.display = 'none';
            
            // Adicionar evento de logout
            document.querySelectorAll('.logout').forEach(el => {
                el.addEventListener('click', function(e) {
                    e.preventDefault();
                    localStorage.removeItem('loggedIn');
                    localStorage.removeItem('username');
                    updateUI();
                    window.location.reload();
                });
            });
        }
    }
    
    function addComment(username, text) {
        const commentsContainer = document.getElementById('comments-container');
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = `
            <h4>${username}</h4>
            <p>${text}</p>
            <small>${new Date().toLocaleString()}</small>
        `;
        commentsContainer.prepend(commentDiv);
    }
    
    // Carregar comentários existentes
    function loadComments() {
        // Aqui você faria uma requisição para obter os comentários do backend
        // Exemplo simulado:
        const mockComments = [
            { username: 'Admin', text: 'Bem-vindo ao nosso site!', date: '2023-05-20' },
            { username: 'Visitante', text: 'Site muito interessante!', date: '2023-05-19' }
        ];
        
        mockComments.forEach(comment => {
            addComment(comment.username, comment.text);
        });
    }
    
    // Inicializar
    updateUI();
    if (document.getElementById('comments-container')) {
        loadComments();
    }
});