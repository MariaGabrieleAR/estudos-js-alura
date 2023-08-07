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

}];

cliente.enderecos.push({
    rua: "R monte alegre",
    numero: 2,
    apartamento: false,
});


const listaApenasPartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
)

console.log(listaApenasPartamentos);