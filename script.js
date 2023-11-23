/* Desafio técnico 1 da Escribo

Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores
inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.

input: 10
output: 23 (referente a soma de 3,5,6 e 9 que são menores que 10)
*/

const somaIntDiv = (num) => {
    let numerosDivisiveis3or5 = [];
    let numeroInicial = num;

    for (num--; num !== 0; num--) {
        if (num % 3 === 0 || num % 5 === 0) {
            numerosDivisiveis3or5.push(num);
        }
    }

    if (numerosDivisiveis3or5.length === 0) {
        return 'Nenhum antecessor desse número se enquadra na condição de ser divisível por 3 ou 5';
    } else {
        let somaNumerosDivisiveis = numerosDivisiveis3or5.reduce((res, num) => {
            return res + num;
        }, 0);

        return `Os números anteriores a ${numeroInicial} que são divisíveis por 3 ou 5 são: ${numerosDivisiveis3or5} e sua somatória é ${somaNumerosDivisiveis}`;
    } 
}

console.log(somaIntDiv(11));


/* Pronto, em um teste básico com somaIntDiv(10) teremos o output: 'Os número anteriores a 11 que são divisiveis por 3 ou 5, são esses: 10,9,6,5,3 e sua somatória é 33'
Mas caso você coloque um número que não tem nenhum dos seus antecessores como divisores para 3 ou 5, ele irá retornar:
 'Nenhum antecessor desse número se enquadra na condição de ser divisivel por 3 ou 5'

 É isso, uma aplicação simples, mas que trabalha bem a lógica diante o fluxo dos dados nas condicionais e na função
*/