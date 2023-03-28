// //objeto com array

// let postagem = {
//     titulo: 'teste',
//     mensagem:'mensagem de teste',
//     autor:'autor de teste',
//     vizualizacoes:85,
//     comentarios:[
//         { autor : 'teste autor comentario', mensagem:'b'},
//         { autor : 'teste autor comentario', mensagem:'b'}

//     ],
//     estaAoVivo : true

// }
// console.log(postagem)

//criar uma constructor function  que retorna um objeto com array
function Postagem(titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    visualizacoes = 0 ,
    this.comentarios  = [],
    this.estaAoVivo = false
}   

let postagem = new Postagem ('a','b','c');
console.log(postagem);
