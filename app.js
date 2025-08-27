//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela() {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}


//DESAFIO 02

// Criar uma função que exibe "Olá, mundo!" no console.

function exibirOla() {
    console.log('Olá mundo!');
}

exibirOla();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function exibirNome(nome) {
    console.log(`Olá, ${nome}`);
}

exibirNome("Alice");

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function exibirNumero(numero) {
    return numero * 2;
}

let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

function tresNumeros(a, b, c) {
    return (a, b, c) / 3;
}

let mediaNumero = mediaDosNumeros(4, 7, 10);
console.log(mediaNumero);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function doisNumeros(a, b) {
    return a > b ? a : b;
}

let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);


// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function quadrado(numero) {
  return numero * numero;
}

let resultado = quadrado(2);
console.log(resultado); 