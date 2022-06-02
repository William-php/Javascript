let nJogada = 0;
let p1 = 'X';
let p2 = 'O';
let blocos = document.getElementsByClassName('space');
let btn = document.getElementById('reiniciar');
let paragraph = document.getElementsByTagName('p');

const verificarVencedor = () => {
    if ((blocos[0].innerText === p1 && blocos[1].innerText === p1 && blocos[2].innerText === p1) || blocos[0].innerText === p2 && blocos[1].innerText === p2 && blocos[2].innerText === p2) {
        blocos[0].style.background = 'green';
        blocos[1].style.background = 'green';
        blocos[2].style.background = 'green';

        if ((blocos[0].innerText === p1 && blocos[1].innerText === p1 && blocos[2].innerText === p1)) {
            paragraph[1].innerText = `${paragraph[1].innerText} ${p1}`;
            alert(`Parabéns o Jogador ${p1} foi o campeão!`);
            bloquear();
            return;
        }
        if (blocos[0].innerText === p2 && blocos[1].innerText === p2 && blocos[2].innerText === p2) {
            paragraph[1].innerText = `${paragraph[1].innerText} ${p2}`;
            alert(`Parabéns o Jogador ${p2} foi o campeão!`);
            bloquear();
            return;
        }
        return;
    };
    if ((blocos[0].innerText === p1 && blocos[3].innerText === p1 && blocos[6].innerText === p1) || blocos[0].innerText === p2 && blocos[3].innerText === p2 && blocos[6].innerText === p2) {
        blocos[0].style.background = 'green';
        blocos[3].style.background = 'green';
        blocos[6].style.background = 'green';

        if ((blocos[0].innerText === p1 && blocos[3].innerText === p1 && blocos[6].innerText === p1)) {
            paragraph[1].innerText = `${paragraph[1].innerText} ${p1}`;
            alert(`Parabéns o Jogador ${p1} foi o campeão!`);
            bloquear();
            return;
        }
        if (blocos[0].innerText === p2 && blocos[3].innerText === p2 && blocos[6].innerText === p2) {
            paragraph[1].innerText = `${paragraph[1].innerText} ${p2}`;
            alert(`Parabéns o Jogador ${p2} foi o campeão!`);
            bloquear();
            return;
        }
        return;
    }
    if ((blocos[0].innerText === p1 && blocos[4].innerText === p1 && blocos[8].innerText === p1) || blocos[0].innerText === p2 && blocos[4].innerText === p2 && blocos[8].innerText === p2) {
        blocos[0].style.background = 'green';
        blocos[4].style.background = 'green';
        blocos[8].style.background = 'green';

        if ((blocos[0].innerText === p1 && blocos[4].innerText === p1 && blocos[8].innerText === p1)) {
            paragraph[1].innerText = `${paragraph[1].innerText} ${p1}`;
            alert(`Parabéns o Jogador ${p1} foi o campeão!`);
            bloquear();
            return;
        }
        if (blocos[0].innerText === p2 && blocos[4].innerText === p2 && blocos[8].innerText === p2) {
            paragraph[1].innerText = `${paragraph[1].innerText} ${p2}`;
            alert(`Parabéns o Jogador ${p2} foi o campeão!`);
            bloquear();
            return;
        }
        return;
    }

    if ((blocos[3].innerText === p1 && blocos[4].innerText === p1 && blocos[5].innerText === p1) || blocos[3].innerText === p2 && blocos[4].innerText === p2 && blocos[5].innerText === p2) {
        blocos[3].style.background = 'green';
        blocos[4].style.background = 'green';
        blocos[5].style.background = 'green';

        if ((blocos[3].innerText === p1 && blocos[4].innerText === p1 && blocos[5].innerText === p1)) {
            paragraph[1].innerText = `${paragraph[1].innerText} ${p1}`;
            alert(`Parabéns o Jogador ${p1} foi o campeão!`);
            bloquear();
            return;
        }
        if (blocos[3].innerText === p2 && blocos[4].innerText === p2 && blocos[5].innerText === p2) {
            paragraph[1].innerText = `${paragraph[1].innerText} ${p2}`;
            alert(`Parabéns o Jogador ${p2} foi o campeão!`);
            bloquear();
            return;
        }
        return;
    }
    if ((blocos[6].innerText === p1 && blocos[7].innerText === p1 && blocos[8].innerText === p1) || blocos[6].innerText === p2 && blocos[7].innerText === p2 && blocos[8].innerText === p2) {
        blocos[6].style.background = 'green';
        blocos[7].style.background = 'green';
        blocos[8].style.background = 'green';

        if ((blocos[6].innerText === p1 && blocos[7].innerText === p1 && blocos[8].innerText === p1)) {
            paragraph[1].innerText = `${paragraph[1].innerText} ${p1}`;
            alert(`Parabéns o Jogador ${p1} foi o campeão!`);
            bloquear();
            return;
        }
        if (blocos[6].innerText === p2 && blocos[7].innerText === p2 && blocos[8].innerText === p2) {
            paragraph[1].innerText = `${paragraph[1].innerText} ${p2}`;
            alert(`Parabéns o Jogador ${p2} foi o campeão!`);
            bloquear();
            return;
        }
        return;
    }

    if ((blocos[1].innerText === p1 && blocos[4].innerText === p1 && blocos[7].innerText === p1) || blocos[1].innerText === p2 && blocos[4].innerText === p2 && blocos[7].innerText === p2) {
        blocos[1].style.background = 'green';
        blocos[4].style.background = 'green';
        blocos[7].style.background = 'green';

        if ((blocos[1].innerText === p1 && blocos[4].innerText === p1 && blocos[7].innerText === p1)) {
            paragraph[1].innerText = `${paragraph[1].innerText} ${p1}`;
            alert(`Parabéns o Jogador ${p1} foi o campeão!`);
            return;
        }
        if (blocos[1].innerText === p2 && blocos[4].innerText === p2 && blocos[7].innerText === p2) {
            paragraph[1].innerText = `${paragraph[1].innerText} ${p2}`;
            alert(`Parabéns o Jogador ${p2} foi o campeão!`);
            bloquear();
            return;
        }
        return;
    }

    if ((blocos[2].innerText === p1 && blocos[5].innerText === p1 && blocos[8].innerText === p1) || blocos[2].innerText === p2 && blocos[5].innerText === p2 && blocos[8].innerText === p2) {
        blocos[2].style.background = 'green';
        blocos[5].style.background = 'green';
        blocos[8].style.background = 'green';

        if ((blocos[2].innerText === p1 && blocos[5].innerText === p1 && blocos[8].innerText === p1)) {
            paragraph[1].innerText = `${paragraph[1].innerText} ${p1}`;
            alert(`Parabéns o Jogador ${p1} foi o campeão!`);
            bloquear();
            return;
        }
        if (blocos[2].innerText === p2 && blocos[5].innerText === p2 && blocos[8].innerText === p2) {
            paragraph[1].innerText = `${paragraph[1].innerText} ${p2}`;
            alert(`Parabéns o Jogador ${p2} foi o campeão!`);
            bloquear();
            return;
        }
        return;
    }

    if ((blocos[2].innerText === p1 && blocos[4].innerText === p1 && blocos[6].innerText === p1) || blocos[2].innerText === p2 && blocos[4].innerText === p2 && blocos[6].innerText === p2) {
        blocos[2].style.background = 'green';
        blocos[4].style.background = 'green';
        blocos[6].style.background = 'green';

        if ((blocos[2].innerText === p1 && blocos[4].innerText === p1 && blocos[6].innerText === p1)) {
            paragraph[1].innerText = `${paragraph[1].innerText} ${p1}`;
            alert(`Parabéns o Jogador ${p1} foi o campeão!`);
            bloquear();
            return;
        }
        if (blocos[2].innerText === p2 && blocos[4].innerText === p2 && blocos[6].innerText === p2) {
            paragraph[1].innerText = `${paragraph[1].innerText} ${p2}`;
            alert(`Parabéns o Jogador ${p2} foi o campeão!`);
            bloquear();
            return;
        }
        return;
    }
};

const jogar = (n) => {
    switch (n.innerText) {
        case '':
            if (nJogada % 2 == 0) {
                n.innerText = `${p1}`
            } else {
                n.innerText = `${p2}`
            }
            break;
        default:
            alert('Este campo está preenchido!\nSelecione outro campo');
            break;
    }

    verificarVencedor();
    nJogada++;
    if (nJogada % 2 == 0) {
        paragraph[0].innerHTML = `Jogador: ${p1}`
    } else {
        paragraph[0].innerText = `Jogador: ${p2}`
    }
};

let reiniciar = () => {
    for (let i = 0; i < blocos.length; i++) {
        blocos[i].innerText = '';
        blocos[i].style.background = '#D3D3D3'
    }
    nJogada = 0;
    paragraph[1].innerHTML = 'Vencedor: ';
    paragraph[0].innerHTML = `Jogador: ${p1}`;
    desblock();
};

let bloquear = () => {
    for (let i = 0; i < blocos.length; i++) {
        blocos[i].removeAttribute('onclick');
    };
};

let desblock = () => {
    for (let i = 0; i < blocos.length; i++) {
        blocos[i].setAttribute('onclick', 'jogar(this)');
    };
}

btn.addEventListener('click', reiniciar);