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