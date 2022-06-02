const dino = document.getElementsByClassName('dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;
const main = document.getElementsByTagName('main');
let handleKeyUp = (event) => {
    console.log(event.keyCode);
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
            isJumping = false;
        }
    }
};

let jump = () => {
    isJumping = true;
    let upInterval = setInterval(() => {
        if (position > 100) {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                } else {
                    position -= 20;
                    dino[0].style.bottom = `${position}px`;
                }
            }, 50);
        } else {
            position += 20;
            dino[0].style.bottom = `${position}px`;
        }

    }, 50); //setInterval(() => ''): método para executar intervalos, este código vai ser executado a cada 200ms
}

let createCactus = () => {
    const cactus = document.createElement('div');
    let cactusPosition = 580;
    cactus.classList.add('cactus');
    cactus.style.left = '1000px';
    background.appendChild(cactus);

    let randomTime = (Math.random() * 5000).toFixed(0);

    let leftInterval = setInterval(() => {
        if (cactusPosition < 0) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
            setTimeout(createCactus, randomTime);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            clearInterval(leftInterval);
            background.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>'
        } else {
            cactusPosition -= 10;
            cactus.style.left = `${cactusPosition}px`;
        }

    }, 200);

}

createCactus();
document.addEventListener('keyup', handleKeyUp);