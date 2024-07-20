let Nome_Usuário = "";
let elemento = document.querySelector("#nome-usuário");


while(Nome_Usuário == ""){
    Nome_Usuário = prompt("Qual o seu nome?");
}


if(Nome_Usuário == null){
    elemento.textContent = "seja muito bem-vindo!"
}
else{
    elemento.textContent = Nome_Usuário;
}

