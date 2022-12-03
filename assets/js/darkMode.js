const html = document.querySelector('html');

const checkbox = document.querySelector('#switch');

// Quando o checkbox for alterado...
checkbox.addEventListener('change', function () {

    html.classList.toggle('dark-mode');

})