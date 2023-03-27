//Se for divisivel por 3 retorna -> Fizz
//Se for divisivel por 5 retorna -> Buzz
//Se for divisivel tanto por 5 quanto por 3 retorna ->fizzBuzz
//Se não for divisivel nem por 3 nem por 5 retornamos o proprio valor
//Se for um valor que não é número retorna uma msg dizendo que não é numero

const resultado = fizzBuzz(1);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Não é um numero';
    if (entrada % 3 === 0 && entrada % 5 ===0 )
        return 'FizzBuz';
    if(entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 ===0)
        return 'Buzz';
    return entrada;
    
}
