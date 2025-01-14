const clear = document.querySelector('.AC');
clear.addEventListener('click', () => {
    const input = document.querySelector('input');
    input.value = "";
});

function updateDisplay(){
    const operators = document.querySelectorAll('.opr');
    const numbers = document.querySelectorAll('.number');
    numbers.forEach((number) => {
        const input = document.querySelector('input');
        number.addEventListener('click', (e) => {
            input.value += e.target.textContent;
        });
    });
    
    operators.forEach((operator) => {
        operator.addEventListener('click', (e) =>{
            const input = document.querySelector('input');
            if (e.target.textContent == '=') return;
            input.value += e.target.textContent;
        });
    });
};

function operate (operator, num1, num2) {
    const input = document.querySelector('input').value;
    num1 = parseInt(input.split(/[*]|[-]|[+]|[\/]/)
    .splice(0, 1)
    .join());
    num2 = parseInt(input.split(/[*]|[-]|[+]|[\/]/)
    .splice(-1)
    .join());
    operator = input.split(/[^-|+|*|\/|%]/)
    .filter(e => e)
    .join();
    if (operator == '+') {
        return num1 + num2
    } else if (operator == '-') {
        return num1 - num2
    } else if (operator == '*') {
        return num1 * num2
    } else if (operator == '/') {
        return num1 / num2
    } else if(operator == '%'){
        return num1 / 100;
    } else {
        return 0;
    };
};


const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    const input = document.querySelector('input');
    input.value = operate();
});

const erase = document.querySelector('.C');
erase.addEventListener('click', (e) => {
    const input = document.querySelector('input');
    input.value = input.value.slice(0, -1);
});
updateDisplay()