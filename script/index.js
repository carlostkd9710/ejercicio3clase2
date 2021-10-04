alert("Prueba");
function funcionSubmib(event){
    event.preventDefault();
}

document.getElementById("comp").style.display = "none"

let valorhora;
let canthoras;
let descuento;
let tipoo;
let valorinicial;
let valortotal;

function calcular(){
    horas = document.getElementById("salida").value;
    tipoo = document.getElementById("tipo").value;
    valor = valorServicio(horas);
    descuento = Descuento(tipoo, valor);
    valortotal = valor - descuento
   /*  console.log(horas,tipo);
    alert("imprimiendo Factura") */

    document.getElementById("comp").style.display = "block"
    document.getElementById("valor").value = valor
    document.getElementById("descuento").value = descuento
    document.getElementById("totalpago").value = valortotal
}

function valorServicio(horas){
    //condicional
    if(horas>0 && horas<=2){
        valorhora = 5000;
        valorinicial= horas *valorhora
    }else if(horas>=3 && horas<=5){
        valorhora = 4000;
        valorinicial= 10000 + ((horas-2)*valorhora)
    }else if(horas>5 && horas<=10){
        valorhora = 3000;
        valorinicial= 10000 + 12000 + ((horas-5)*valorhora)
    }else if(horas>10){
        valorhora = 2000;
        valorinicial= 10000 + 12000 + 15000 + ((horas-10)*valorhora)
    }
    return valorinicial
}

function Descuento(tipoo,valorCalculo){
    switch(tipoo){
        case 'moto':
            descuento = valorCalculo *0.10
            break;
        case 'carro':
            descuento = valorCalculo *0.15
            break;
        default:
            alert('Dato no valido')
    }
    return descuento;
}