"use strict";
let lista = ['Marcos', 'Luan', 'Bento', 'Ruan', 'joão'];
for (var index in lista) {
    console.log(lista[index]);
}
let alterar = ['marcos silva'];
lista.splice(0, 1, ...alterar);
lista.push('Rodrigo');
console.log(lista);
lista.pop();
lista.forEach(function (lista) {
    console.log(lista);
});
let posicao = lista.indexOf("compass");
lista.splice(2, 1);
console.log(lista);
// Correção pelo professor 
//definido um array com os nomes 'Marcos','Luan', 'Bento', 'Ruan','João'
//let arraynomes: string[] = ['Marcos', 'Luan', 'Bento', 'Ruan', 'joão']
//varrear o array construido
//for(let i = 0; i< arraynomes.length; i++){
//    console.log(arraynomes)
//}
// ou 
//arraynomes.forEach(function(e){
//    console.log(e)
//});
//alterar o nome do aluno Marcos para Marcos Silva
//arraynomes[0] = 'marcos silva';
//let index = arraynomes.find(function(nome){  
//   return nome == "Marcos";
//})
//function substituirMarcos(vetor: Array<string>):void{
//    let index = vetor.indexOf("Marcos");
//    vetor[index] = 'Marcos silva';
//    imprimirvetor(vetor);}
//substituirMarcos(arraynomes)
// acrescentar o aluno Rodrigo
//arraynomes.push('Rodrigo');
// excluir o ultimo aluno da lista
//arraynomes.pop();
// retirar o aluno Bento
//function retirarBento(vetor: array<string>): void{
//    let index = vetor.indexof('Bento');
//    vetor.splice(index,1);
//    imprimirvetor(vetor)
//}
//retirarBento(Arraynomes);
