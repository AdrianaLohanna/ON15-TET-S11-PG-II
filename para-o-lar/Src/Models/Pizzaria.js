const catalogoDePizzas = [ 
{ 
    id:"1",
    nome: "calabresa",
    preco: "15.00",
    tamanho: "média"
},

{ 
    id:"2",
    nome: "portuguesa",
    preco: "30.00",
    tamanho: "grande"
},

{ 
    id:"3",
    nome: "quatro queijos",
    preco: "45.00",
    tamanho: "família"
}
]
const pizzariasDb =
[
    {
        "nome":"Pizzaria trans",
        "endereco":"Avenida Etelvino Alves de Lima 85B - Aracaju-SE",
        "telefone":"(79) 99817-1566",
        "catalogoDePizzas": [2, 3, 1,],
        "pagamento": [ "Cartão de Crédito", "Dinheiro à Vista", "Pix", "Débito"] ,
        "cliente": [2, 3,]
        
    },

    {
        "nome":"Pizzaria da Darlene",
        "endereco":"rua da caçolas - aracaju",
        "telefone":"(79) 98821-4727",
        "catalogoDePizzas": [2, 3],
        "pagamento": [ "Cartão de Crédito", "Dinheiro à Vista", "Pix", "Débito"] ,
        "cliente": require ("./Clientes.json")
        
    }
]
module.exports =pizzariasDb