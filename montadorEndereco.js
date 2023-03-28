let endereco = {
    rua:'Rua teste endereco',
    cidade:'Cidade de teste endereco',
    cep:'8542669',

 
}

function exibeEndereco(endereco){
    for (let chave in endereco)
    console.log(chave,endereco[chave]);

}

exibeEndereco(endereco)