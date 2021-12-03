"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///trabalhando com vetores
let vetorNumeros = [1, 2, 3, 4, 5];
let outrovetor = [10, 20, 30, 40, 50];
vetorNumeros.splice(2, 1, ...outrovetor);
console.log(vetorNumeros);
let vetorString = [];
let Elys = {
    Nome: "Elys",
    email: "Elys@outlook.com",
    matricula: "111997979",
    idade: 18,
};
let vetorestudantes = [];
vetorestudantes.push(Elys);
vetorString.push("vinicius");
let vetorestudantesEgressos = [];
function imprimirElementosvetor(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        console.log = vetor[i];
    }
}
function imprimirElementosvetorV2(vetor) {
    vetor.forEach(function (e) {
        console.log(e);
    });
}
//vetorestudantes.pop();
imprimirElementosvetorV2(vetorestudantes);
