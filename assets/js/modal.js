// MODAL -  INICIAR POST
const body = document.querySelector('body');
const modal = document.querySelector('#myModal');
const btnModal = document.querySelector('#myBtn');
const closeModal = document.querySelector('#close');

// Ativa modal para postagem
btnModal.addEventListener('click', () => {
    modal.style.display = 'block';

    // Desabilita barra de rolagem da página
    body.style.overflow = 'hidden';
});

// Fecha o modal ao clicar no x
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';

    // Habilita barra de rolagem da página
    body.style.overflow = 'initial';
});

// Fecha o modal ao clicar em qualquer área da página (exeto o próprio modal)
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';

        // Habilita barra de rolagem da página
        body.style.overflow = 'initial';
    }
});