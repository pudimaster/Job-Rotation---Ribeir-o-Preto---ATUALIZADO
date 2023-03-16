/* 1) Observe o trecho de código abaixo:
int INDICE = 13, SOMA = 0, K = 0;
enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}
imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?*/
let indice = 13 ;
let soma = 0;
let k =0;

while (k < indice) {
    k = k + 1;
    soma = soma + k
}

console.log(soma)
// resultado 91
/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2
valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que
desejar onde, informado um número, ele calcule a sequência de Fibonacci
e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/
function CalculandoFibonacci (valor){
    fibonacci = [0,1]
    j = 2
    while (valor > fibonacci[j-1]){
        x = fibonacci[j -2] +  fibonacci[j-1]
        fibonacci.push(x)
        j += 1
    }
    if (valor == fibonacci[j-1]){
        console.log(valor + 'faz parte da sequencia ')
    }else{
        console.log(valor  + " não faz parte da sequencia ")
    }
}
CalculandoFibonacci(14);
/* 3) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, Resposta 9 *
b) 2, 4, 8, 16, 32, 64, Resposta 128*
c) 0, 1, 4, 9, 16, 25, 36, Resposta 49*
d) 4, 16, 36, 64, Resposta 100*
e) 1, 1, 2, 3, 5, 8, Resposta 13*
f) 2,10, 12, 16, 17, 18, 19, Resposta 200 */

/* -4) Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia.
 O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção
 a Ribeirão Preto a uma velocidade constante de 80 km/h.
Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

R(Os dois vão estar mais proximos da cidade de ribeirão preto pos no momentos que eles se cruzarem eles vão estar na mesma posição)
*/

/*5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;*/

function inverterString(str) {
    var o = '';
    for (var i = str.length - 1; i >= 0; i--) {
        o += str[i];
    }
    return o;
}
console.log(inverterString("ygor"));