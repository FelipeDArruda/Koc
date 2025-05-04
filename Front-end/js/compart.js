class ShareModal {
  constructor() {
      this.modal = document.getElementById('share-modal');
      this.shareButton = document.getElementById('share-button');
      this.closeButton = document.querySelector('.close-modal');
      this.overlay = document.querySelector('.modal-overlay');
      this.urlInput = document.getElementById('share-url-input');
      this.copyButton = document.getElementById('copy-url-btn');
      
      this.init();
  }
  
  init() {
      // Set current URL
      this.urlInput.value = window.location.href;
      
      // Event listeners
      this.shareButton.addEventListener('click', () => this.open());
      this.closeButton.addEventListener('click', () => this.close());
      this.overlay.addEventListener('click', () => this.close());
      this.copyButton.addEventListener('click', () => this.copyUrl());
      
      // Social buttons
      document.querySelectorAll('.share-option').forEach(button => {
          button.addEventListener('click', () => {
              const social = button.dataset.social;
              if (social !== 'copy') {
                  this.shareOn(social);
              }
          });
      });
      
      // Keyboard accessibility
      document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && this.modal.classList.contains('active')) {
              this.close();
          }
      });
  }
  
  open() {
      this.modal.classList.add('active');
      document.body.style.overflow = 'hidden';
  }
  
  close() {
      this.modal.classList.remove('active');
      document.body.style.overflow = '';
  }
  
  shareOn(social) {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(document.title);
      
      const urls = {
          facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
          twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
          whatsapp: `https://wa.me/?text=${text}%20${url}`
      };
      
      window.open(urls[social], '_blank', 'width=600,height=400');
      this.close();
  }
  
  copyUrl() {
      this.urlInput.select();
      document.execCommand('copy');
      
      // Feedback visual
      const originalText = this.copyButton.textContent;
      this.copyButton.textContent = 'Copiado!';
      setTimeout(() => {
          this.copyButton.textContent = originalText;
      }, 2000);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ShareModal();
});