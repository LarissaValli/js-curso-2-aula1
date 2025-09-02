//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let listaDeNumeroSorteado = [];
let numeroLimite = 10;
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
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumeroSorteado = [];
    }

    if (listaDeNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteado.push(numeroEscolhido);
        console.log(listaDeNumeroSorteado);
        return numeroEscolhido;
    }
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

//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.


// function calculaIMC(altura, peso){

//   let imc = peso / (alturaMetros * alturaMetros);
// }

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$ 4,80.

// function converterDolarParaReal(valorEmDolar) {
//   let cotacaoDolar = 4.80;
//   let valorEmReais = valorEmDolar * cotacaoDolar;
//   return valorEmReais.toFixed(2);
// }

// // Exemplo de uso
// let valorEmDolar = 50;
// let valorEmReais = converterDolarParaReal(valorEmDolar);
// console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

// function calcularAreaPerimetroSalaRetangular(altura, largura) {
//   let area = altura * largura;
//   let perimetro = 2 * (altura + largura);
  
//   console.log(`Área da sala: ${area} metros quadrados`);
//   console.log(`Perímetro da sala: ${perimetro} metros`);
// }

// // Exemplo de uso
// let altura = 3; // em metros
// let largura = 5; // em metros
// calcularAreaPerimetroSalaRetangular(altura, largura);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// function calcularAreaPerimetroSalaCircular(raio) {
//   let area = Math.PI * raio * raio;
//   let perimetro = 2 * Math.PI * raio;
  
//   console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
//   console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
// }

// // Exemplo de uso
// let raio = 4; // em metros
// calcularAreaPerimetroSalaCircular(raio);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

// function mostrarTabuada(numero) {
//   for (let i = 1; i <= 10; i++) {
//     let resultado = numero * i;
//     console.log(`${numero} x ${i} = ${resultado}`);
//   }
// }

// // Exemplo de uso
// let numero = 7;
// mostrarTabuada(numero);



//DESAFIO 01

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