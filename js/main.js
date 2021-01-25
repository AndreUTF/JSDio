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

function logArgs(...args) {
    console.log(arguments);
}

const arr2 = [5, 6, 7].concat(arr);

logArgs(...str2);
logArgs(...arr);
console.log(arr2);

const array3 = [...arr2, 6, 7, 9];
console.log(array3);

// Destrycturing ReactJS

var arr5 = ['apple', 'banana', 'orange'];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

var [apple2, banana2, orange2, [tomato2]] = [
    "apples",
    "banana",
    "orange", ["tomato"]
];

console.log(tomato2);

var obj6 = {
    name: 'Andre'
}

//var name = obj.name;

var { name } = obj6;

console.log(name);

var obj7 = {
    name: 'Andre',
    props: {
        age: 26
    }
};

console.log(obj7);

var {
    props: { age: age51 }
} = obj7;

console.log(obj7);

let [one, two, three, four] = ['Digital', 'Innovation', 'One'];
console.log(four);

//Introducao a generics
//Symbols
const uniqueID = Symbol('Hello');
const uniqueID1 = Symbol('Hello');

console.log(uniqueID);
console.log(uniqueID1);

const obj8 = {
    [uniqueID]: 'Hello'
};

console.log(obj8);
console.log(Object.getOwnPropertySymbols)

//Well known symbols
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr6 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr6);

const str6 = 'Digiral Innovation One';
console.log(str6);
const it3 = arr6[Symbol.iterator]();
console.log(arr6[Symbol.iterator]().next())

while (true) {
    let value = it3.next();
    console.log(value);
    if (value.done) {
        break;
    }
}

const arr7 = [...str2, ...arr6];

const obj10 = {
    values: [1, 2, 3, 4, 5],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i += 1;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const obj11 = {
    values: [1, 2, 3, 4, 5],
    *[Symbol.iterator]() {
        for (let i = 0; i <= this.values; i++) {
            yield this.values[i];
        }
    }
};

for (let value of obj11) {
    console.log(value);
}

const it4 = obj10[Symbol.iterator]();
console.log("Obj10")
console.log(it4.next);
console.log(it4.next);
console.log(it4.next);
console.log(it4.next);
console.log(it4.next);
console.log(it4.next);


/*
const obj7 = (
    values: [1, 2, 3, 4, 5, 6, 7];
    [Symbol.iterator]() {

    }
)


for (let value of arr6) {
    console.log(value);
}
*/

//Introducao a generator
function hello() {
    console.log('Hello');
    console.log('From');
    console.log('Function');
}

const it5 = hello();

const obj13 = {
    values: [1, 2, 3, 4, 5],
    *[Symbol.iterator]() {
        for (var i = 0; i <= this.values; i++) {
            yield this.values[i];
        }
    }
};

console.log(obj13.values.push);
console.log(obj13.values.push);
console.log(obj13.values.push);
console.log(obj13.values.push);
console.log(obj13.values.push);

for (let value1 of obj13) {
    console.log(value1);
}