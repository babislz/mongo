function Verify(cpf){
    let soma = 0;

    for(let i = 0; i < 9; i++){
        soma += (10 - i) * cpf.charAt(i);
    }

    let resto1 = soma * 10 % 11;
    if(resto1 == 10){
        resto1 = 0;
    }

    soma = 0;

    for(let i = 0; i < 10; i++){
        soma += (11 - i) * cpf.charAt(i);
    }

    let resto2 = soma * 10 % 11;
    if(resto2 == 10){
        resto2 = 0;
    }

    return resto1 == cpf.charAt(9) && resto2 == cpf.charAt(10);
}

module.exports = {Verify};