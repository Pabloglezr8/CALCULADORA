let expresion = "";

const screen = document.getElementById("screen");

const operation = document.getElementById("operation");

const numbers = document.querySelectorAll(".numbers");

const operators = document.querySelectorAll(".operator");


c.addEventListener("click", () => {
    if (expresion.length > 0) {
        expresion = expresion.slice(0, -1);
        operation.textContent = expresion;

        open.log(expresion.textContent);
    }
});

ce.addEventListener("click", () => {
    if (expresion.length > 0) {
        expresion = expresion.slice(0, -1);
        operation.textContent = expresion;

        open.log(expresion.textContent);
    }
});

del.addEventListener("click", () => {
    screen.textContent = "0"; // Borramos el resultado de la pantalla "screen"
    expresion = ""; // Reiniciamos la expresión
    operation.textContent = ""; // Borramos la operación en "operation"
    calculator = false;
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        expresion += operator.textContent; // Concatenamos el número
        operation.textContent = expresion;

        console.log(operation.textContent); // Mostramos la expresión en la pantalla
    });
});

numbers.forEach((numbers) => {
    numbers.addEventListener("click", () => {
        expresion += numbers.textContent; // Concatenamos el número
        operation.textContent = expresion;

        console.log(operation.textContent); // Mostramos la expresión en la pantalla
    });
});

iqual.addEventListener("click", () => {
    try {
        const result = Number(eval(expresion).toFixed(2));
        screen.textContent = result;
        expresion = result.toString();// Actualizamos la expresión con el resultado
        console.log(screen.textContent);
    } catch (error) {
        screen.textContent = "Error";
    }
});

porcent.addEventListener("click", () => {
    try {
        const result = Number(eval(expresion) / 100);
        expresion = result.toString();
        screen.textContent = result;
    } catch (error) {
        screen.textContent = "Error";
    }
});


exp.addEventListener("click", () =>{
    try {
        const result = Number(eval(Math.pow(expresion,2)));
        expresion = result.toString();
        screen.textContent = result;
    } catch (error) {
        screen.textContent = "Error";
    }
});

raiz.addEventListener("click", () => {
    try {
        const result = Number(eval(Math.sqrt(expresion)));
        expresion = result.toString();
        screen.textContent = result;
    } catch (error) {
        // Maneja errores si la expresión no es válida
        screen.textContent = "Error";
    }
});

signe.addEventListener("click", () => {
    try {
        const number = Number(expresion);
        const result = -1 * number;
        expresion = result.toString();
        screen.textContent = result;
    } catch (error) {
        screen.textContent = "Error";
    }
});

divi.addEventListener("click", () => {
    try{
        const result = Number(1 / eval(expresion));
        expresion = result.toString();
        screen.textContent = result;
    } catch (error){
        screen.textContent0 = "Error";
    }

});