//criar um metodo para ler propriedades de um objeto e exibir somente as propriedades do tipo string que estao nesse objeto


const pessoa = {
    nome: 'Bruna',
    idade: 25,
    Sobrenome: 'Silva',
}

exibirPropriedades(pessoa)

function exibirPropriedades(obj){
    for (prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
  


}