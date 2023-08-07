// var i;
// let y;
// const maria = 'Maria';

// function getNome(){
//     let nome = 'Maria';
//     return nome;
//     i = 1;
// }
// nome = 4;

// var nome = 'String';
// var idade = 23;
// const valores = ['valor1', 'valor2', 'valor3', 3, undefined];

// var preco = 1.32;
// var obj = {nome: 'nome', idade: 20};
// obj.nome = nome;

// console.log(typeof obj);

// const gabi = ['pera', 'maca','banana'];
// gabi.push('mexirica','papaya');
// gabi.pop() // remove ultimo
// gabi.shift() //remover primeiro
//console.log(gabi)

// for(var i = 0; i<gabi.length; i++){
//     console.log(gabi[i])
// }

// for(var fruta of gabi){
//     fruta = fruta + ' passou da validade';
//     console.log(fruta);
// }

// for(var index in gabi){
//     var fruta = gabi[index];
//     console.log(fruta);
// }

// gabi.forEach(fruta => {
//     console.log(fruta);
// })

// function nome(){

// }

// const nome = function(){

// }

// const idade = (nome, idade) => {
//     idade;
//     nome;
// }

// var idade = 10;


// if(idade >= 18){
//     console.log('É um adulto')
// }else if(idade > 10){
//     console.log('É um adolecente');
// }
// else{
//     console.log('É uma criança');
// }

var array1 = [];
var obj1 = {nome: "Maria", idade: 23, genero:'F'};
array1.push(obj1);
var obj2 = {nome: "Luiz", idade: 24, genero:'M'};
array1.push(obj2);
var obj3 = {nome: "Lucas", idade: 16, genero:'M'};
array1.push(obj3);

for(var i = 0; i< array1.length; i++){
    let obj = array1[i];
    if(obj.idade >= 18 && obj.genero == 'F'){
        console.log('O nome da pessoa é ' + obj.nome + ' e é mulher e tem ' + obj.idade + ' anos')
    } else{
        console.log('O nome da pessoa é ' + obj.nome + ' e é homem e tem ' + obj.idade + ' anos')

    }
} 

var maiorIdade = [];
var menorIdade = [];


4-+4u
console.log(maiorIdade)
console.log(menorIdade)


