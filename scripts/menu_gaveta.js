document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navGaveta = document.querySelector('.nav-gaveta');
    const navLinks = document.querySelectorAll('.nav-gaveta a');
  
    // Abre/fecha o menu ao clicar no botão
    menuToggle.addEventListener('click', () => {
      navGaveta.classList.toggle('ativo');
    });
  
    // Fecha o menu ao clicar em qualquer link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navGaveta.classList.remove('ativo');
      });
    });
  });
  