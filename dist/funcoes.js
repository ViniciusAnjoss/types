"use strict";
function somar(x, y) {
    return x + y;
}
let myadd = function (x, y) {
    console.log("a soma é: ${x+y}");
};
function imprimirNomeCompleto(nome, meio, sobrenome) {
    let nomeCompleto;
    if (sobrenome) {
        nomeCompleto = nome + ' ' + meio + '' + sobrenome;
    }
    else {
        nomeCompleto = nome + ' ' + meio;
    }
    console.log(nomeCompleto);
    return nomeCompleto;
}
imprimirNomeCompleto('Vinicius', 'anjos', ' silva');
//console.log('o resultado da função somar: ${somar(10,20)}');
myadd(10, 20);
{
    somar(10, 20);
}
