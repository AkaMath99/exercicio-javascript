let valor = prompt('Digite um número: ');

let numero = Number(valor);

if (valor === '' || isNaN(numero)){
        console.log('Esse não é um valor válido');
} else {
    if (numero % 2 === 0){
        console.log(`O número ${numero} é par`);
    } else {
        console.log(`O número ${numero} é ímpar`);
    }
}
