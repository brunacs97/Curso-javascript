//comparar se dois objetos são iguais

function Endereco(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep;
}

const endereco1 = new Endereco('a', 'b', 'c');
const endereco2 = new Endereco('a','b','c');

//comparando se as propriedades sao iguais
function objetoIguais(endereco1,endereco2){
    return endereco1.rua === endereco2.rua && 
    endereco1.cidade === endereco2.cidade &&
    endereco1.cep === endereco1.cep

}

console.log(objetoIguais(endereco1,endereco2));


//comparando se a referencia dos objetos aponta para o mesmo local na memoria
function temEnderecoMemoriaIguais(endereco1,endereco2){
    return endereco1 === endereco2;
}
console.log(temEnderecoMemoriaIguais(endereco1,endereco2));