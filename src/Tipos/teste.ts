import estudantes from "./estudantes";
///trabalhando com vetores

let vetorNumeros: Array<number> = [1, 2, 3, 4, 5];

let outrovetor: Array<number> = [10, 20, 30, 40, 50];

vetorNumeros.splice(2, 1, ...outrovetor);

console.log(vetorNumeros);

let vetorString: Array<String> = [];

let Elys: estudantes = {
  Nome: "Elys",
  email: "Elys@outlook.com",
  matricula: "111997979",
  idade: 18,
};

let vetorestudantes: Array<estudantes> = [];

vetorestudantes.push(Elys);

vetorString.push("vinicius");

let vetorestudantesEgressos: estudantes[] = [];

function imprimirElementosvetor(vetor: any): void {
  for (let i = 0; i < vetor.length; i++) {
    console.log = vetor[i];
  }
}

function imprimirElementosvetorV2(vetor: estudantes[]): void {
  vetor.forEach(function (e) {
    console.log(e);
  });
}

//vetorestudantes.pop();

imprimirElementosvetorV2(vetorestudantes);
