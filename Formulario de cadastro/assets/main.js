let input = document.getElementsByTagName('input');
let output = document.getElementsByTagName('section');
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');
let p4 = document.createElement('p');
let formulario = document.getElementsByTagName('form');
let btn = document.getElementsByTagName('button');




const dadosForms = () => {
    output[1].setAttribute('class', 'formulario');
    output[1].style.justifyContent = 'center';
    output[1].style.textAlign = 'center';
    output[1].appendChild(p1);
    output[1].appendChild(p2);
    output[1].appendChild(p3);
    output[1].appendChild(p4);
    let dataNascimento = formulario[0][2].value;
    tratarData(dataNascimento);

    p1.innerHTML = `Seu nome é ${formulario[0][0].value}`;
    p2.innerHTML = `Email é ${formulario[0][1].value}`;
    p3.innerHTML = `Nascido no dia ${formulario[0][2].value}`;

};

let tratarData = (str) => {
    str = str.replace('-', '/').replace('-', '/');
    str = str.split('');
    console.log(str);
    let ano = [];
    str.forEach((v, i) => {
        if (i < 4) {
            ano.push(v);
        }
    });
    str[0] = str[8];
    str[1] = str[9];
    console.log(str);
    str = str.splice('9', '7');
    console.log(str);
    console.log(ano.join().replace(/(,)([0-9]+)/gi, '$2'));
}

btn[0].addEventListener('click', dadosForms);