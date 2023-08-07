const cliente = {
    nome: "Maria",
    idade: 23,
    cpf: "1234567891011",
    email: "gabigabi@dominio.com"

};

console.log(`o nome da cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`);