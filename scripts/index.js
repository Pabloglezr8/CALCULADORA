//Pablo Gonzalez Ruiz
//https://github.com/Pabloglezr8/CALCULADORA.git

let expresion = "";// alamcenamos las operaciones
let result = "";// resultado de las operaciones
let newOp = true;// validador de operacion nueva o no

const screen = document.getElementById("screen");// pantalla resultado

const operation = document.getElementById("operation");// pantalla donde aparece la operación

const numbers = document.querySelectorAll(".numbers");// boton de numeros

const operators = document.querySelectorAll(".operator");// boton de operaciones +  -  *  /


const del = document.getElementById("del");// boton C

const pi = document.getElementById("pi");// boton π 

const clean = document.getElementById("clean");// boton ⌫

const equal = document.getElementById("equal");// boton =

const porcent = document.getElementById("porcent");// boton %

const exp = document.getElementById("exp");// boton X²

const raiz = document.getElementById("raiz");// boton √

const sign = document.getElementById("sign");// boton +/-

const divi = document.getElementById("divi");// boton 1/x

//funcion para el boton de borrado
del.addEventListener("click", () => {
    if (expresion.length > 0) {
        expresion = expresion.slice(0, -1);
        operation.textContent = expresion;

    }
});

//funcion para poner 3,14 como digito
pi.addEventListener("click", () => {
    expresion += "3.14";
    operation.textContent = expresion;

    console.log(operation.textContent);
});


//funcion para limpiar la pantalla y resultado igualarlo a 0
clean.addEventListener("click", () => {
    screen.textContent = "0";
    expresion = ""; 
    operation.textContent = ""; 
    result = "";
});

//funcion para la inserccion de los operadores + - / *
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        expresion += operator.textContent; 
        operation.textContent = expresion;
        newOp = false;
        console.log(operation.textContent); 
    });
});


//funcion para la insercción de números
numbers.forEach((numbers) => {
    numbers.addEventListener("click", () => {
        if (result !== "0" && newOp) {
            expresion = "";
        }
        result = "0";
        expresion += numbers.textContent;
        operation.textContent = expresion;
    });
});

//funcion para obtener el resultado de las operaciones
equal.addEventListener("click", () => {
    try {
        result = Number(eval(expresion).toFixed(2));
        screen.textContent = result;
        expresion = result.toString();
        console.log(screen.textContent);
        newOp = true;

    } catch (error) {
        screen.textContent = "Error";
    }
});

//funcion para dividir entre 100
porcent.addEventListener("click", () => {
    try {
        result = Number(eval(expresion) / 100);
        expresion = result.toString();
        screen.textContent = result;
    } catch (error) {
        screen.textContent = "Error";
    }
});

//funcion para calcular la potencia cuadrada de un número
exp.addEventListener("click", () => {
    try {
        result = Number(eval(Math.pow(expresion, 2)));
        operation.textContent = "sqr(" + expresion + ")";
        expresion = result.toString();
        screen.textContent = result;
    } catch (error) {
        screen.textContent = "Error";
    }
});

//funcion para calcular la raiz cuadrada de un numero
raiz.addEventListener("click", () => {
    try {
        result = Number(eval(Math.sqrt(expresion)));
        operation.textContent = "√(" + expresion + ")";
        expresion = result.toString();
        screen.textContent = result;
    } catch (error) {
        screen.textContent = "Error";
    }
});

//funcion para cambiar el signo de los número
sign.addEventListener("click", () => {
    try {
        const number = Number(expresion);
        result = -1 * number;
        expresion = result.toString();
        screen.textContent = result;
    } catch (error) {
        screen.textContent = "Error";
    }
});

//funcion para dividir 1 entr el número
divi.addEventListener("click", () => {
    try {
        result = Number(1 / eval(expresion));
        operation.textContent = "1/(" + expresion + ")";
        expresion = result.toString();
        screen.textContent = result;
    } catch (error) {
        screen.textContent0 = "Error";
    }

});