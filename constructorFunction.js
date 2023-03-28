// function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
//     return{
//         marcaCelular,
//         tamanhoTela,
//         capacidadeBateria,
//         ligar(){
//             console.log("Fazendo ligação...")
//         }
//     }
// }

function Celular(marcaCelular,tamanhoTela,capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function () {
        console.log("Fazendo ligação...");
    }

}

const celular = new Celular('ASUS', 5.5, 5000);
console.log(celular);