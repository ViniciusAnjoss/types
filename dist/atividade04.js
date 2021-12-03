"use strict";
let registroNome;
let registroEmail;
let registroidade;
let botaoSubmit2;
let mensagemregistro;
registroNome = document.querySelector("body > div > div.main-agileinfo > div > form > input:nth-child(1)");
registroEmail = document.querySelector("body > div > div.main-agileinfo > div > form > input.text.email");
registroidade = document.querySelector("body > div > div.main-agileinfo > div > form > input:nth-child(3)");
botaoSubmit2 = document.querySelector("body > div > div.main-agileinfo > div > form > input[type=submit]:nth-child(4)");
mensagemregistro = document.getElementById('salvo');
botaoSubmit2.addEventListener("click", function (event) {
    event.preventDefault();
    let alunoregistro = {
        nome: registroNome.value,
        email: registroEmail.value,
        idade: parseInt(registroidade.value)
    };
    registroNome.value = '';
    registroEmail.value = '';
    registroidade.value = '';
    mensagemregistro.innerText = "Usuário salvo com sucesso!";
    setTimeout(function () {
        mensagemregistro.innerText = "";
    }, 3000);
    console.log('alunoregistro');
});
