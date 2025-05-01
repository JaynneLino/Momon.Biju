document.addEventListener('DOMContentLoaded', () => {
    const carrosseis = document.querySelectorAll('.carrossel');
  
    carrosseis.forEach(carrossel => {
      const fotos = carrossel.querySelector('.fotos');
      const imagens = fotos.querySelectorAll('img');
      let index = 0;
  
      const anterior = carrossel.querySelector('.anterior');
      const proximo = carrossel.querySelector('.proximo');
  
      anterior.addEventListener('click', () => {
        index = Math.max(index - 1, 0);
        fotos.style.transform = `translateX(-${index * 210}px)`; // 200px img + 10px gap
      });
  
      proximo.addEventListener('click', () => {
        index = Math.min(index + 1, imagens.length - 1);
        fotos.style.transform = `translateX(-${index * 210}px)`;
      });
    });
  });
  

document.addEventListener('DOMContentLoaded', () => {
    const carrosseis = document.querySelectorAll('.carrossel');
  
    carrosseis.forEach(carrossel => {
      const fotos = carrossel.querySelector('.fotos');
      const imagens = fotos.querySelectorAll('img');
      let index = 0;
  
      const anterior = carrossel.querySelector('.anterior');
      const proximo = carrossel.querySelector('.proximo');
  
      function atualizarTransform() {
        fotos.style.transform = `translateX(-${index * 210}px)`;
      }
  
      anterior.addEventListener('click', () => {
        index = Math.max(index - 1, 0);
        atualizarTransform();
      });
  
      proximo.addEventListener('click', () => {
        index = Math.min(index + 1, imagens.length - 1);
        atualizarTransform();
      });
  
      // Suporte a swipe (toque)
      let startX = 0;
      let dist = 0;
  
      fotos.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
      });
  
      fotos.addEventListener('touchmove', (e) => {
        dist = e.touches[0].clientX - startX;
      });
  
      fotos.addEventListener('touchend', () => {
        if (dist > 50) {
          // Swipe para direita (anterior)
          index = Math.max(index - 1, 0);
          atualizarTransform();
        } else if (dist < -50) {
          // Swipe para esquerda (próximo)
          index = Math.min(index + 1, imagens.length - 1);
          atualizarTransform();
        }
        // Reset
        dist = 0;
      });
    });
  });
  