document.addEventListener('DOMContentLoaded', () => {
  const carrosselWrapper = document.querySelector('.carrossel-wrapper');
  const prevBtn = document.querySelector('.carrossel-btn.prev');
  const nextBtn = document.querySelector('.carrossel-btn.next');
  const items = document.querySelectorAll('.carrossel-item');
  const itemWidth = items[0].offsetWidth + 20; // Largura do item + gap
  let currentIndex = 0;

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      carrosselWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
      currentIndex++;
      carrosselWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  });
});