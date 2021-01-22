var nome = "andré portes ferriani";
var idade = 29;
var idade1 = 10;
var frase = "Japao é o melhor time do mundo";

/*
alert("Bem vindo " + nome);
alert(nome + " tem " + idade + " anos");
alert(idade + idade1);
console.log(idade + idade1);
console.log(frase.replace("Japao", "Brasil"));

var lista = ["maca", "pera", "laranja"];
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
lista.push("morango");
console.log(lista);

var dicionarioFruta = [{ nome: "maca", cor: "vermelha" }, { nome: "abacaxi", cor: "amarelo" }];
console.log(dicionarioFruta);
alert(dicionarioFruta);

alert(dicionarioFruta[1].nome);


var idade3 = prompt("Qual sua idade?");
if (idade3 >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
}
*/


var count = 5;
for (var j = 0; j < count; j++) {
    console.log(j);
}

var str = ["mae", "floresta", "avo"]
str.join(" > ");
console.log(str);

function soma(n1, n2) {
    return n1 + n2;
}

alert(soma(5, 10));

function validaIdade(idade) {
    var validar;
    if (idade > 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

function clicou() {
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>";
    //console.log(document.getElementById("agradecimento").innerHTML)
}

function redirecionar() {
    window.open("https://globallabs.academy/");
    //window.location.href = "https://www.hltv.org";
}

function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar contexto");
}

var idade_entry = prompt("Qual a sua idade?");
console.log(validaIdade(idade_entry));