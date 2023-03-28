const novocelular = {
    
        marcaCelular:'ASUS',
        tamanhoTela:{
            vertical:155,
            horizontal:75
        },
        ligar:function (){
            console.log("Fazendo ligação...");
        }
     
}

const cloneCelular = {...novocelular};

cloneCelular.preco = 7.5;
console.log(cloneCelular);

