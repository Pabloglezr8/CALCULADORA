let expresion = "";// alamcenamos las operaciones
let result = "";// resultado de las operaciones
let op = false;

const screen = document.getElementById("screen");// pantalla resultado

const operation = document.getElementById("operation");// pantalla donde aparece la operación

const numbers = document.querySelectorAll(".numbers");// boton de numeros

const operators = document.querySelectorAll(".operator");// boton de operaciones +  -  *  /


const c = document.getElementById("c");// boton C

const pi = document.getElementById("pi");// boton π 

const del = document.getElementById("del");// boton ⌫

const iqual = document.getElementById("iqual");// boton =

const porcent = document.getElementById("porcent");// boton %

const exp = document.getElementById("exp");// boton X²

const raiz = document.getElementById("raiz");// boton √

const signe = document.getElementById("signe");// boton +/-

const divi = document.getElementById("divi");// boton 1/x


c.addEventListener("click", () => {
    if (expresion.length > 0) {
        expresion = expresion.slice(0, -1);
        operation.textContent = expresion;

        open.log(expresion.textContent);
    }
});

pi.addEventListener("click", () => {
    expresion += "3.14";
    operation.textContent = expresion;

    console.log(operation.textContent);
});

del.addEventListener("click", () => {
    screen.textContent = "0";
    expresion = ""; 
    operation.textContent = ""; 
    result = "";
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        expresion += operator.textContent; 
        operation.textContent = expresion;

        console.log(operation.textContent); 
    });
});

numbers.forEach((numbers) => {
    numbers.addEventListener("click", () => {
        expresion += numbers.textContent; 
        operation.textContent = expresion;

        console.log(operation.textContent); 
    });
});

iqual.addEventListener("click", () => {
    try {
        result = Number(eval(expresion).toFixed(2));
        screen.textContent = result;
        expresion = result.toString();
        console.log(screen.textContent);

    } catch (error) {
        screen.textContent = "Error";
    }
});

porcent.addEventListener("click", () => {
    try {
        result = Number(eval(expresion) / 100);
        expresion = result.toString();
        screen.textContent = result;
    } catch (error) {
        screen.textContent = "Error";
    }
});


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

signe.addEventListener("click", () => {
    try {
        const number = Number(expresion);
        result = -1 * number;
        expresion = result.toString();
        screen.textContent = result;
    } catch (error) {
        screen.textContent = "Error";
    }
});

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