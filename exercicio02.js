
const pesoAmais = 0.15;


function solucao(pesoAdicionado) {


    return pesoAdicionado + pesoAmais;

}

module.exports = solucao;



let pesoAdicionado = 15.0;

let resultado = pesoAdicionado + pesoAmais;

console.log(resultado);