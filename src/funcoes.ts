function somar(x: number,y: number):number{
    return x+y;
}

let myadd = function(x: number, y:number):void{
    console.log("a soma é: ${x+y}");
}

function imprimirNomeCompleto(nome: string, meio: string, sobrenome?: string):string{
   let nomeCompleto:string;
    if(sobrenome){
        nomeCompleto = nome + ' ' +meio+ '' +sobrenome;
    }else{
        nomeCompleto = nome + ' ' + meio;
    }
    console.log(nomeCompleto);
    return nomeCompleto;
}
imprimirNomeCompleto('Vinicius','anjos', ' silva');

//console.log('o resultado da função somar: ${somar(10,20)}');

myadd(10,20); {somar(10,20)}