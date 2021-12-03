interface aluno {
    nome: string;
    email: string;
    idade: number;
}

let registroNome: HTMLInputElement;
let registroEmail: HTMLInputElement;
let registroidade: HTMLInputElement;
let botaoSubmit2: HTMLInputElement;
let mensagemregistro: HTMLElement;



registroNome= document.querySelector("body > div > div.main-agileinfo > div > form > input:nth-child(1)") as HTMLInputElement;

registroEmail=document.querySelector("body > div > div.main-agileinfo > div > form > input.text.email") as HTMLInputElement;

registroidade=document.querySelector("body > div > div.main-agileinfo > div > form > input:nth-child(3)") as HTMLInputElement;

botaoSubmit2=document.querySelector("body > div > div.main-agileinfo > div > form > input[type=submit]:nth-child(4)") as HTMLInputElement;

mensagemregistro = document.getElementById('salvo') as HTMLElement;


botaoSubmit2.addEventListener("click", function(event){
    event.preventDefault();

    let alunoregistro: aluno ={
        nome: registroNome.value,
        email: registroEmail.value,
        idade: parseInt(registroidade.value)
    }

    registroNome.value = '';
    registroEmail.value = '';
    registroidade.value = '';
   
    mensagemregistro.innerText = "Usuário salvo com sucesso!";

    setTimeout(function(){
        mensagemregistro.innerText = "";
    }, 3000);

    console.log('alunoregistro');
})

