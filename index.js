const numeros = document.getElementsByName('num_boton');
const op = document.getElementsByName('operador');
const op_igual = document.getElementsByName('operador_igual')[0];
const eliminar = document.getElementsByName('boton_delete')[0];
var result = document.getElementById('Pantalla');
var operActual = '';
var operAnterior = '';
var operacion = undefined;  



numeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarnumero(boton.innerText);
    })
});

op.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    })
});


op_igual.addEventListener('click', function(){
    calcular();
    actualizarPantalla();
});


eliminar.addEventListener('click', function(){
    clear();
    actualizarPantalla();
});


function agregarnumero(num){
    operActual = operActual.toString() + num.toString();
    actualizarPantalla();
}

function selectOperacion(oper){
    if(operActual === '') return;
    if(operAnterior != ''){
        calcular();
    }
    operacion = oper.toString();
    operAnterior = operActual;
    operActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(operAnterior);
    const actual = parseFloat(operActual);
    if(isNaN(anterior) || isNaN(actual)) return;

    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case '*':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    operActual = calculo;
    operacion = undefined;
    operAnterior = '';
}


function actualizarPantalla(){
    result.value = operActual;
}


function clear(){
    operActual = '';
    operAnterior = '';
    operacion = undefined; 
}