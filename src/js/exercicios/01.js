// desconto em compra
// regra de negocio
// se valorCompra >= 100 -> 10% de desconto
// se valorCompra < 100 -> sem desconto
// cria uma função que execute isso!

// let chocolate = 10 //variavel global

// console.log(chocolate);
// console.log(desconto);

function ValidaDesconto(valorCompra) {
    let desconto = 0 // variavel de escopo

    if (valorCompra >= 100) {
        desconto = valorCompra * 0.10
    }

    valorFinal = valorCompra - desconto

    return {
        valorCompra,
        desconto,
        valorFinal
    }
}

console.log(ValidaDesconto(1200));


