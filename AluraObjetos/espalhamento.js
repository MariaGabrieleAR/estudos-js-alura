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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
  
};

console.log(encomenda)