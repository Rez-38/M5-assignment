document.write(`<h2>Practice with Functions</h2>`);


//STEP 1
const halfNumber = (num) => {
    console.log(`Half of ${num} is ${num / 2}`);
    return num / 2;
}

//STEP 2
const squareNumber = (num) => {
    console.log(`The result of squaring the number ${num} is ${num * num}`);
    return num * num;
}

//STEP 3
const percentOf = (a, b) => {
    console.log(`${a} is ${(a / b) * 100}% of ${b}`);
    return (a / b) * 100;
}

//STEP 4
const findModulus = (a, b) => {
    console.log(`${b % a} is the modulus of ${a} and ${b}`);
    return b % a;
}

//STEP 5