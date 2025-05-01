document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navGaveta = document.querySelector('.nav-gaveta');
    const navLinks = document.querySelectorAll('.nav-gaveta a');

    // Abre/fecha o menu ao clicar no botão menu-toggle
    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation(); // Impede que o clique no botão feche o menu
        navGaveta.classList.toggle('ativo');
    });

    // Fecha o menu ao clicar em qualquer link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navGaveta.classList.remove('ativo');
        });
    });

    // Impede que cliques dentro do menu fechem o menu
    navGaveta.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});
