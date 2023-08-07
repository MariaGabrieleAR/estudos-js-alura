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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto)

if(!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessário ter um endereço cadastrado")
}