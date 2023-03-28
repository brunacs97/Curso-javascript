//array de objetos de faixa de preço para que ele possa ser usado 

//primeira opçao

let faixas = 
    [
        {tooltip:'mensagem de dica', valorMax:700, valorMin:0},
        {tooltip:'mensagem de dica 2', valorMax:1000, valorMin:700},
        {tooltip:'mensagem de dica 3', valorMax:99999, valorMin:1000}
        
    ];

  

//segunda opçao (factory Function)
function criaFaixaPreco(tooltip,minimo,maximo){
    return{
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a',1,100),
    criaFaixaPreco('b',18,90),
    criaFaixaPreco('a',17,10),

];


//terceira opção constructor function 
function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new FaixaPreco ('d',10,20),
    new FaixaPreco ('e',3,34),
    new FaixaPreco('j',4,5)
]


console.log(faixas);
console.log(faixas2);
console.log(faixas3);