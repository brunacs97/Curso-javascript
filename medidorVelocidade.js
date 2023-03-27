//Velocidade maxima de ate 70 km
//A cada 5km acima do limite voce ganha 1 ponto na carteira
//Utilizar Math.Floor() para arredondar os valores
//Se ponto maior que 12 carteira é suspendida
verificarVelocidade(150);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;

    if (velocidade <= velocidadeMaxima)
        console.log('ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if(pontos>= 12)
            console.log('Carteira suspensa');
        else
        console.log('Pontos', pontos);

    }

}