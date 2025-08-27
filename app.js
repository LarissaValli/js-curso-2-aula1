//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemNaInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}

exibirMensagemNaInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ?'tentativas' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemNaInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}


//DESAFIO 02

// Criar uma função que exibe "Olá, mundo!" no console.

// function exibirOla() {
//     console.log('Olá mundo!');
// }

// exibirOla();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

// function exibirNome(nome) {
//     console.log(`Olá, ${nome}`);
// }

// exibirNome("Alice");

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

// function exibirNumero(numero) {
//     return numero * 2;
// }

// let resultadoDobro = calcularDobro(5);
// console.log(resultadoDobro);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

// function tresNumeros(a, b, c) {
//     return (a, b, c) / 3;
// }

// let mediaNumero = mediaDosNumeros(4, 7, 10);
// console.log(mediaNumero);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// function doisNumeros(a, b) {
//     return a > b ? a : b;
// }

// let maiorNumero = encontrarMaior(15, 9);
// console.log(maiorNumero);


// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

// function quadrado(numero) {
//   return numero * numero;
// }

// let resultado = quadrado(2);
// console.log(resultado); 