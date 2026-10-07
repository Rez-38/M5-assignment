document.write(`<h2>The Basic Calculator</h2>`);
// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    switch (operation) {
        case '+':
            alert(`${x} + ${y} = ${x + y}`);
            break;
        case '-':
            alert(`${x} - ${y} = ${x - y}`);
            break;
        case '*':
            alert(`${x} * ${y} = ${x * y}`);
            break;
        case '/':
            alert(`${x} / ${y} = ${x / y}`);
            break;
    }
}


// COLLECT FIRST NUMBER FROM USER
let num1;
function getNum1() {
    num1 = prompt(`Number input...`, 'Number 1 here');
    if (isNaN(num1) == true && num1 !== null) {
        console.log('while block of code...');
        while (isNaN(num1) == true) {
            num1 = prompt('Must be a number', 'Number 1 here');
        }
    }
    num1 = Number(num1);
    console.log(`typeof num1: ${typeof num1}, num1: ${num1}`);
    console.log('while exited...');
    return num1;
}

// COLLECT SECOND NUMBER FROM USER
let num2;
function getNum2() {
    num2 = prompt(`Number input...`, 'Number 2 here');
    if (isNaN(num2) == true && num2 !== null) {
        console.log('while block of code...');
        while (isNaN(num2) == true) {
            num2 = prompt('Must be a number', 'Number 2 here');
        }
    }
    num2 = Number(num2);
    console.log(`typeof num2: ${typeof num2}, num2: ${num2}`);
    console.log('while exited...');
    return num2;
}

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let operation;
function getOperation() {
    operation = prompt(`What operation would you like to perform?`, '(add(+), subtract(-), multiply(*), divide(/))');
    console.log(`operation: ${operation}`);
    return operation;
}


// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
do {
    num1 = getNum1();
    num2 = getNum2();
    operation = getOperation();
    calculate(num1, num2, operation);
    if (operation !== '+' &&
        operation !== '-' &&
        operation !== '*' &&
        operation !== '/' &&
        operation !== null) {alert(`Input must be one of the following operators...\n(add(+), subtract(-), multiply(*), divide(/))`);}
} while (operation !== '+' &&
        operation !== '-' &&
        operation !== '*' &&
        operation !== '/' &&
        operation !== null);