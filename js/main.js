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

/*
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

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar contexto");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Pagina carregada");
}

function change(elemento) {
    console.log(elemento.value);
}

var idade_entry = prompt("Qual a sua idade?");
console.log(validaIdade(idade_entry));
*/

//function log(value) {
//    console.log(value);
//}


var log1 = function(value) {
    console.log(value);
};

var sum = function(a, b) {
    console.log(a + b);

    return a + b;
};

//Arrow functions
var sum1 = (a, b) => {
    var x = 10;

    if (a > b) {}
    return a + b + x;
}

var obj = {
    showContext: function showContext() {
        console.log(this);
    },
    log: function log(value) {
        console.log(value);
    }
};

console.log(obj.showContext());

log1("teste");
sum(5, 5);
console.log(sum1(5, 15))

//Default argument functions
function multiply(a, b) {
    //b = b || 1;
    b = typeof b == "undefined" ? 1 : b;

    return a * b;
}

//Lazy Evaluation
function randomNumber() {
    console.log("Generating a random number")
    return Math.random() * 10;
}

function multiply1(a, b = randomNumber()) {
    //b = b || 1;
    return a * b;
}

var mult = (a, b) => {
    a = typeof a == "undefined" ? randomNumber() : a;
    b = typeof a == "undefined" ? randomNumber() : b;
    return a * b;
}

console.log(multiply1(5));
console.log(multiply1(3));

//Enhanced Object Literals
function method1() {
    console.log('method called');
}

var prop1 = 'Digital Innovation One';
var obj = {
    sum: function sum(a, b) {
        return a + b;
    }
};
console.log(obj.sum(1, 5));

var propName = "test";
var obj2 = {};

obj2[propName + 'concat'] = 'prop value';
console.log(obj2);

//Rest e spread operators

function sum3(a, b) {
    var value = 0;

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}

//Rest operator
function sum4(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}

var sum5 = (...rest) => {
    return rest.reduce((acc, value) => acc + value, 0);
};

const multiply4 = (...args) => args.reduce((acc, value) => acc * value, 1);

console.log(sum4(5, 5, 5, 2, 3));
console.log(sum5(5, 5, 5, 2, 3));
console.log(multiply4(5, 5, 5, 2, 3));

//Spread operator
const str2 = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs() {
    console.log(arguments);
}

function logArgs1(a, b, c) {
    console.log(a, b, c);
}

const arr2 = [5, 6, 7].concat(arr);

logArgs(...str2);
logArgs(...arr);
console.log(arr2);