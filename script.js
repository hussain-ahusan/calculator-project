const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multipily = (a, b) => a * b;

const divide = (a, b) => a / b;


function operate (operator, a, b) {
    switch (operator){
        case '+':
            return add (a, b)
        case '-':
            return subtract (a, b)
        case '*':
            return multipily (a, b)
        case '/':
            return divide (a, b)
        default:
            return "";
    };
};

const numbers = document.querySelectorAll(".number");
