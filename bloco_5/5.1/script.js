let arrayOfTags = document.getElementsByTagName("p");

for(let i = 0;i < arrayOfTags.length; i += 1  ){
    document.getElementsByTagName("p")[i].innerText = "Com 3500.00 formado na trybe e formando em Eng.Elétrica";
}
//selecionando a classe e mudando a cor
document.querySelector(".main-content").style.backgroundColor = 'rgb(76,164,109)';
// selecionando a classe e mudando a cor
document.querySelector(".center-content").style.backgroundColor = 'white';
//selecionando h1 via css e mudando o texto
document.querySelectorAll("h1")[0].innerText = 'Exericicio 5.1 - JavaScript The .Js';
//exibindo todo o document
console.log(document.getElementsByTagName("p")).innerText



