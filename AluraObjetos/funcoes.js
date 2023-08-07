const cliente = {
    nome: "Joao",
    idade: 24,
    email: "gabi@firma.com",
    telefone: ["4198985574", "4188779955"],
    saldo: 200,
    efetuaPagamento:  function(valor) {
        if(valor > this.saldo){
            console.log("Saldo Insulficiente");
        }
        else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo ${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(25);