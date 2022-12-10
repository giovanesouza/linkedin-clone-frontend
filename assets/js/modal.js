// MODAL -  INICIAR POST
const modal = document.querySelector('#myModal');
const btnModal = document.querySelector('#myBtn');
const closeModal = document.querySelector('#close');

// Ativa modal para postagem
btnModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Fecha o modal ao clicar no x
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fecha o modal ao clicar em qualquer área da página (exeto o próprio modal)
window.addEventListener('click', (e) => {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
});