// DARKMODE
const html = document.querySelector('html');

const checkbox = document.querySelector('#switch');

// Quando o checkbox for alterado...
checkbox.addEventListener('change', function () {

    html.classList.toggle('dark-mode');

});


// EXIBE / OCULTA INFORMAÇÕES DO ASIDE-LEFT
const showMore = document.querySelector('.show-more');


let visitasPerfil = document.querySelector('.profile-visits');
let ferramentasExclusivas = document.querySelector('.exclusive-tools');
let atividadesRecentes = document.querySelector('.recent-activities');
let meusItens = document.querySelector('.my-items');


function mostrarMais() {

    if (showMore.getAttribute('value') === 'Exibir mais ▾') {

        showMore.setAttribute('value', 'Mostrar menos ▴');
        // showMore.innerText = 'Mostrar menos &#9652;';

    } else {

        // showMore.setAttribute('value', 'Exibir mais &#9662;');
        showMore.setAttribute('value', 'Exibir mais ▾');

    }

}


showMore.addEventListener('click', () => {

    visitasPerfil.classList.toggle('display-block');
    ferramentasExclusivas.classList.toggle('display-block');
    atividadesRecentes.classList.toggle('display-block');
    meusItens.classList.toggle('display-block');

    mostrarMais();


});




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





// MOSTRAR/ESCONDER CONVERSAS - CHAT
const chat = document.querySelector('.chat');
const headerChat = document.querySelector('.chat-header');
const iconExpand = document.querySelector('.expand');

function mostrarChat() {

    if(chat.classList.contains('showChat')) {
        chat.classList.remove('showChat');

        iconExpand.innerText = 'expand_less';
        
    } else {
        chat.classList.add('showChat');
        iconExpand.innerText = 'expand_more';
    }
    
}


headerChat.addEventListener('click', mostrarChat);