$(document).ready(function(){

    //adicionar css
    $("#lista").css("color","red");

    //adicionando html
    $('.element').html("Meu texto via JQuery"); 

    $("a").click(function(){
        alert("Olá Mundo")
    })
    
});

//criando função
function pegarvalor(){
    var nome = document.querySelector('.nome').value;
    var sobrenome = document.querySelector('.sobrenome').value;

    alert("Seja Bem Vindo " + nome + " " + sobrenome); 
    console.log(nome); 
}