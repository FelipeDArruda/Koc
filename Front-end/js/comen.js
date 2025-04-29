document.addEventListener('DOMContentLoaded', function() {
  // Variáveis globais
  let currentUser = null;
  let selectedRating = 0;
  let editingCommentId = null;
  
  // Elementos do DOM
  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const commentForm = document.getElementById('comment-form');
  const authMessage = document.getElementById('auth-message');
  const loginModal = document.getElementById('login-modal');
  const closeModal = document.querySelector('.close-modal');
  const loginForm = document.getElementById('login-form');
  const commentsContainer = document.getElementById('comments-container');
  const stars = document.querySelectorAll('.stars i');
  
  // Carregar comentários do localStorage
  loadComments();
  
  // Event Listeners
  loginBtn.addEventListener('click', showLoginModal);
  logoutBtn.addEventListener('click', logout);
  closeModal.addEventListener('click', hideLoginModal);
  loginForm.addEventListener('submit', handleLogin);
  commentForm.addEventListener('submit', handleCommentSubmit);
  
  // Configurar estrelas de avaliação
  stars.forEach(star => {
      star.addEventListener('click', () => setRating(star.dataset.rating));
      star.addEventListener('mouseover', () => highlightStars(star.dataset.rating));
      star.addEventListener('mouseout', resetStars);
  });
  
  // Funções de autenticação
  function showLoginModal() {
      loginModal.classList.remove('hidden');
  }
  
  function hideLoginModal() {
      loginModal.classList.add('hidden');
      document.getElementById('login-form').reset();
      document.getElementById('username').classList.remove('error');
      document.getElementById('password').classList.remove('error');
      const errorMessages = document.querySelectorAll('.error-message');
      errorMessages.forEach(msg => msg.remove());
  }
  
  function handleLogin(e) {
      e.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      // Validação simples (usuário demo)
      if (username === 'admin' && password === '123') {
          currentUser = { username: 'admin', name: 'Administrador' };
          updateAuthUI();
          hideLoginModal();
      } else {
          showError('Credenciais inválidas. Tente novamente.');
      }
  }
  
  function showError(message) {
      // Remove mensagens de erro anteriores
      const existingError = document.querySelector('.error-message');
      if (existingError) existingError.remove();
      
      // Adiciona nova mensagem de erro
      const errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      errorElement.textContent = message;
      loginForm.appendChild(errorElement);
      
      // Destaca campos inválidos
      document.getElementById('username').classList.add('error');
      document.getElementById('password').classList.add('error');
  }
  
  function logout() {
      currentUser = null;
      updateAuthUI();
  }
  
  function updateAuthUI() {
      if (currentUser) {
          loginBtn.classList.add('hidden');
          logoutBtn.classList.remove('hidden');
          authMessage.classList.add('hidden');
          commentForm.classList.remove('hidden');
          document.getElementById('name').value = currentUser.name;
      } else {
          loginBtn.classList.remove('hidden');
          logoutBtn.classList.add('hidden');
          authMessage.classList.remove('hidden');
          commentForm.classList.add('hidden');
      }
  }
  
  // Funções de avaliação (estrelas)
  function setRating(rating) {
      selectedRating = parseInt(rating);
      stars.forEach((star, index) => {
          if (index < selectedRating) {
              star.classList.add('fas');
              star.classList.remove('far');
          } else {
              star.classList.add('far');
              star.classList.remove('fas');
          }
      });
  }
  
  function highlightStars(rating) {
      stars.forEach((star, index) => {
          if (index < rating) {
              star.classList.add('fas');
              star.classList.remove('far');
          }
      });
  }
  
  function resetStars() {
      stars.forEach((star, index) => {
          if (index >= selectedRating) {
              star.classList.add('far');
              star.classList.remove('fas');
          }
      });
  }
  
  // Funções de comentários
  function handleCommentSubmit(e) {
      e.preventDefault();
      
      const commentText = document.getElementById('comment').value;
      
      if (commentText.trim() === '') {
          alert('Por favor, digite um comentário.');
          return;
      }
      
      const comment = {
          id: Date.now(),
          userId: currentUser.username,
          userName: currentUser.name,
          text: commentText,
          rating: selectedRating,
          timestamp: new Date().toISOString(),
          replies: [],
          isEdited: false
      };
      
      if (editingCommentId) {
          updateComment(editingCommentId, commentText, selectedRating);
          editingCommentId = null;
      } else {
          addComment(comment);
      }
      
      commentForm.reset();
      setRating(0);
  }
  
  function addComment(comment) {
      // Adiciona ao DOM
      renderComment(comment);
      
      // Salva no localStorage
      saveComment(comment);
  }
  
  function renderComment(comment, isReply = false, parentId = null) {
      const commentElement = document.createElement('div');
      commentElement.className = isReply ? 'reply' : 'comment';
      commentElement.dataset.id = comment.id;
      
      let ratingStars = '';
      if (comment.rating > 0) {
          ratingStars = '<div class="comment-rating">';
          for (let i = 1; i <= 5; i++) {
              if (i <= comment.rating) {
                  ratingStars += '<i class="fas fa-star"></i>';
              } else {
                  ratingStars += '<i class="far fa-star"></i>';
              }
          }
          ratingStars += '</div>';
      }
      
      const editedBadge = comment.isEdited ? '<span class="edited-badge">(editado)</span>' : '';
      
      commentElement.innerHTML = `
          <h3>${comment.userName} ${editedBadge}</h3>
          ${ratingStars}
          <p>${comment.text}</p>
          <small>${new Date(comment.timestamp).toLocaleString()}</small>
          <div class="comment-actions">
              ${comment.userId === currentUser?.username ? `
                  <button class="edit-comment">Editar</button>
                  <button class="delete-comment">Excluir</button>
              ` : ''}
              <button class="reply-comment">Responder</button>
          </div>
          <div class="reply-form hidden">
              <textarea placeholder="Sua resposta..." required></textarea>
              <button class="submit-reply">Enviar resposta</button>
              <button class="cancel-reply">Cancelar</button>
          </div>
          <div class="replies"></div>
      `;
      
      if (isReply && parentId) {
          const parentComment = document.querySelector(`[data-id="${parentId}"] .replies`);
          parentComment.appendChild(commentElement);
      } else {
          commentsContainer.prepend(commentElement);
      }
      
      // Adiciona replies existentes
      if (comment.replies && comment.replies.length > 0) {
          const repliesContainer = commentElement.querySelector('.replies');
          comment.replies.forEach(reply => {
              renderComment(reply, true, comment.id);
          });
      }
      
      // Configura eventos
      setupCommentEvents(commentElement);
  }
  
  function setupCommentEvents(commentElement) {
      const commentId = commentElement.dataset.id;
      
      // Botão de editar
      const editBtn = commentElement.querySelector('.edit-comment');
      if (editBtn) {
          editBtn.addEventListener('click', () => {
              const comment = getCommentById(commentId);
              if (comment) {
                  editingCommentId = commentId;
                  document.getElementById('comment').value = comment.text;
                  setRating(comment.rating);
                  window.scrollTo(0, 0);
              }
          });
      }
      
      // Botão de excluir
      const deleteBtn = commentElement.querySelector('.delete-comment');
      if (deleteBtn) {
          deleteBtn.addEventListener('click', () => {
              if (confirm('Tem certeza que deseja excluir este comentário?')) {
                  deleteComment(commentId);
              }
          });
      }
      
      // Botão de responder
      const replyBtn = commentElement.querySelector('.reply-comment');
      const replyForm = commentElement.querySelector('.reply-form');
      
      replyBtn.addEventListener('click', () => {
          replyForm.classList.toggle('hidden');
      });
      
      // Cancelar resposta
      const cancelReplyBtn = commentElement.querySelector('.cancel-reply');
      cancelReplyBtn.addEventListener('click', () => {
          replyForm.classList.add('hidden');
          replyForm.querySelector('textarea').value = '';
      });
      
      // Enviar resposta
      const submitReplyBtn = commentElement.querySelector('.submit-reply');
      submitReplyBtn.addEventListener('click', () => {
          const replyText = replyForm.querySelector('textarea').value.trim();
          
          if (replyText === '') {
              alert('Por favor, digite uma resposta.');
              return;
          }
          
          const reply = {
              id: Date.now(),
              userId: currentUser.username,
              userName: currentUser.name,
              text: replyText,
              timestamp: new Date().toISOString(),
              replies: [],
              isEdited: false
          };
          
          addReply(commentId, reply);
          replyForm.classList.add('hidden');
          replyForm.querySelector('textarea').value = '';
      });
  }
  
  function addReply(parentId, reply) {
      // Encontra o comentário pai
      const comments = getCommentsFromStorage();
      const parentComment = findComment(comments, parentId);
      
      if (parentComment) {
          parentComment.replies.push(reply);
          saveAllComments(comments);
          
          // Atualiza a UI
          const parentElement = document.querySelector(`[data-id="${parentId}"]`);
          if (parentElement) {
              const repliesContainer = parentElement.querySelector('.replies');
              if (repliesContainer) {
                  renderComment(reply, true, parentId);
              parentElement.querySelector('.reply-form').classList.add('hidden');
              parentElement.querySelector('.reply-form textarea').value = '';
              repliesContainer.style.display = 'block';
          }
      }
  }
  
  function updateComment(commentId, newText, newRating) {
      const comments = getCommentsFromStorage();
      const comment = findComment(comments, commentId);
      
      if (comment) {
          comment.text = newText;
          comment.rating = newRating;
          comment.timestamp = new Date().toISOString();
          comment.isEdited = true;
          
          saveAllComments(comments);
          
          // Atualiza a UI
          const commentElement = document.querySelector(`[data-id="${commentId}"]`);
          if (commentElement) {
              commentElement.querySelector('p').textContent = newText;
              
              // Atualiza a avaliação
              const ratingContainer = commentElement.querySelector('.comment-rating');
              if (ratingContainer) {
                  ratingContainer.innerHTML = '';
                  for (let i = 1; i <= 5; i++) {
                      const star = document.createElement('i');
                      star.className = i <= newRating ? 'fas fa-star' : 'far fa-star';
                      ratingContainer.appendChild(star);
                  }
              }
              
              // Adiciona indicador de editado
              if (!commentElement.querySelector('.edited-badge')) {
                  const editedBadge = document.createElement('span');
                  editedBadge.className = 'edited-badge';
                  editedBadge.textContent = '(editado)';
                  commentElement.querySelector('h3').appendChild(editedBadge);
              }
          }
      }
  }
  
  function deleteComment(commentId) {
      const comments = getCommentsFromStorage();
      const updatedComments = removeComment(comments, commentId);
      saveAllComments(updatedComments);
      
      // Remove da UI
      const commentElement = document.querySelector(`[data-id="${commentId}"]`);
      if (commentElement) {
          commentElement.remove();
      }
  }
  
  // Funções de localStorage
  function saveComment(comment) {
      const comments = getCommentsFromStorage();
      comments.unshift(comment);
      localStorage.setItem('comments', JSON.stringify(comments));
  }
  
  function saveAllComments(comments) {
      localStorage.setItem('comments', JSON.stringify(comments));
  }
  
  function getCommentsFromStorage() {
      const comments = localStorage.getItem('comments');
      return comments ? JSON.parse(comments) : [];
  }
  
  function loadComments() {
      const comments = getCommentsFromStorage();
      commentsContainer.innerHTML = '';
      
      // Ordena por timestamp (mais recente primeiro)
      comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      
      comments.forEach(comment => {
          renderComment(comment);
      });
  }
  
  // Funções auxiliares
  function findComment(comments, id) {
      for (const comment of comments) {
          if (comment.id == id) return comment;
          
          if (comment.replies && comment.replies.length > 0) {
              const foundInReplies = findComment(comment.replies, id);
              if (foundInReplies) return foundInReplies;
          }
      }
      return null;
  }
  
  function removeComment(comments, id) {
      return comments.filter(comment => {
          if (comment.id == id) return false;
          
          if (comment.replies && comment.replies.length > 0) {
              comment.replies = removeComment(comment.replies, id);
          }
          
          return true;
      });
  }
  
  // Inicialização
  updateAuthUI();
});