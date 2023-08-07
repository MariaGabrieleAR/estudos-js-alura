const cliente = {
    nome: "Joao",
    idade: 24,
    email: "gabi@firma.com",
    telefone: ["4198985574", "4188779955"],
};

cliente.enderecos = [{
    rua: "R. Paranagua",
    numero: 1,
    apartamento: true,
    complemento: "ap 305",

    }
];

for(let chave in cliente){
    let tipo = typeof cliente[chave];
    if(tipo !== 'object' && tipo !== "function"){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
 }
}