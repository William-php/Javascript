const titulo = document.getElementById('title');
const btn = document.getElementById('btnDm');
const darkMode = document.getElementsByClassName('dark-mode');
const icone = document.getElementsByTagName('i')[0];
icone.setAttribute('class', 'fa fa-moon-o')

const toggleClass = () => {
    const body = document.getElementById('meuBody');
    const footer = document.getElementsByTagName('footer');
    body.classList.toggle('dark-mode');

    if (darkMode.length > 0) {
        icone.setAttribute('class', 'fa fa-sun-o');
        darkMode[0].style.transition = '1s';
        titulo.style.color = '#000';
        titulo.innerHTML = 'Sun Mode ON'
        btn.innerHTML = 'Sun Mode '
        btn.appendChild(icone);
        btn.style.background = '#000';
        btn.style.color = '#fff';
        footer[0].style.color = '#000';

        return;
    } else {
        icone.setAttribute('class', 'fa fa-moon-o');
        titulo.innerHTML = 'Dark Mode ON'
        titulo.style.color = '#fff';
        btn.style.background = '#808080';
        btn.style.color = '#000';
        btn.innerHTML = 'Dark Mode ';
        btn.appendChild(icone);
        footer[0].style.color = '#fff';

    }
}

btn.addEventListener('click', toggleClass);